"use client";
import React from 'react';
import { useFavoriteStore } from '../store/favoriteStore';

export const FavoriteList = () => {
  const { favorites } = useFavoriteStore();

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-xl font-semibold mb-4">Favorites</h2>
      <ul className="flex flex-col gap-3 w-full max-w-xs">
        {favorites.map((id) => (
          <li className="bg-zinc-600 rounded px-4 py-2 text-center font-medium shadow-sm">
            Character Name: {id.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
