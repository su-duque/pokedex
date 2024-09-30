import { useEffect, useState } from 'react';
import {
  IndexedPokemon,
  PokemonListResponse,
} from '../interfaces/pokemon.interfaces';
import { POKEMON_API_POKEMON_URL } from '../constants';
import { httpClient } from '../api/httpClient'; // axios instance

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<IndexedPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );

  const fetchPokemon = async () => {
    if (nextUrl) {
      const result = await httpClient.get<PokemonListResponse>(nextUrl);
      if (result.data?.results) {
        setPokemonList(result.data.results);
      }
    } else {
      //This is a placeholder for setNextUrl
      setNextUrl('placeholder');
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemonList };
};

export default usePokemon;
