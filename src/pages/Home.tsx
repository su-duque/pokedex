import { Container } from '@mui/material';
import PokemonList from '../Components/PokemonList';
import usePokemon from '../hooks/usePokemon';

const Home = () => {
  const { pokemonList } = usePokemon();
  return (
    <Container> {/* Adds padding around the component */}
      <PokemonList pokemonItems={pokemonList} />
    </Container>
  );
};

export default Home;
