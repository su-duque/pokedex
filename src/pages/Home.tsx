import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PokemonList from '../Components/PokemonList';
import PokemonFilter from '../Components/PokemonFilter';
import PokemonPagination from '../Components/PokemonPagination';
import usePokemon from '../hooks/usePokemon';

const Home = () => {
  const {
    currentPage,
    setCurrentPage,
    pokemonList,
    fetchPokemon,
    fetchPokemonByType,
    pokemonTypes,
    selectedType,
    setSelectedType,
    totalNumberOfPokemon,
    numberOfPokemonPerPage,
  } = usePokemon();

  return (
    <Container>
      {/* <Container>: Adds padding around the component */}
      <Grid
        container
        spacing={2}
        mt={1} // margin-top
        mb={1} // margin-bottom
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <PokemonFilter
            pokemonTypes={pokemonTypes}
            setSelectedType={setSelectedType}
            setCurrentPage={setCurrentPage}
            selectedType={selectedType}
          />
        </Grid>
        <Container>
          <PokemonPagination
            selectedType={selectedType}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            fetchPokemonByType={fetchPokemonByType}
            fetchPokemon={fetchPokemon}
            totalNumberOfPokemon={totalNumberOfPokemon}
            numberOfPokemonPerPage={numberOfPokemonPerPage}
          />
        </Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <PokemonList pokemonItems={pokemonList} />
        </Grid>
        <Container>
          <PokemonPagination
            selectedType={selectedType}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            fetchPokemonByType={fetchPokemonByType}
            fetchPokemon={fetchPokemon}
            totalNumberOfPokemon={totalNumberOfPokemon}
            numberOfPokemonPerPage={numberOfPokemonPerPage}
          />
        </Container>
      </Grid>
    </Container>
  );
};

export default Home;
