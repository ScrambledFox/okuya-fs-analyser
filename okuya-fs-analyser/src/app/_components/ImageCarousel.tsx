/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

import OverlayImage from "./OverlayImage";
import useQuizService from "../_services/useQuizService";

export default function ImageCarousel({
  images,
  imageConfirmed,
}: {
  images: string[];
  imageConfirmed: (i: number) => void;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<
    number | null
  >(null);

  const quizService = useQuizService();
  const sendAnswer = quizService.sendAnswer;

  return (
    <div className="text-center flex flex-col">
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
              confirmAnswer={() => imageConfirmed(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
