import { Button, Container, Pagination } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PokemonList from '../Components/PokemonList';
import usePokemon from '../hooks/usePokemon';
import { IndexedType } from '../interfaces/pokemon.interfaces';
import { TYPE_COLORS } from '../constants';
import { useState } from 'react';

const Home = () => {
  const {
    pokemonList,
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

  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    fetchNextPage(value);
  };

  const isSelected = (typeName: string) => {
    // If selectedType?.name is null, all the buttons must be enabled, so the function returns true
    return selectedType?.name ? typeName === selectedType?.name : true;
  }

  return (
    <Container sx={{ marginBottom: '8px' }}>
      {/* <Container>: Adds padding around the component */}
      <Grid
        container
        spacing={2}
        mt={1}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
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
              disabled={!isSelected(type.name)}
            >
              {type.name}
            </Button>
          ))}
        </Grid>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <PokemonList pokemonItems={pokemonList} />
        </Grid>
        <Pagination
          count={10}
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
      </Grid>
    </Container>
  );
};

export default Home;
