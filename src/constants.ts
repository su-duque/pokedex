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
    color: blueGrey[200],
  },
  {
    name: 'fighting',
    url: 'https://pokeapi.co/api/v2/type/2/',
    color: red[200],
  },
  {
    name: 'flying',
    url: 'https://pokeapi.co/api/v2/type/3/',
    color: amber[300],
  },
  {
    name: 'poison',
    url: 'https://pokeapi.co/api/v2/type/4/',
    color: deepPurple[200],
  },
  {
    name: 'ground',
    url: 'https://pokeapi.co/api/v2/type/5/',
    color: teal[200],
  },
  {
    name: 'rock',
    url: 'https://pokeapi.co/api/v2/type/6/',
    color: deepOrange[200],
  },
  {
    name: 'bug',
    url: 'https://pokeapi.co/api/v2/type/7/',
    color: green[200],
  },
  {
    name: 'ghost',
    url: 'https://pokeapi.co/api/v2/type/8/',
    color: cyan[200],
  },
  {
    name: 'steel',
    url: 'https://pokeapi.co/api/v2/type/9/',
    color: indigo[200],
  },
  {
    name: 'fire',
    url: 'https://pokeapi.co/api/v2/type/10/',
    color: orange[200],
  },
  {
    name: 'water',
    url: 'https://pokeapi.co/api/v2/type/11/',
    color: lightBlue[200],
  },
  {
    name: 'grass',
    url: 'https://pokeapi.co/api/v2/type/12/',
    color: lightGreen[200],
  },
  {
    name: 'electric',
    url: 'https://pokeapi.co/api/v2/type/13/',
    color: yellow[700], // no se ve
  },
  {
    name: 'psychic',
    url: 'https://pokeapi.co/api/v2/type/14/',
    color: purple[200],
  },
  {
    name: 'ice',
    url: 'https://pokeapi.co/api/v2/type/15/',
    color: blue[200],
  },
  {
    name: 'dragon',
    url: 'https://pokeapi.co/api/v2/type/16/',
    color: lime[400],
  },
  {
    name: 'dark',
    url: 'https://pokeapi.co/api/v2/type/17/',
    color: grey[400],
  },
  {
    name: 'fairy',
    url: 'https://pokeapi.co/api/v2/type/18/',
    color: pink[200],
  },
];
