import { create } from "zustand";

import useUserStore from "./useUserService";

import { useFetch } from "@/app/_helpers/client/useFetch";

const useQuizStore = create<IQuizStore>((set) => ({
  currentPrompt: 0,
  lastPromptTimestamp: null,
  nextPrompt: () =>
    set((state) => ({ currentPrompt: state.currentPrompt + 1 })),
  saveCurrentPromptTimestamp: () => set({ lastPromptTimestamp: Date.now() }),
}));

function useQuizService(): IQuizService {
  const fetch = useFetch();
  const userStore = useUserStore();
  const {
    currentPrompt,
    lastPromptTimestamp,
    nextPrompt,
    saveCurrentPromptTimestamp,
  } = useQuizStore();

  return {
    currentPrompt,
    lastPromptTimestamp,
    nextPrompt,
    saveCurrentPromptTimestamp,
    sendAnswer: async (answer: number) => {
      const userCode = userStore.code;

      await fetch.post("/api/answer", {
        promptId: currentPrompt,
        answer,
        userCode,
        thinkTime:
          lastPromptTimestamp === null ? 0 : Date.now() - lastPromptTimestamp!,
      });

      nextPrompt();
      saveCurrentPromptTimestamp();
    },
  };
}

interface IQuiz {
  prompt: string;
  answers: string[];
  correctAnswer: number;
}

interface IQuizStore {
  currentPrompt: number;
  lastPromptTimestamp: number | null;
  nextPrompt: () => void;
  saveCurrentPromptTimestamp: () => void;
}

interface IQuizService extends IQuizStore {
  sendAnswer: (answer: number) => Promise<void>;
}

export default useQuizService;
