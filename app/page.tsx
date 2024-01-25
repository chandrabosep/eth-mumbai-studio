"use client";
import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner";
import Logo from "@/components/Logo";

export default function Home() {
  const [bg, setbg] = useState("#121212");
  const [outerTop, setOuterTop] = useState("#F89D21");
  const [outerBottom, setOuterBottom] = useState("#FFFFFF");
  const [innerTop, setInnerTop] = useState("#FFFFFF");
  const [innerBottom, setInnerBottom] = useState("#F89D21");
  const [textColor, setTextColor] = useState("#000000");

  const [currentClickedPart, setCurrentClickedPart] = useState("");
  const [color, setColor] = useState("#F89D21");
  const [displayColorPicker, setDisplayColorPicker] = useState("hidden");

  useEffect(() => {
    switch (currentClickedPart) {
      case "outerTop":
        return setOuterTop(color);
      case "outerBottom":
        return setOuterBottom(color);
      case "innerTop":
        return setInnerTop(color);
      case "innerBottom":
        return setInnerBottom(color);
      case "bg":
        return setbg(color);
      case "textColor":
        return setTextColor(color);
    }
  }, [color]);

  const svgRef = useRef<SVGSVGElement>(null);
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
        {/* <svg
          width="400"
          height="400"
          viewBox="0 0 2400 2400"
          fill="none"
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          className="border border-white/10 rounded-md"
        >
          <rect
            width="2400"
            height="2400"
            fill={bg}
            onClick={() => {
              setCurrentClickedPart("bg");
              setDisplayColorPicker("block");
            }}
          />
          <path
            d="M1185.6 294.398L1758 1216L1196.4 1548.4L642 1210L1185.6 294.398Z"
            onClick={() => {
              setCurrentClickedPart("outerTop");
              setDisplayColorPicker("block");
            }}
            fill={outerTop}
          />
          <path
            d="M1196.41 2105.2L1755.61 1319.2L1198.81 1649.2L645.609 1327.6L1196.41 2105.2Z"
            onClick={() => {
              setCurrentClickedPart("outerBottom");
              setDisplayColorPicker("block");
            }}
            fill={outerBottom}
          />
          <path
            d="M1186.79 456.398L1607.99 1166.8L1191.59 1428.4L788.391 1166.8L1186.79 456.398Z"
            onClick={() => {
              setCurrentClickedPart("innerTop");
              setDisplayColorPicker("block");
            }}
            fill={innerTop}
          />
          <path
            d="M1198.8 1992.4L1486.8 1572.4L1205.75 1750L928.805 1603.6L1198.8 1992.4Z"
            onClick={() => {
              setCurrentClickedPart("innerBottom");
              setDisplayColorPicker("block");
            }}
            fill={innerBottom}
          />
        </svg> */}
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

        <div className="flex gap-5">
          <Button className="bg-[#222222]" onClick={() => downloadImage("jpg")}>
            Download JPG
          </Button>
          <Button
            className="bg-[#222222]"
            onClick={() => {
              setbg("none");
              downloadImage("svg");
            }}
          >
            Download SVG
          </Button>
        </div>
        <div
          className={`${displayColorPicker} flex flex-col gap-5 items-center`}
        >
          <HexColorPicker color={color} onChange={setColor} />
          <Input
            className="w-40 h-10 p-2 mt-4 text-center rounded-md bg-[#222222] text-white"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
