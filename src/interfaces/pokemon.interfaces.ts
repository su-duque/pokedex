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
