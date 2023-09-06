"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import useUserStore from "../state/userStore";

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

import InfoParagraph from "./InfoParagraph";
import CodeGenerator from "./CodeGenerator";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setCode = useUserStore((state) => state.setCode);

  const [gotCode, setGotCode] = React.useState(false);

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      router.push("/nocode");
    } else if (code.length !== 5) {
      router.push("/nocode");
    } else {
      setCode(code);
      setGotCode(true);
    }
  }, [router, searchParams, setCode]);

  return (
    <main className="w-screen h-screen dark text-foreground bg-background">
      {gotCode ? (
        <div className="h-screen flex flex-col items-center justify-center">
          <div>
            <div
              id="header"
              className="mb-8 mt-8 m-auto w-3/4 text-center font-semibold text-3xl"
            >
              <h1>FMP Project Okuya</h1>
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
            <div id="continueButton" className="w-fit m-auto mb-8">
              <Button onClick={() => router.push("/quiz")}>Continue</Button>
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
