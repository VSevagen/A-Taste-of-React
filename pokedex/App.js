import "./App.css";
import Header from "./components/header";
import Pokecard from "./components/Pokecard";
import Pokedex from "./components/Pokedex";
import Pokegame from "./components/Pokegame";

function App() {
  return (
    <div>
      <Header />
      <Pokegame />
    </div>
  );
}

export default App;
