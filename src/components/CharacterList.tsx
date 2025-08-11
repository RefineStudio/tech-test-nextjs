"use client";
import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { useFavoriteStore } from '../store/favoriteStore';

export const CharacterList = () => {
  const { data } = useCharacters();
  const { favorites, addFavorite } = useFavoriteStore();

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-xl font-semibold mb-4">Characters</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        {data.results.map((char: any) => (
          <li className="flex flex-col items-center bg-zinc-800 rounded-lg shadow p-4">
            <img
              src={char.image}
              alt={char.name}
              className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-gray-200"
            />
            <span className="font-medium mb-2 text-center">{char.name}</span>
            <button
              onClick={() => favorites.includes(char.id) ? removeFavorite(char.id) : addFavorite(char.id)}
              className={`px-4 py-1 rounded-full font-semibold transition-colors duration-200 mt-2
                ${favorites.includes(char.id)
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-green-500 text-white hover:bg-green-600'}`}
            >
              {favorites.includes(char.id) ? 'Unfavorite' : 'Favorite'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
