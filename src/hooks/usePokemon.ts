import { useEffect, useState } from 'react';
import {
  IndexedPokemon,
  IndexedType,
  PokemonByTypeListResponse,
  PokemonListResponse,
} from '../interfaces/pokemon.interfaces';
import { POKEMON_API_POKEMON_URL, POKEMON_TYPES } from '../constants';
import { httpClient } from '../api/httpClient'; // axios instance

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<IndexedPokemon[]>([]);
  const [totalNumberOfPokemon, setTotalNumberOfPokemon] = useState<number>(0);
  const numberOfPokemonPerPage = 20;

  const [selectedType, setSelectedType] = useState<IndexedType | null>(null);

  const fetchPokemon = async (page: number = 1) => {
    try {
      const url = `${POKEMON_API_POKEMON_URL}?limit=${numberOfPokemonPerPage}&offset=${
        page * numberOfPokemonPerPage - numberOfPokemonPerPage
      }`;
      const result = await httpClient.get<PokemonListResponse>(url);

      const { results: pokemonListResult, count } = result.data;
      if (pokemonListResult) {
        setPokemonList(pokemonListResult);
        setTotalNumberOfPokemon(count);
      }
    } catch (error) {
      console.log('*** Failed fetchPokemon:', error);
    }
  };

  const fetchPokemonByType = async (page: number = 1) => {
    try {
      if (!selectedType) return;
      const responseByType = await httpClient.get<PokemonByTypeListResponse>(
        selectedType.url
      );
      if (responseByType.data.pokemon) {
        const pokemonByTypeList = responseByType.data.pokemon.map(
          (item) => item.pokemon
        );
        const pokemonByTypeSelectedPage = pokemonByTypeList.slice(
          page * numberOfPokemonPerPage - numberOfPokemonPerPage,
          page * numberOfPokemonPerPage
        );
        setPokemonList(pokemonByTypeSelectedPage);
        setTotalNumberOfPokemon(pokemonByTypeList.length);
      }
    } catch (error) {
      console.log('*** Failed fetchPokemonByType:', error);
    }
  };

  useEffect(() => {
    if (selectedType) {
      fetchPokemonByType();
    } else {
      fetchPokemon();
    }
  }, [selectedType]); // It runs the first time and every time the selectedType changes

  return {
    pokemonList,
    fetchPokemon,
    fetchPokemonByType,
    pokemonTypes: POKEMON_TYPES, // TODO: REMOVE, Import from Home Page
    selectedType,
    setSelectedType,
    setPokemonList,
    totalNumberOfPokemon,
    numberOfPokemonPerPage,
  };
};

export default usePokemon;
