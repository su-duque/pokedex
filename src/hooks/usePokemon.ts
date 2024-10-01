import { useEffect, useState } from 'react';
import {
  IndexedPokemon,
  IndexedType,
  PokemonByTypeListResponse,
  PokemonListResponse,
  PokemonWithImage,
} from '../interfaces/pokemon.interfaces';
import {
  POKEMON_API_POKEMON_URL,
  POKEMON_IMAGE_BASE_URL,
  POKEMON_TYPES,
} from '../constants';
import { httpClient } from '../api/httpClient'; // axios instance

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<PokemonWithImage[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );

  const [selectedType, setSelectedType] = useState<IndexedType | null>(null);

  const indexedPokemonToPokemonWithImage = (indexedPokemon: IndexedPokemon) => {
    const { name, url } = indexedPokemon;

    // https://pokeapi.co/api/v2/pokemon/1/
    /* We want to get the number that comes at the end of the URL, so:
    - first replace(): The POKEMON_API_POKEMON_URL is replaced with an '', to only keep the number and the last slash
    - second replace(): Replaces the last slash with an empty string
    - parseInt(): converts the number that is a string into a number */
    const pokemonIndex = parseInt(
      url.replace(`${POKEMON_API_POKEMON_URL}/`, '').replace('/', '')
    );

    const pokemonWithImage: PokemonWithImage = {
      name: name,
      url: url,
      imageUrl: `${POKEMON_IMAGE_BASE_URL}/${pokemonIndex}.png`,
      pokemonIndex,
    };
    // imageUrl example: https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/25.png
    return pokemonWithImage;
  };

  const fetchPokemon = async () => {
    if (nextUrl) {
      const result = await httpClient.get<PokemonListResponse>(nextUrl);
      const { results: pokemonListResult, next } = result.data;
      if (pokemonListResult) {
        const pokemonListWithImages = pokemonListResult.map((pokemon) =>
          // Add an image to each Pokemon
          indexedPokemonToPokemonWithImage(pokemon)
        );
        // Keep the previous pokemon (...pokemonList), and merge the new results (...pokemonListWithImages)
        setPokemonList([...pokemonList, ...pokemonListWithImages]);
        setNextUrl(next);
      }
    }
  };

  const fetchPokemonByType = async () => {
    if (selectedType) {
      const responseByType = await httpClient.get<PokemonByTypeListResponse>(
        selectedType.url
      );
      if (responseByType.data.pokemon) {
        // TODO: DO I need this map? I don't need the images
        const pokemonByTypeList = responseByType.data.pokemon.map((item) =>
          indexedPokemonToPokemonWithImage(item.pokemon)
        );
        setPokemonList(pokemonByTypeList);
        setNextUrl(POKEMON_API_POKEMON_URL); // Resetting the Next URL
      }
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
    fetchNextPage: fetchPokemon, // To fetch more pokemon
    hasMorePokemon: !!nextUrl, // To know if there are more pokemon to be fetched
    pokemonTypes: POKEMON_TYPES, // TODO: REMOVE, Import from Home Page
    selectedType,
    setSelectedType,
    setPokemonList,
  };
};

export default usePokemon;
