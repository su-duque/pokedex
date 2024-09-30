import { useEffect, useState } from 'react';
import { PokemonDetails } from '../interfaces/pokemon.interfaces';
import { POKEMON_API_POKEMON_URL } from '../constants';
import { httpClient } from '../api/httpClient';

interface UsePokemonDetailsProps {
  pokemonName: string | undefined;
}

function usePokemonDetails({ pokemonName }: UsePokemonDetailsProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false); // To retrieve data from the API

  const fetchPokemonDetails = async () => {
    if (pokemonName) {
      setIsLoading(true);
      const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
      const result = await httpClient.get<PokemonDetails>(url);
      if (result.data) {
        console.log(
          '*** ~ file: usePokemonDetails.ts:22 ~ fetchPokemonDetails ~ result.data:',
          result.data
        );
        setPokemonDetails(result.data);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Call fetchPokemonDetails every time pokemonName changes
    if (pokemonName) fetchPokemonDetails();
  }, [pokemonName]);

  return {
    pokemonDetails,
    isLoading,
  };
}

export default usePokemonDetails;
