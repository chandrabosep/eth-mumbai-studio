import { create } from "zustand";
interface State {
  bg: string;
  setbg: (bg: string) => void;
  inputData: string;
  setInputData: (input: string) => void;
}

export const useStore = create<State>((set) => ({
  bg: "#F89D21",
  setbg: (newBg: string) => set({ bg: newBg }),
  inputData: "",
  setInputData: (newInput: string) => set({ inputData: newInput }),
}));
