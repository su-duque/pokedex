import { Button } from '@mui/material';
import { IndexedType } from '../interfaces/pokemon.interfaces';
import { TYPE_COLORS } from '../constants';

interface PokemonFilterProps {
  pokemonTypes: IndexedType[];
  setSelectedType: React.Dispatch<React.SetStateAction<IndexedType | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  selectedType: IndexedType | null;
}

function PokemonFilter({
  pokemonTypes,
  setSelectedType,
  setCurrentPage,
  selectedType,
}: PokemonFilterProps) {
  const handleSelectedType = (type: IndexedType | null) => {
    setSelectedType(type ? type : null); // null to see ALL Pokemon
    setCurrentPage(1); // Reset because the pokemon type changed
  };

  const isSelected = (typeName: string) => {
    // If selectedType?.name is null, all the buttons must be enabled, so the function returns true
    return selectedType?.name ? typeName === selectedType?.name : true;
  };

  return (
    <>
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
    </>
  );
}

export default PokemonFilter;
