"use client";
import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner";
import Logo from "@/components/Logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStore } from "@/context/store";

export default function Home() {
  const { bg, setbg } = useStore((state) => ({
    bg: state.bg,
    setbg: state.setbg,
  }));
  const [outerTop, setOuterTop] = useState("#F89D21");
  const [outerBottom, setOuterBottom] = useState("#F89D21");
  const [innerTop, setInnerTop] = useState("#000000");
  const [innerBottom, setInnerBottom] = useState("#000000");
  const [textColor, setTextColor] = useState("#F89D21");
  const [currentClickedPart, setCurrentClickedPart] = useState("");
  const [color, setColor] = useState("#F89D21");
  const [displayColorPicker, setDisplayColorPicker] = useState("hidden");

  useEffect(() => {
    switch (currentClickedPart) {
      case "outerTop":
        setOuterTop(color);
        break;
      case "outerBottom":
        setOuterBottom(color);
        break;
      case "innerTop":
        setInnerTop(color);
        break;
      case "innerBottom":
        setInnerBottom(color);
        break;
      case "bg":
        setbg(color);
        break;
      case "textColor":
        setTextColor(color);
        break;
      default:
        break;
    }
  }, [color, setbg]);

  const svgRef = useRef<SVGSVGElement>(null);

  async function downloadPng() {
    await new Promise<void>(() => {
      setTimeout(() => {
        downloadImage("png");
      }, 1000);
    });
  }

  const downloadImage = (type: string) => {
    const svgString = new XMLSerializer().serializeToString(
      svgRef.current as SVGSVGElement
    );

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      //@ts-ignore
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL(`image/${type}`);
      const anchorElement = document.createElement("a");
      document.body.appendChild(anchorElement);
      anchorElement.href = dataURL;
      anchorElement.download = `ethMumbai.${type}`;
      anchorElement.click();
      document.body.removeChild(anchorElement);

      URL.revokeObjectURL(url);
    };

    img.src = url;
  };
  return (
    <div className="bg-black min-h-screen p-24 flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <Tabs
          defaultValue="logo"
          className="w-full flex flex-col gap-8 justify-center items-center"
        >
          <TabsList className="w-fit bg-theme-dark text-theme-light/50 py-1.5 px-1.5 ">
            <TabsTrigger value="logo" className="text-lg rounded-md">
              Logo
            </TabsTrigger>
            <TabsTrigger value="banner" className="text-lg rounded-md">
              Banner
            </TabsTrigger>
          </TabsList>
          <TabsContent value="logo">
            <Logo
              svgRef={svgRef}
              bg={bg}
              outerTop={outerTop}
              outerBottom={outerBottom}
              innerTop={innerTop}
              innerBottom={innerBottom}
              setCurrentClickedPart={setCurrentClickedPart}
              setDisplayColorPicker={setDisplayColorPicker}
            />
          </TabsContent>
          <TabsContent value="banner" className="w-full">
            <Banner
              svgRef={svgRef}
              bg={bg}
              outerTop={outerTop}
              outerBottom={outerBottom}
              innerTop={innerTop}
              innerBottom={innerBottom}
              textColor={textColor}
              setCurrentClickedPart={setCurrentClickedPart}
              setDisplayColorPicker={setDisplayColorPicker}
            />
          </TabsContent>
        </Tabs>

        <div className="flex gap-5 ">
          <Button
            className="bg-theme-dark border border-theme-dark text-lg text-theme-light"
            onClick={() => downloadImage("jpg")}
          >
            Download JPG
          </Button>
          <Button
            className="bg-theme-dark text-lg text-theme-light"
            onClick={() => {
              setbg("none");
              downloadPng();
            }}
          >
            Download PNG
          </Button>
        </div>
        <div
          className={`${displayColorPicker} flex flex-col gap-5 items-center`}
        >
          <HexColorPicker color={color} onChange={setColor} />
          <Input
            className="w-40 h-10 p-2 mt-4 text-center rounded-md bg-theme-dark text-theme-light"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
