"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import useUserStore from "../state/userStore";

import InfoParagraph from "./InfoParagraph";
import { MdNotificationImportant } from "react-icons/md";

export default function CodeGenerator() {
  const code = useUserStore((state) => state.code);
  const setCode = useUserStore((state) => state.setCode);
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      code;
    }
  }, [searchParams]);

  return (
    <InfoParagraph
      title="Personal Code"
      icon={<MdNotificationImportant size={64} />}
    >
      <p>
        Your personal codeword for this test is{" "}
        <code className="text-green-600">{code}</code>. This code has been
        randomly generated and is unique to you. When something goes wrong
        during the test, please contact me and provide this code.
      </p>
    </InfoParagraph>
  );
}
