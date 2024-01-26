import { create } from "zustand";
interface State {
  bg: string;
  setbg: (bg: string) => void;
  stroke: string;
  setStroke: (stroke: string) => void;
}

export const useStore = create<State>((set) => ({
  bg: "#333333",
  setbg: (newBg: string) => set({ bg: newBg }),
  stroke: "content",
  setStroke: (newStroke: string) => set({ stroke: newStroke }),
}));
