type Pokemon = {
  number: string;
  name: string;
};
type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const pokeList = pokedex.map((Pokemon) => <li>{Pokemon.name}</li>);
  return <ul>{pokeList}</ul>;
}
