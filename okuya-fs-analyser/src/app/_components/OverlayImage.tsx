"use client";

import React from "react";
import { Image } from "@nextui-org/image";

import { AiFillCheckCircle } from "react-icons/ai";
import useQuizService from "../_services/useQuizService";

export default function OverlayImage({
  image,
  i,
  isSelected,
  setSelectedImageIndex,
  answerPrompt,
}: {
  image: string;
  i: number;
  isSelected: boolean;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<null | number>>;
  answerPrompt: () => Promise<void>;
}) {
  return (
    <div className="relative cursor-pointer">
      {isSelected ? (
        <>
          <Image
            src={image}
            width={500}
            height={500}
            alt="research-image"
            onClick={() => setSelectedImageIndex(i)}
            className="block object-cover w-full h-auto z-0 scale-105 transition-all duration-300 ease-in-out"
          />
          <div className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:scale-100">
            <div
              className="w-[72px] h-[72px] text-green-600 bg-white rounded-full flex justify-center items-center z-50"
              onClick={() => answerPrompt()}
            >
              <AiFillCheckCircle size={64} />
            </div>
          </div>
        </>
      ) : (
        <Image
          src={image}
          width={500}
          height={500}
          alt="research-image"
          onClick={() => setSelectedImageIndex(i)}
          className="block object-cover w-full h-auto z-0  transition-all duration-300 ease-in-out"
        />
      )}
    </div>
  );
}
