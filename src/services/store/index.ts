import create from "zustand";
import { Asset } from "../../interfaces";

type Store = {
  assets: Asset[];
  setAssets: (assets: Asset[]) => void;
};

export const useStore = create<Store>((set) => ({
  assets: [],
  setAssets: (assets) => set((state) => ({ assets })),
}));
