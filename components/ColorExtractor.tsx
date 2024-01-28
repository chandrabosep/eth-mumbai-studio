import React from "react";
//@ts-ignore
import ColorThief from "colorthief";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { useStore } from "@/context/store";

export default function ColorExtractor() {
  const {
    setbg,
    setOuterTop,
    setOuterBottom,
    setInnerTop,
    setInnerBottom,
    setTextColor,
  } = useStore((state) => ({
    setbg: state.setbg,
    setOuterTop: state.setOuterTop,
    setOuterBottom: state.setOuterBottom,
    setInnerTop: state.setInnerTop,
    setInnerBottom: state.setInnerBottom,
    setTextColor: state.setTextColor,
  }));
  const colorExtractor = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();
      img.onload = () => {
        const colorThief = new ColorThief();
        const extractedColors = colorThief
          .getPalette(img, 3)
          .map((color: number[]) => `rgb(${color.join(", ")})`);

        setOuterTop(extractedColors[0]);
        setInnerBottom(extractedColors[0]);

        setInnerTop(extractedColors[1]);
        setOuterBottom(extractedColors[1]);
        setTextColor(extractedColors[0]);

        setbg(extractedColors[2]);
      };
      // @ts-ignore
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="flex flex-col gap-6 py-4">
        <p className="text-sm text-center">
          Tap the colors to edit them or
        </p>
        <div className="w-fit">
          <Label
            htmlFor="file"
            className="p-3 md:p-4 bg-theme-bg shadow-md  shadow-theme-kaali/70 text-theme-kaali border border-theme-kaali/20 rounded-lg"
          >
            Generate palette from image
          </Label>

          <Input
            type="file"
            id="file"
            onChange={colorExtractor}
            className="hidden file:p-0 file:border-none file:text-white file:bg-black"
            placeholder="Upload"
            accept="image/*"
          />
        </div>
      </div>
    </>
  );
}
