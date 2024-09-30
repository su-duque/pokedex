import { Box, Card, CardContent, Typography } from '@mui/material';
import { IndexedPokemon } from '../interfaces/pokemon.interfaces';

interface PokemonCardProps {
  pokemon: IndexedPokemon; // It only receives 1 object
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Typography>{pokemon.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
