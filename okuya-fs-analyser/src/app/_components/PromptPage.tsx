import React, { useState } from "react";

import { Button } from "@nextui-org/button";
import useQuizService, { Prompt } from "../_services/useQuizService";

import ImageCarousel from "./ImageCarousel";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function PromptPage({ prompt }: { prompt: Prompt }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const quizService = useQuizService();
  const sendAnswer = quizService.sendAnswer;

  const imageConfirmed = (i: number) => {
    sendAnswer(prompt.id, i);
  };

  return (
    <div>
      <div className="text-2xl font-bold">{prompt.header}</div>
      <ImageCarousel
        images={prompt.options}
        imageConfirmed={imageConfirmed}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
      <Button
        isIconOnly
        color={selectedImageIndex === null ? "default" : "primary"}
        disabled={selectedImageIndex === null}
        className="absolute right-4 bottom-4 w-16 h-16"
        onClick={() => imageConfirmed(selectedImageIndex!)}
      >
        <BsFillArrowRightCircleFill size={32} />
      </Button>
    </div>
  );
}
