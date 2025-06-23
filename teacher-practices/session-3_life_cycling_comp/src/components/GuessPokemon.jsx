import { useState, useEffect } from "react";

const MAX_POKEMONS = 150;

const GuessPokemon = () => {
  const [id, setId] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [guessing, setGuessing] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showImg, setShowImg] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const randomIdGen = () => {
    const randomId = Math.floor(Math.random() * MAX_POKEMONS) + 1;
    setId(randomId);
  };

  const getPokemon = async (id) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const pokemon = await res.json();
      setPokemon({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      });
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    randomIdGen();
  }, []);

  useEffect(() => {
    if (!id) return;
    getPokemon(id);
  }, [id]);

  const handleGuess = () => {
    if (!guessing.trim()) return;

    const lowerCaseGuess = guessing.toLowerCase().trim();

    if (lowerCaseGuess === pokemon.name) {
      setFeedback("Nailed it! Congrats!");
      setShowImg(true);
    } else {
      setFeedback("Ups! Sorry, try again!");
      setShowImg(false);
    }
  };

  const handleNext = () => {
    randomIdGen();
    setGuessing("");
    setFeedback("");
    setShowImg(false);
  };

  return (
    <div className="container text-center mt-5 p-4 bg-dark text-light rounded shadow">
      <h1 className="display-4 mb-4 d-flex justify-content-center align-items-center gap-3">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="Pokeball"
          width={60}
          height={70}
        />
        ¿Quién es ese Pokémon?
      </h1>

      <div className="mb-3">
        {/* Mostar la imagen como silueta si no adivina */}
        {pokemon && !showImg ? (
          <img
            src={pokemon.image}
            alt="¿Quién es ese Pokémon?"
            style={{ filter: "brightness(0)" }}
            width={200}
          />
        ) : (
          // Si se adivina correctamente, mostrar la imagen real
          pokemon && (
            <img
              className="mb-3"
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
            />
          )
        )}
      </div>

      {/* Input para que el usuario adivine el nombre del Pokémon */}
      <input
        type="text"
        className="form-control w-50 mx-auto mb-3"
        placeholder="Escribe el nombre del Pokémon"
        value={guessing} // valor actual del estado 'guess'
        onChange={(e) => setGuessing(e.target.value)} // se actualiza el estado con lo que escriba
      />

      {/* Botón para comprobar la respuesta */}
      <button className="btn btn-warning me-2" onClick={handleGuess}>
        Adivinar
      </button>

      {/* Botón para pasar/cambiar al siguiente Pokémon */}
      <button className="btn btn-outline-light" onClick={handleNext}>
        Siguiente Pokémon
      </button>

      {/* Mostrar el feedback al usuario */}
      {feedback && <p className="mt-4 fs-4">{feedback}</p>}
    </div>
  );
};

export default GuessPokemon;
