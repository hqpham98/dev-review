import "./App.css";
import { PokemonList } from "./PokemonList";

function App() {
  const pokedex = [
    { number: "001", name: "Bulbasaur" },
    { number: "004", name: "Charmander" },
    { number: "007", name: "Squirtle" },
    { number: "025", name: "Pikachu" },
    { number: "039", name: "Jigglypuff" },
  ];

  return (
    <>
      <PokemonList pokedex={pokedex} />
    </>
  );
}

export default App;
