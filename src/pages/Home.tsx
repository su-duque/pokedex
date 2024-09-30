import PokemonList from '../Components/PokemonList';
import usePokemon from '../hooks/usePokemon';

const Home = () => {
  const { pokemonList } = usePokemon();
  return <PokemonList pokemonItems={pokemonList} />;
};

export default Home;
