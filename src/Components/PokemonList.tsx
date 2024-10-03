import Grid from '@mui/material/Grid2';
import { IndexedPokemon } from '../interfaces/pokemon.interfaces';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemonItems: IndexedPokemon[];
}

const PokemonList = ({ pokemonItems }: PokemonListProps) => {
  if (!pokemonItems.length) return;

  return (
    <Grid container spacing={2}>
      {/* Another way to check if the list has items, and render it conditionally */}
      {/* pokemonItems.length > 0 && */}
      {pokemonItems.map((item) => {
        return (
          // TODO: sx={{ width: 'auto' }} might fix the issue of compressed cards on last page
          <Grid size={3} key={item.name}>
            {/* To have 4 cards per row - size = 3, since MIU uses a 12 points system */}
            <PokemonCard pokemon={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PokemonList;
