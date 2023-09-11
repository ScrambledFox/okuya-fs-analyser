import { create } from "zustand";

type UserState = {
  code: string | null;
  setCode: (code: string) => void;
};

const useUserStore = create<UserState>((set) => ({
  code: null,
  setCode: (code: string) => set({ code }),
}));

export default useUserStore;
