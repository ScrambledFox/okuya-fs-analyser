"use client";

import React from "react";
import useUserService from "@/app/_services/useUserService";
import useQuizService, { Prompt } from "../_services/useQuizService";

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

import InfoParagraph from "../_components/InfoParagraph";
import PromptPage from "../_components/PromptPage";
import ImageCarousel from "../_components/ImageCarousel";

import pageData from "@/app/_data/test.json";

export default function Page() {
  const userService = useUserService();
  const code = userService.code;

  const quizService = useQuizService();
  const currentPage = quizService.currentPage;
  const nextPage = quizService.nextPage;

  const getComponentForPage = (page: any, showContinueButton: boolean) => {
    switch (page.type) {
      case "prompt":
        return <PromptPage prompt={page} />;
      case "info":
        return (
          <InfoParagraph title={page.header}>
            <p>{page.text}</p>
            {showContinueButton && (
              <div className="flex justify-center items-center">
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={() => nextPage()}
                >
                  Continue
                </Button>
              </div>
            )}
          </InfoParagraph>
        );
      default:
        return <div>Type not known!</div>;
    }
  };

  return (
    <main className=" h-screen flex flex-col items-center justify-center">
      <div className="m-2">
        <div className="text-sm">
          {/* {pageData.pages.map((page) => {
            return getComponentForPage(page);
          })} */}
          {getComponentForPage(pageData.pages[currentPage], currentPage !== pageData.pages.length - 1)}
        </div>
      </div>
    </main>
  );
}
