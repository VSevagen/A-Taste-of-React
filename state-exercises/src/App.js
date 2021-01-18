import logo from "./logo.svg";
import "./App.css";
import Coin from "./components/Coin";
import Coinflipper from "./components/Coinflipper";

function App() {
  return (
    <div className="App">
      {/* <Coin surface={1} /> */}
      <Coinflipper />
    </div>
  );
}

export default App;
