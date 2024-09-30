import Grid from '@mui/material/Grid2';
import { IndexedPokemon } from '../interfaces/pokemon.interfaces';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemonItems: IndexedPokemon[];
}

const PokemonList = ({ pokemonItems }: PokemonListProps) => {
  return (
    <Grid container spacing={2}>
      {pokemonItems.length > 0 &&
        pokemonItems.map((item) => {
          return (
            <Grid size={4}>
              {/* To have 3 cards per row - size = 4, since MIU uses a 12 points system */}
              <PokemonCard key={item.name} pokemon={item} />
            </Grid>
          );

        })}
    </Grid>
  );
};

export default PokemonList;
