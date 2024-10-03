import { useEffect, useState } from 'react';
import { PokemonDetails } from '../interfaces/pokemon.interfaces';
import { POKEMON_API_POKEMON_URL } from '../constants';
import { httpClient } from '../api/httpClient';
import { getColorFromUrl } from '../utils/color';
import pokeBall from '../shared/assets/poke-ball.png';

interface UsePokemonDetailsProps {
  pokemonName: string | undefined;
}

function usePokemonDetails({ pokemonName }: UsePokemonDetailsProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false); // When retrieving data from the API

  const getPokemonColor = async () => {
    const pokemonImage = pokemonDetails?.image;
    if (pokemonImage) {
      const color = await getColorFromUrl(pokemonImage);
      if (color) setPokemonDetails({ ...pokemonDetails, color });
      // Adding the color property to PokemonDetails, value obtained from the average color calculation
    }
  };

  const fetchPokemonDetails = async () => {
    if (pokemonName) {
      setIsLoading(true);
      const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
      const response = await httpClient.get(url); // TODO: Create response type
      if (response.data) {
        const { name, height, weight, types, sprites, id } = response.data;
        const { front_default } = sprites.other['official-artwork'];
        const filteredPokemonDetails: PokemonDetails = {
          name,
          height,
          weight,
          types,
          image: front_default ?? pokeBall,
          id,
        };
        setPokemonDetails(filteredPokemonDetails);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Call fetchPokemonDetails every time pokemonName changes
    if (pokemonName) fetchPokemonDetails();
  }, [pokemonName]);

  useEffect(() => {
    // Call getPokemonColor every time new pokemon details are obtained
    if (pokemonDetails) getPokemonColor();
  }, [pokemonDetails]);

  return {
    pokemonDetails,
    isLoading,
  };
}

export default usePokemonDetails;
