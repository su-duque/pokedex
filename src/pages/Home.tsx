import { Container, Pagination } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PokemonList from '../Components/PokemonList';
import usePokemon from '../hooks/usePokemon';
import PokemonFilter from '../Components/PokemonFilter';

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

  const handlePagination = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    if (selectedType?.name) {
      fetchPokemonByType(value);
    } else {
      fetchPokemon(value);
    }
  };

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
        <Grid
          container
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <PokemonFilter
            pokemonTypes={pokemonTypes}
            setSelectedType={setSelectedType}
            setCurrentPage={setCurrentPage}
            selectedType={selectedType}
          />
        </Grid>
        <Container>
          <Pagination
            count={Math.ceil(totalNumberOfPokemon / numberOfPokemonPerPage)}
            page={currentPage}
            onChange={handlePagination}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              '&.MuiPagination-root': {},
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: 'pink',
                color: 'white',
              },
            }}
          />
        </Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <PokemonList pokemonItems={pokemonList} />
        </Grid>
        <Container>
          <Pagination
            count={Math.ceil(totalNumberOfPokemon / numberOfPokemonPerPage)}
            page={currentPage}
            onChange={handlePagination}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              '&.MuiPagination-root': {},
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: 'pink',
                color: 'white',
              },
            }}
          />
        </Container>
      </Grid>
    </Container>
  );
};

export default Home;
