"use client";
import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";
import Banner from "@/components/Banner";
import Logo from "@/components/Logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStore } from "@/context/store";
import Link from "next/link";
import ColorExtractor from "@/components/ColorExtractor";
import Mint from "@/components/Mint";
import DownloadBtn from "@/components/DownloadBtn";

export default function Home() {
  const {
    bg,
    setbg,
    outerTop,
    setOuterTop,
    outerBottom,
    setOuterBottom,
    innerTop,
    setInnerTop,
    innerBottom,
    setInnerBottom,
    textColor,
    setTextColor,
    currentClickedPart,
    setCurrentClickedPart,
  } = useStore((state) => ({
    bg: state.bg,
    setbg: state.setbg,
    outerTop: state.outerTop,
    setOuterTop: state.setOuterTop,
    outerBottom: state.outerBottom,
    setOuterBottom: state.setOuterBottom,
    innerTop: state.innerTop,
    setInnerTop: state.setInnerTop,
    innerBottom: state.innerBottom,
    setInnerBottom: state.setInnerBottom,
    textColor: state.textColor,
    setTextColor: state.setTextColor,
    currentClickedPart: state.currentClickedPart,
    setCurrentClickedPart: state.setCurrentClickedPart,
  }));

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
  }, [inputData, bg]);

  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="max-w-6xl mx-auto w-full pt-[22%] pb-[10%] md:pt-[5%] md:pb-[2%] flex flex-col gap-28">
      <div className="flex flex-col items-center gap-8 md:gap-10">
        <Tabs
          defaultValue="banner"
          className="w-full flex flex-col gap-6 justify-center items-center"
        >
          <TabsList className="w-fit bg-theme-kaali/90 text-theme-dhobi/50 p-1 md:p-1.5 ">
            <TabsTrigger
              value="banner"
              className={`text-sm md:text-base font-light rounded-full`}
            >
              Banner
            </TabsTrigger>
            <TabsTrigger
              value="logo"
              className="text-sm md:text-base font-light rounded-full"
            >
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
        <ColorExtractor />

        <div
          className={`${displayColorPicker} flex flex-col gap-5 items-center`}
        >
          <HexColorPicker color={inputData} onChange={setInputData} />
          <Input
            className="w-40 h-10 p-2 mt-4 text-center rounded-md bg-theme-kaali text-theme-dhobi"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div className="pt-4">
          <DownloadBtn svgRef={svgRef} />
        </div>
      </div>
      <div>
        <p className="text-center text-sm md:text-lg">
          created by{" "}
          <Link href="https://twitter.com/Chandra_Bose31">@Chandra_Bose31</Link>
        </p>
      </div>
    </div>
  );
}
