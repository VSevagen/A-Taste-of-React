import Pokecard from "./Pokecard";
import "../styles/Pokedex.css";

Pokedex.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", experience: 62 },
    { id: 11, name: "Squitle", type: "water", experience: 63 },
    { id: 12, name: "Metapod", type: "bug", experience: 72 },
    { id: 7, name: "Butterfree", type: "bug", experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", experience: 95 },
  ],
};

function Pokedex(props) {
  return (
    <div className="Pokedex">
      {props.pokemon.map((p) => (
        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.experience} />
      ))}
    </div>
  );
}

export default Pokedex;
