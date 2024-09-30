import { IndexedPokemon } from "../interfaces/pokemon.interfaces"

interface PokemonCardProps {
    pokemon: IndexedPokemon; // It only receives 1 object
}
const PokemonCard = ({pokemon}: PokemonCardProps) => {
    return <div>{pokemon.name}</div>;
};

export default PokemonCard