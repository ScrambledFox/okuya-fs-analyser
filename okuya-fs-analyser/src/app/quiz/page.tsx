"use client";

import React from "react";
import useUserService from "@/app/_services/useUserService";

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

import ImageCarousel from "../_components/ImageCarousel";
import useQuizService from "../_services/useQuizService";

import promptData from "@/app/_data/test.json";

export default function Page() {
  const images = ["./testimage.svg", "./testimage.svg"];

  const [isLoading, setLoading] = React.useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = React.useState<
    null | number
  >(null);

  const userService = useUserService();
  const code = userService.code;

  const quizService = useQuizService();
  const sendAnswer = quizService.sendAnswer;
  const currentPrompt = quizService.currentPrompt;

  const answerPrompt = async () => {
    setLoading(true);
    await sendAnswer(selectedImageIndex!);
    setSelectedImageIndex(null);
    setLoading(false);
  };

  return (
    <main className=" h-screen flex flex-col items-center justify-center">
      <div className="m-2">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-sm">
                <i>
                  your personal code:{" "}
                  <code className="text-green-600 text-medium">{code}</code>
                </i>
                <i>
                  Current prompt index: <code>{currentPrompt}</code>
                </i>
              </div>
              <ImageCarousel
                prompt="Which room flows better?"
                images={promptData.images}
                selectedImageIndex={selectedImageIndex}
                setSelectedImageIndex={setSelectedImageIndex}
                answerPrompt={answerPrompt}
              ></ImageCarousel>
              <div className="hidden lg:block">
                <Button
                  color={selectedImageIndex === null ? "default" : "success"}
                  disabled={selectedImageIndex === null}
                  onClick={() => answerPrompt()}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
