import { create } from "zustand";

import clientPromise from "@/lib/mongodb";

type QuizState = {
  currentPrompt: number;
  sendAnswer: (promptId: number, answer: number) => void;
};

const useQuizStore = create<QuizState>((set) => ({
  currentPrompt: 0,

  sendAnswer: (promptId: number, answer: number) => {
    // send answer to server
    // set currentPrompt to next prompt
    clientPromise;

    // TODO: Check for max prompt reached
    set({ currentPrompt: promptId + 1 });
  },
}));

export default useQuizStore;
