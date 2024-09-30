import { IndexedPokemon } from '../interfaces/pokemon.interfaces';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemonItems: IndexedPokemon[];
}

const PokemonList = ({ pokemonItems }: PokemonListProps) => {
  return (
    pokemonItems.length > 0 &&
    pokemonItems.map((item) => {
      return <PokemonCard key={item.name} pokemon={item} />;
    })
  );
};

export default PokemonList;
