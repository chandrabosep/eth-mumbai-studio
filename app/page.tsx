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
  const [outerTop, setOuterTop] = useState("#FFFFFF");
  const [outerBottom, setOuterBottom] = useState("#121212");
  const [innerTop, setInnerTop] = useState("#121212");
  const [innerBottom, setInnerBottom] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#121212");
  const [currentClickedPart, setCurrentClickedPart] = useState("");
  const { inputData, setInputData } = useStore((state) => ({
    inputData: state.inputData,
    setInputData: state.setInputData,
  }));

  const [displayColorPicker, setDisplayColorPicker] = useState("hidden");

  useEffect(() => {
    switch (currentClickedPart) {
      case "outerTop":
        setOuterTop(inputData);
        break;
      case "outerBottom":
        setOuterBottom(inputData);
        break;
      case "innerTop":
        setInnerTop(inputData);
        break;
      case "innerBottom":
        setInnerBottom(inputData);
        break;
      case "bg":
        setbg(inputData);
        break;
      case "textColor":
        setTextColor(inputData);
        break;
      default:
        break;
    }
  }, [inputData]);

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
          defaultValue="banner"
          className="w-full flex flex-col gap-8 justify-center items-center"
        >
          <TabsList className="w-fit bg-theme-dark text-theme-light/50 py-1.5 px-1.5 ">
            <TabsTrigger
              value="banner"
              className="text-lg  font-light rounded-md"
            >
              Banner
            </TabsTrigger>
            <TabsTrigger value="logo" className="text-lg font-light rounded-md">
              Logo
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
          <TabsContent value="banner">
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
            className="bg-theme-dark border font-light border-theme-light/10 text-base text-theme-light"
            onClick={() => downloadImage("jpg")}
          >
            Download JPG
          </Button>
          <Button
            className="bg-theme-dark text-base border-theme-light/10 font-light text-theme-light"
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
          <HexColorPicker color={inputData} onChange={setInputData} />
          <Input
            className="w-40 h-10 p-2 mt-4 text-center rounded-md bg-theme-dark text-theme-light"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
