import { Pagination } from '@mui/material';
import { IndexedType } from '../interfaces/pokemon.interfaces';

interface PokemonPaginationProps {
  selectedType: IndexedType | null;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  fetchPokemonByType: (page: number) => Promise<void>;
  fetchPokemon: (page: number) => Promise<void>;
  totalNumberOfPokemon: number;
  numberOfPokemonPerPage: number;
}

function PokemonPagination({
  selectedType,
  currentPage,
  setCurrentPage,
  fetchPokemonByType,
  fetchPokemon,
  totalNumberOfPokemon,
  numberOfPokemonPerPage,
}: PokemonPaginationProps) {
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

  // TODO: Move count calculation into a function
  return (
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
  );
}

export default PokemonPagination;
