import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Typography,
} from '@mui/material';
import { IndexedPokemon } from '../interfaces/pokemon.interfaces';
import usePokemonDetails from '../hooks/usePokemonDetails';
import { TYPE_COLORS } from '../constants';

interface PokemonCardProps {
  pokemon: IndexedPokemon; // It only receives 1 object
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { name } = pokemon;
  const { pokemonDetails, isLoading } = usePokemonDetails({
    pokemonName: name,
  });

  /* Nullish coalescing operator (??) required to avoid error:
  Cannot destructure property of undefined | null */
  const { height, weight, types, image, color, id } = pokemonDetails ?? {};

  // TODO: Move styles to a CSS file
  return (
    <>
      {isLoading || !pokemonDetails ? (
        <CircularProgress color='warning' /> // TODO: Change color
      ) : (
        <Card sx={{ backgroundColor: color }}>
          {/* To add a hover effect to the card: <CardActionArea></CardActionArea> */}
          <CardMedia
            component='img'
            image={image}
            title={name}
            sx={{ height: 100, objectFit: 'contain', marginTop: 2 }}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Chip
                sx={{
                  flex: 1,
                  fontWeight: 'bold',
                }}
                label={'#' + id}
              />
              <Typography
                sx={{
                  display: 'flex',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  justifyContent: 'center',
                  flex: 2,
                  color: 'white',
                }}
              >
                {name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              {types?.map((item) => (
                <Chip
                  label={item.type.name}
                  key={item.type.name}
                  sx={{
                    backgroundColor: TYPE_COLORS[item.type.name],
                    '& .MuiChip-label': {
                      color: 'white',
                      textTransform: 'uppercase',
                    },
                  }}
                />
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              {weight && (
                <Chip
                  sx={{
                    backgroundColor: 'pink',
                  }}
                  label={weight + 'kg'}
                />
              )}
              {height && (
                <Chip
                  sx={{
                    backgroundColor: 'pink',
                  }}
                  label={height + 'm'}
                />
              )}
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PokemonCard;
