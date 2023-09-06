/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

export default function ImageCarousel({
  prompt,
  images,
}: {
  prompt: string;
  images: string[];
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<null | number>(
    null
  );

  return (
    <>
      <div className="flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-3xl">"{prompt}"</h2>
        </div>

        <div className="flex flex-row gap-4 mb-8 max-md:flex-col">
          {images.map((image, i) => (
            <Image
              onClick={() => setSelectedImageIndex(i)}
              key={i}
              src={image}
              alt="research-image"
              className={`${
                selectedImageIndex === i
                  ? "border-4 border-red-600 origin-center"
                  : " origin-center"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-row justify-center items-center">
          <Button
            color={selectedImageIndex === null ? "default" : "success"}
            disabled={selectedImageIndex === null}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
}
