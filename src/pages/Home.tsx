import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PokemonList from '../Components/PokemonList';
import usePokemon from '../hooks/usePokemon';
import { IndexedType } from '../interfaces/pokemon.interfaces';
import { TYPE_COLORS } from '../constants';

const Home = () => {
  const {
    pokemonList,
    hasMorePokemon,
    fetchNextPage,
    pokemonTypes,
    selectedType,
    setSelectedType,
    setPokemonList,
  } = usePokemon();

  const handleSelectedType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else if (selectedType !== null) {
      setSelectedType(null);
      setPokemonList([]);
    }
  };

  return (
    <Container>
      {/* <Container>: Adds padding around the component */}
      <Grid container spacing={2} mt={1}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='contained'
            sx={{
              '&.MuiButton-contained': {
                backgroundColor: 'pink',
              },
            }}
            onClick={() => handleSelectedType(null)}
          >
            ALL
          </Button>
          {pokemonTypes.map((type) => (
            <Button
              variant='contained'
              sx={{
                '&.MuiButton-contained': {
                  backgroundColor: TYPE_COLORS[type.name],
                },
              }}
              onClick={() => handleSelectedType(type)}
              key={type.name}
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
