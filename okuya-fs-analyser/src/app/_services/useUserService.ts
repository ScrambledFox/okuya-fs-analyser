import { create } from "zustand";

const useUserStore = create<IUserStore>((set) => ({
  code: null,
  setCode: (code: string) => set({ code }),
}));

function useUserService(): IUserService {
  const { code, setCode } = useUserStore();

  return {
    code,
    setCode,
  };
}

interface IUserStore {
  code: string | null;
  setCode: (code: string) => void;
}

interface IUserService extends IUserStore {}

export default useUserService;
