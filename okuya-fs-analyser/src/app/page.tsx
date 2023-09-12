"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

import InfoParagraph from "./_components/InfoParagraph";
import CodeGenerator from "./_components/CodeGenerator";
import useUserService from "./_services/useUserService";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const userService = useUserService();
  const setCode = userService.setCode;

  const [gotCode, setGotCode] = React.useState(false);

  // useEffect(() => {
  //   const code = searchParams.get("code");
  //   if (!code) {
  //     router.push("/nocode");
  //   } else if (code.length !== 5) {
  //     router.push("/nocode");
  //   } else {
  //     setCode(code);
  //     setGotCode(true);
  //   }
  // }, [router, searchParams, setCode]);

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      fetch("https://random-word-api.herokuapp.com/word?length=5").then(
        (response) => {
          response.json().then((data) => {
            const newCode = data;
            setCode(newCode);
            setGotCode(true);
            router.push("/?code=" + newCode);
          });
        }
      );
    } else if (code.length !== 5) {
      router.push("/nocode");
    } else {
      setCode(code);
      setGotCode(true);
    }
  }, [router, searchParams, setCode]);

  return (
    <main className="dark text-foreground bg-background">
      {gotCode ? (
        <div className="items-center justify-center">
          <div className="m-8">
            <div className="items-center justify-center">
              <div className="mt-8 font-semibold text-3xl">
                <h1>FMP Project Okuya</h1>
                <p className="italic text-xs text-gray-400 mb-4">
                  by Joris Lodewijks | 2023
                </p>
              </div>
            </div>
            <InfoParagraph title="Introduction">
              <p>
                This is a small study for my Final Master Project, which is
                about analysing foundation principles of Feng Shui. This study
                will present multiple visualisations of rooms and layouts, and
                will ask you to choose the one which you think is better
                according to general feeling of comfort and home balance.
              </p>
            </InfoParagraph>
            <CodeGenerator />
            <InfoParagraph title="Contact">
              <p>
                If you have any questions or concerns, please contact me at{" "}
                <a
                  href="mailto:a.j.lodewijks@student.tue.nl"
                  className="text-blue-500"
                >
                  a.j.lodewijks@student.tue.nl
                </a>
                .
              </p>
            </InfoParagraph>
            <div id="continueButton" className="w-fit m-auto pb-8">
              <Button color="primary" onClick={() => router.push("/quiz")}>Continue</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center">
          <Spinner />
        </div>
      )}
    </main>
  );
}
