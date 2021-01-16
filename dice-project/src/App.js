import logo from "./logo.svg";
import "./App.css";
import Dice from "./Dice";
import Lottery from "./components/Lottery";
import Ball from "./components/Ball";

function App() {
  return (
    <div className="App">
      <Dice />
      <Lottery maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;
