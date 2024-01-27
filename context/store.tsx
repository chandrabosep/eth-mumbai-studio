import { create } from "zustand";
interface State {
  bg: string;
  inputData: string;
  outerTop: string;
  outerBottom: string;
  innerTop: string;
  innerBottom: string;
  textColor: string;
  currentClickedPart: string;
  setInputData: (input: string) => void;
  setbg: (bg: string) => void;
  setOuterTop: (color: string) => void;
  setOuterBottom: (color: string) => void;
  setInnerTop: (color: string) => void;
  setInnerBottom: (color: string) => void;
  setTextColor: (color: string) => void;
  setCurrentClickedPart: (part: string) => void;
}

export const useStore = create<State>((set) => ({
  bg: "#FFF1DF",
  inputData: "",
  outerTop: "#F89D21",
  outerBottom: "#121212",
  innerTop: "#121212",
  innerBottom: "#F89D21",
  textColor: "#121212",
  currentClickedPart: "",

  setbg: (newBg: string) => set({ bg: newBg }),
  setInputData: (newInput: string) => set({ inputData: newInput }),
  setOuterTop: (color) => set({ outerTop: color }),
  setOuterBottom: (color) => set({ outerBottom: color }),
  setInnerTop: (color) => set({ innerTop: color }),
  setInnerBottom: (color) => set({ innerBottom: color }),
  setTextColor: (color) => set({ textColor: color }),
  setCurrentClickedPart: (part) => set({ currentClickedPart: part }),
}));
