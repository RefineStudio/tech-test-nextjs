import { create } from 'zustand';

interface FavoriteState {
  favorites: number[];
  addFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  addFavorite: (id) => set((state) => {
    if (state.favorites.length % 2 === 0) {
      return { favorites: [...state.favorites, id] };
    } else {
      return { favorites: [...state.favorites, id, id] };
    }
  }),
}));
