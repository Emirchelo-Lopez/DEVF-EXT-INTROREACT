import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Characters from "./components/Characters/Characters";
import "./App.css";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function getCharacters(url) {
      try {
        setLoading(true);

        const timer = new Promise((res) => setTimeout(res, 2000));
        const fetchResponse = await fetch(url);
        await timer;

        // Check if the fetchResponse is ok (status in the range 200-299)
        if (!fetchResponse.ok) {
          console.log("HTTP Request Error " + fetchResponse.status);
          throw new Error("HTTP Request Error " + fetchResponse.status);
        }

        const data = await fetchResponse.json();

        setCharacters(data.results);
        setPage(data.info.page);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setError(error);
        setCharacters([]);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    getCharacters(BASE_URL);
  }, []);

  useEffect(() => {
    document.body.className = darkMode
      ? "bg-dark text-light"
      : "bg-light text-dark";
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Rick and Morty API</h1>
          <button
            className={darkMode ? "btn btn-light" : "btn btn-dark"}
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-grow text-primary"
            style={{ width: "3rem", height: "3rem" }}
          />
          <div
            className="spinner-grow text-success"
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      ) : (
        // <Characters />
        <ul>
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
