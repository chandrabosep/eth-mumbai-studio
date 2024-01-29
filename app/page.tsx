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
import DownloadBtn from "@/components/DownloadBtn";
import { Button } from "@/components/ui/button";

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

  const tweet = `%F0%9F%8C%9F%20Bantai%2C%20mint%20your%20own%20%40ethmumbai%20NFT%20and%20dive%20into%20the%20bawa%20world%20of%20blockchain%20art%21%20%E0%A4%85%E0%A4%AD%E0%A5%80%20%E0%A4%9B%E0%A4%BE%E0%A4%95%E0%A4%BE%21%20%E2%9C%A8%20Create%20your%20masterpiece%20at%20eth-mumbai-studio.vercel.app%20Jhakaas%21%0A%0A%20%23ETHMumbaiNFT%0A%20`;

  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="max-w-screen-xl mx-auto py-16 md:py-12 flex flex-col gap-28">
      <div className="flex flex-col items-center gap-8 md:gap-10">
        <Tabs
          defaultValue="banner"
          className="w-full flex flex-col gap-6 justify-center items-center"
        >
          <TabsList className="w-fit bg-theme-kaali/90 text-theme-dhobi/50 p-1 md:p-1 ">
            <TabsTrigger
              value="banner"
              className={`text-sm md:text-sm font-light rounded-full`}
            >
              Banner
            </TabsTrigger>
            <TabsTrigger
              value="logo"
              className="text-sm md:text-sm font-light rounded-full"
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
        <div className="py-4 w-full flex justify-center">
        <Link
          href={`https://twitter.com/intent/tweet?text=${tweet}`}
          target="_blank"
          className="bg-theme-peeli w-3/4 md:w-1/3 text-center py-3 text-base font-semibold text-theme-kaali rounded-sm flex items-center justify-center gap-2"
        >
          {
            <svg
              viewBox="0 0 1200 1227"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="none"
              className="w-5 h-5"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
            </svg>
          }
          <p>Tweet कर रे बावा</p>
        </Link>
        </div>
      </div>
      <div>
        <p className="text-center text-sm">
          created by{" "}
          <Link href="https://twitter.com/Chandra_Bose31">@Chandra_Bose31</Link>
        </p>
      </div>
    </div>
  );
}
