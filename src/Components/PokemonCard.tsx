import { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PokemonWithImage } from '../interfaces/pokemon.interfaces';
import { getColorFromUrl } from '../utils/color';

interface PokemonCardProps {
  pokemon: PokemonWithImage; // It only receives 1 object
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { name, imageUrl } = pokemon;
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);

  const getPokemonColor = async () => {
    const color = await getColorFromUrl(imageUrl);
    if (color) setPokemonColor(color);
  };

  useEffect(() => {
    getPokemonColor();
  }, []);

  return (
    <Card sx={{backgroundColor: pokemonColor}}>
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
