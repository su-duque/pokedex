import { useEffect, useState } from 'react';
import {
  IndexedPokemon,
  PokemonListResponse,
  PokemonWithImage,
} from '../interfaces/pokemon.interfaces';
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGE_BASE_URL } from '../constants';
import { httpClient } from '../api/httpClient'; // axios instance

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<PokemonWithImage[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );

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
      const { results: pokemonList } = result.data;
      if (pokemonList) {
        const pokemonListWithImages = pokemonList.map((pokemon) =>
          // Add an image to each Pokemon
          indexedPokemonToPokemonWithImage(pokemon)
        );
        setPokemonList(pokemonListWithImages);
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
