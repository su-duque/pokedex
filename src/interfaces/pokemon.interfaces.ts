export interface IndexedPokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IndexedPokemon[];
}

export interface PokemonWithImage {
  name: string;
  url: string;
  imageUrl: string;
  pokemonIndex: number;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: PokemonType[];
  image: string;
  color?: string | null;
}

export interface IndexedType {
  name: string;
  url: string;
}

export interface IndexedPokemonByType {
  pokemon: IndexedPokemon;
  slot: string;
}

export interface PokemonByTypeListResponse {
  id: number;
  pokemon: IndexedPokemonByType[];
}
