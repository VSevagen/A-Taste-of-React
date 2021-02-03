import "../styles/Pokecard.css";

const POKE_IMG = "https://cdn.traction.one/pokedex/pokemon/";

function Pokecard(props) {
  let ImgSrc = `${POKE_IMG}${props.id}.png`;
  return (
    <div className="Pokecard">
      <h3>{props.name}</h3>
      <img src={ImgSrc} alt={props.name}></img>
      <h4>Type: {props.type}</h4>
      <h5>EXP: {props.exp}</h5>
    </div>
  );
}

export default Pokecard;
