/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

import { Image } from "@nextui-org/image";
import OverlayImage from "./OverlayImage";

export default function ImageCarousel({
  prompt,
  images,
  selectedImageIndex,
  setSelectedImageIndex,
  answerPrompt,
}: {
  prompt: string;
  images: string[];
  selectedImageIndex: null | number;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<null | number>>;
  answerPrompt: () => Promise<void>;
}) {
  return (
    <>
      <div className="text-center flex flex-col">
        {/* <i className="text-gray-300">
          Click on the image you find more fitting with the question below.
        </i> */}
        <h2 className="text-3xl">"{prompt}"</h2>

        <div className="flex flex-row max-md:flex-col">
          {images.map((image, i) => (
            <div key={i} className="m-8">
              <span
                className="absolute border-4 border-red-600"
                // className={`${
                //   selectedImageIndex === i ? "border-4 border-red-600" : ""
                // }`}
              />
              <OverlayImage
                image={image}
                i={i}
                isSelected={selectedImageIndex === i}
                setSelectedImageIndex={setSelectedImageIndex}
                answerPrompt={answerPrompt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
