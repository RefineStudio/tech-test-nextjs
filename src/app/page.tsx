
"use client";
import Image from "next/image";
import { CharacterList } from "../components/CharacterList";
import { FavoriteList } from "../components/FavoriteList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
  <h1 className="text-2xl font-bold mb-4">Rick and Morty Favorite List</h1>
      <div className="flex flex-row gap-8 w-full">
        <div className="w-1/2">
          <CharacterList />
        </div>
        <div className="w-1/2">
          <FavoriteList>{undefined}</FavoriteList>
        </div>
      </div>
    </div>
  );
}
