import { create } from "zustand";
interface State {
  bg: string;
  setbg: (bg: string) => void;
}

export const useStore = create<State>((set) => ({
  bg: "#010101",
  setbg: (newBg: string) => set({ bg: newBg }),
}));
