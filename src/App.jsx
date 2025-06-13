import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
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
        const response = await fetch(url);

        if (!response.ok) {
          console.log("HTTP Request Error " + response.status);
          throw new Error("HTTP Request Error " + response.status);
        }

        const data = await response.json();
        setCharacters(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    getCharacters(BASE_URL);
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}
