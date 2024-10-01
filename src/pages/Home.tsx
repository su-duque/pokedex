import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PokemonList from '../Components/PokemonList';
import usePokemon from '../hooks/usePokemon';

const Home = () => {
  const { pokemonList, hasMorePokemon, fetchNextPage, pokemonTypes } =
    usePokemon();

  return (
    <Container>
      {/* <Container>: Adds padding around the component */}
      <Grid container spacing={2} mt={1}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          {pokemonTypes.map((type) => (
            <Button
              variant='contained'
              sx={{
                '&.MuiButton-contained': {
                  backgroundColor: type.color,
                },
              }}
            >
              {type.name}
            </Button>
          ))}
        </Grid>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <PokemonList pokemonItems={pokemonList} />
        </Grid>
        {hasMorePokemon && (
          <Button variant='contained' onClick={fetchNextPage}>
            Load More Pokemon
          </Button>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
