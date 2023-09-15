import { create } from "zustand";

import useUserStore from "./useUserService";

import { useFetch } from "@/app/_helpers/client/useFetch";
import { type } from "os";

const useQuizStore = create<IQuizStore>((set) => ({
  currentPage: 0,
  pageStartTimestamp: null,
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  saveCurrentPageTimestamp: () => set({ pageStartTimestamp: Date.now() }),
}));

function useQuizService(): IQuizService {
  const fetch = useFetch();
  const userStore = useUserStore();
  const {
    currentPage,
    pageStartTimestamp,
    nextPage,
    saveCurrentPageTimestamp,
  } = useQuizStore();

  return {
    currentPage,
    pageStartTimestamp,
    nextPage,
    saveCurrentPageTimestamp,

    sendAnswer: async (promptId: string, answerIndex: number) => {
      const userCode = userStore.code;

      await fetch.post("/api/answer", {
        promptId: promptId,
        answer: answerIndex,
        userCode,
        thinkTime:
          pageStartTimestamp === null ? 0 : Date.now() - pageStartTimestamp!,
      });

      nextPage();
      saveCurrentPageTimestamp();
    },
  };
}

type Prompt = {
  id: string;
  header: string;
  options: string[];
};

interface IQuizStore {
  currentPage: number;
  pageStartTimestamp: number | null;
  nextPage: () => void;
  saveCurrentPageTimestamp: () => void;
}

interface IQuizService extends IQuizStore {
  sendAnswer: (promptId: string, answerIndex: number) => Promise<void>;
}

export default useQuizService;
export { type Prompt };
