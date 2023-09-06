"use client";

import React from "react";
import useUserStore from "@/state/userStore";

import ImageCarousel from "./ImageCarousel";

export default function Page() {
  const images = ["./testimage.svg", "./testimage.svg"];

  const code = useUserStore((state) => state.code);

  return (
    <div className="h-screen">
      <div className="absolute translate-x-5 translate-y-5">
        <i className=" text-sm">
          your personal code:{" "}
          <code className="text-green-600 text-medium">{code}</code>
        </i>
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <i className="text-gray-300">
          Click on the image you find more fitting with the question below.
        </i>
        <ImageCarousel
          prompt="Which room flows better?"
          images={images}
        ></ImageCarousel>
      </div>
    </div>
  );
}
