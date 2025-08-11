import { create } from 'zustand';

interface FavoriteState {
  favorites: number[];
  addFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  addFavorite: (id) => set((state) => ({ favorites: [...state.favorites, id] })),
}));
