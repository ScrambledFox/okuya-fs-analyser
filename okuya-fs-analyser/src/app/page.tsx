"use client";

import { Button } from "@nextui-org/button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full dark text-foreground bg-background">
      <div
        id="header"
        className="mt-8 m-auto w-6/12 text-center font-semibold text-2xl"
      >
        <h1>FMP Project Okuya (奥家)</h1>
      </div>
      <div id="introduction" className="m-auto p-8 max-w-xl">
        <h2 className="uppercase font-bold text-lg">Introduction</h2>
        <p className=" text-justify">
          This is a small study for my Final Master Project, which is about
          analysing foundation principles of Feng Shui. This study will present
          multiple visualisations of rooms and layouts, and will ask you to
          choose the one which you think is better according to general feeling
          of comfort and home balance.
        </p>
      </div>
      <div id="continueButton" className="w-fit m-auto">
        <Button onClick={() => router.push("/quiz")}>Continue</Button>
      </div>
    </main>
  );
}
