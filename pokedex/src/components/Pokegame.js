import Pokedex from "./Pokedex";

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", experience: 62 },
    { id: 11, name: "Squitle", type: "water", experience: 63 },
    { id: 12, name: "Metapod", type: "bug", experience: 72 },
    { id: 7, name: "Butterfree", type: "bug", experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", experience: 95 },
  ],
};

function Pokegame(props) {
  let hand1 = [];
  let hand2 = [...props.pokemon];

  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1);
    hand1.push(randPokemon[0]);
  }

  return (
    <div>
      <Pokedex pokemon={hand1} />
      <Pokedex pokemon={hand2} />
    </div>
  );
}

export default Pokegame;
