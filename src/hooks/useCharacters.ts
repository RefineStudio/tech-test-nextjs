import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/rickAndMorty";

export const useCharacters = (page: number = 1) => {
  return useQuery<any>({
    queryKey: ["characters", page],
    queryFn: () => fetchCharacters(page),
  });
};

