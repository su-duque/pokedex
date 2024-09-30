import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { PokemonWithImage } from '../interfaces/pokemon.interfaces';

interface PokemonCardProps {
  pokemon: PokemonWithImage; // It only receives 1 object
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { name, imageUrl } = pokemon;
  return (
    <Card>
      <CardMedia
        component='img'
        image={imageUrl}
        title={name}
        sx={{ height: 100, objectFit: 'contain' }}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography>{name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
