import { useState } from "react";
import GuessPokemon from "./components/GuessPokemon";
import "./App.css";

function App() {
  const [showGame, setShowGame] = useState(false);
  return (
    <>
      <div className="text-center mt-4">
        <button
          className="btn btn-danger mb3"
          onClick={() => setShowGame(!showGame)}
        >
          {showGame ? "Ocultar juego" : "Mostrar juego"}
        </button>
        {showGame && <GuessPokemon />}
      </div>
    </>
  );
}

export default App;
