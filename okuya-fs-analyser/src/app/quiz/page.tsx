"use client";

import React from "react";
import useUserService from "@/app/_services/useUserService";
import useQuizService, { Prompt } from "../_services/useQuizService";

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

import InfoParagraph from "../_components/InfoParagraph";
import PromptPage from "../_components/PromptPage";

import pageData from "@/app/_data/test.json";

export default function Page() {
  const [isLoading, setLoading] = React.useState(false);

  const userService = useUserService();
  const code = userService.code;

  const quizService = useQuizService();
  const currentPage = quizService.currentPage;
  const nextPage = quizService.nextPage;

  const loadNextPage = async () => {
    setLoading(true);
    await nextPage();
    setLoading(false);
  };

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
      <div className="m-8">
        {!isLoading ? (
          <div className="text-sm">
            {/* {pageData.pages.map((page) => {
            return getComponentForPage(page);
          })} */}
            {getComponentForPage(
              pageData.pages[currentPage],
              currentPage !== pageData.pages.length - 1
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </main>
  );
}
