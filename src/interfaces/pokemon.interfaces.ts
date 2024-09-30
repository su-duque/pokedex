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
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
