"use client";
import React, { useEffect } from "react";

interface LogoProps {
  svgRef: React.RefObject<SVGSVGElement>;
  bg: string;
  outerTop: string;
  outerBottom: string;
  innerTop: string;
  innerBottom: string;
  setCurrentClickedPart: (part: string) => void;
  setDisplayColorPicker: (display: string) => void;
}

const Logo: React.FC<LogoProps> = ({
  svgRef,
  bg,
  outerTop,
  outerBottom,
  innerTop,
  innerBottom,
  setCurrentClickedPart,
  setDisplayColorPicker,
}) => {
  return (
    <>
      <svg
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
      </svg>
    </>
  );
};

export default Logo;
