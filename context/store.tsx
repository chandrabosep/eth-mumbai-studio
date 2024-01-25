import { create } from "zustand";

export const useStore = create((set) => ({
  bg: "#121212",
  setbg: (newBg: string) => set({ bg: newBg }),
  displayColorPicker: "hidden",
  setDisplayColorPicker: (newDisplayColorPicker: string) =>
    set({ displayColorPicker: newDisplayColorPicker }),
}));
