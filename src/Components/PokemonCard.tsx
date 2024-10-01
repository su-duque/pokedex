import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import { PokemonWithImage } from '../interfaces/pokemon.interfaces';
import usePokemonDetails from '../hooks/usePokemonDetails';

interface PokemonCardProps {
  pokemon: PokemonWithImage; // It only receives 1 object
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { name, pokemonIndex } = pokemon;
  const { pokemonDetails, isLoading } = usePokemonDetails({
    pokemonName: name,
  });

  /* Nullish coalescing operator (??) required to avoid error:
  Cannot destructure property of undefined | null */
  const { height, weight, types, image, color } = pokemonDetails ?? {};

  // TODO: Move styles to an CSS file
  return (
    <>
      {isLoading || !pokemonDetails ? (
        <CircularProgress color='warning' />
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
                color: 'white',
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  textTransform: 'capitalize',
                  flex: 1,
                  justifyContent: 'center',
                  backgroundColor: 'PaleVioletRed',
                }}
              >
                #{pokemonIndex}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  justifyContent: 'center',
                  flex: 2,
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
                color: 'white',
              }}
            >
              {types?.map((item) => (
                <Typography
                  key={item.type.name}
                  sx={{
                    textTransform: 'capitalize',
                    backgroundColor: 'Plum',
                  }}
                >
                  {item.type.name}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                color: 'white',
              }}
            >
              {weight && (
                <Typography
                  sx={{
                    textTransform: 'capitalize',
                    backgroundColor: 'LightCoral',
                  }}
                >
                  {weight}kg
                </Typography>
              )}
              {height && (
                <Typography
                  sx={{
                    textTransform: 'capitalize',
                    backgroundColor: 'LightCoral',
                  }}
                >
                  {height}m
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PokemonCard;
