import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import { Button } from "./ui/button";

export default function Mint({
  svgRef,
}: {
  svgRef: React.RefObject<SVGSVGElement>;
}) {
  const axios = require("axios");
  const router = useRouter();
  const getJpgImageObject = (): Promise<Blob> => {
    return new Promise((resolve) => {
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
        const dataURL = canvas.toDataURL("image/jpeg");
        const jpgBlob = dataURLtoBlob(dataURL);
        resolve(jpgBlob);

        URL.revokeObjectURL(url);
      };

      img.src = url;
    });
  };

  const dataURLtoBlob = (dataURL: string): Blob => {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const pinFileToIPFS = async () => {
    const formData = new FormData();
    const jpgImage = await getJpgImageObject();

    formData.append("file", jpgImage, "ethMumbai.jpg");

    const pinataMetadata = JSON.stringify({
      name: "File name",
    });
    formData.append("pinataMetadata", pinataMetadata);

    const pinataOptions = JSON.stringify({
      cidVersion: 0 as number,
    });
    formData.append("pinataOptions", pinataOptions);

    try {
      const res: any = await axios
        .post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
          maxBodyLength: "Infinity",
          headers: {
            //@ts-ignore
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
          },
        })
        .then((res: any) => {
          const newTab = window.open(
            `https://zora.co/create/single-edition?image=${res.data.IpfsHash}&name=ETH_Mumbai_Studio&description=created%20with%20eth%20mumbai%20studio%20by%20Chandra%20Bose%0A`,
            "_blank"
          );
        });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("JWT Token:", process.env.NEXT_PUBLIC_JWT_TOKEN);

  return (
    <div>
      <Button
        onClick={() => pinFileToIPFS()}
        className="bg-theme-kaali/95 flex gap-3 items-center"
      >
        <img src="/zorb.webp" alt="zorb" width={20} height={20} />
        Mint on Zora
      </Button>
    </div>
  );
}
