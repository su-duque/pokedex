import {
  amber,
  blue,
  blueGrey,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors';
import { IndexedType } from './interfaces/pokemon.interfaces';

const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2';
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon`;

// Images API: https://github.com/PokeAPI/sprites;
export const POKEMON_IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export const POKEMON_TYPES: IndexedType[] = [
  {
    name: 'normal',
    url: 'https://pokeapi.co/api/v2/type/1/',
  },
  {
    name: 'fighting',
    url: 'https://pokeapi.co/api/v2/type/2/',
  },
  {
    name: 'flying',
    url: 'https://pokeapi.co/api/v2/type/3/',
  },
  {
    name: 'poison',
    url: 'https://pokeapi.co/api/v2/type/4/',
  },
  {
    name: 'ground',
    url: 'https://pokeapi.co/api/v2/type/5/',
  },
  {
    name: 'rock',
    url: 'https://pokeapi.co/api/v2/type/6/',
  },
  {
    name: 'bug',
    url: 'https://pokeapi.co/api/v2/type/7/',
  },
  {
    name: 'ghost',
    url: 'https://pokeapi.co/api/v2/type/8/',
  },
  {
    name: 'steel',
    url: 'https://pokeapi.co/api/v2/type/9/',
  },
  {
    name: 'fire',
    url: 'https://pokeapi.co/api/v2/type/10/',
  },
  {
    name: 'water',
    url: 'https://pokeapi.co/api/v2/type/11/',
  },
  {
    name: 'grass',
    url: 'https://pokeapi.co/api/v2/type/12/',
  },
  {
    name: 'electric',
    url: 'https://pokeapi.co/api/v2/type/13/',
  },
  {
    name: 'psychic',
    url: 'https://pokeapi.co/api/v2/type/14/',
  },
  {
    name: 'ice',
    url: 'https://pokeapi.co/api/v2/type/15/',
  },
  {
    name: 'dragon',
    url: 'https://pokeapi.co/api/v2/type/16/',
  },
  {
    name: 'dark',
    url: 'https://pokeapi.co/api/v2/type/17/',
  },
  {
    name: 'fairy',
    url: 'https://pokeapi.co/api/v2/type/18/',
  },
];

export const TYPE_COLORS: { [key: string]: string } = {
  normal: blueGrey[200],
  fighting: red[200],
  flying: amber[300],
  poison: deepPurple[200],
  ground: teal[200],
  rock: deepOrange[200],
  bug: green[200],
  ghost: cyan[200],
  steel: indigo[200],
  fire: orange[200],
  water: lightBlue[200],
  grass: lightGreen[200],
  electric: yellow[700],
  psychic: purple[200],
  ice: blue[200],
  dragon: lime[400],
  dark: grey[400],
  fairy: pink[200],
};
