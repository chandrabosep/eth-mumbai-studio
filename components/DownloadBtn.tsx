import React from "react";
import { Button } from "./ui/button";
import { useStore } from "@/context/store";
import Mint from "./Mint";

export default function DownloadBtn({
  svgRef,
}: {
  svgRef: React.RefObject<SVGSVGElement>;
}) {
  const { bg, setbg } = useStore((state) => ({
    bg: state.bg,
    setbg: state.setbg,
  }));
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
  const downloadSVG = () => {
    const svgString = new XMLSerializer().serializeToString(
      svgRef.current as SVGSVGElement
    );
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement("a");
    document.body.appendChild(anchorElement);
    anchorElement.href = url;
    anchorElement.download = "ethMumbai.svg";
    anchorElement.click();
    document.body.removeChild(anchorElement);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="grid grid-cols-2 gap-y-6 gap-x-8 items-center ">
        <Button
          className={`bg-theme-peeli rounded-md text-sm font-semibold text-theme-kaali`}
          onClick={() => downloadImage("jpg")}
        >
          Download JPG
        </Button>
        <Button
          className="bg-theme-kaali  rounded-md text-sm font-light text-theme-dhobi"
          onClick={() => {
            setbg("none");
            downloadPng();
          }}
        >
          Download PNG
        </Button>
        <Button
          className="bg-theme-kaali  rounded-md text-sm font-light text-theme-dhobi"
          onClick={() => {
            setbg("none");
            downloadSVG();
          }}
        >
          Download SVG
        </Button>
        <div className="">
          <Mint svgRef={svgRef} />
        </div>
      </div>
    </div>
  );
}
