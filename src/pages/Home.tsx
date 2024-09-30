import { Button, Container } from '@mui/material';
import PokemonList from '../Components/PokemonList';
import usePokemon from '../hooks/usePokemon';

const Home = () => {
  const { pokemonList, hasMorePokemon, fetchNextPage } = usePokemon();
  return (
    <Container>
      {/* <Container>: Adds padding around the component */}
      <PokemonList pokemonItems={pokemonList} />
      {hasMorePokemon && (
        <Button variant='contained' onClick={fetchNextPage}>
          Load More Pokemon
        </Button>
      )}
    </Container>
  );
};

export default Home;
