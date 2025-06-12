import { useState, useEffect } from "react";

export default function App() {
  // Programming Logic
  // useState Hook
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect load data from an API

  const getDogs = async () => {
    try {
      const response = await fetch("https://dogapi.dog/api/v2/breeds");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDogs(data.data);
      console.log(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  // Conditional rendering
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  // Rendering JSX (HTML + JS) app
  return (
    <>
      <div className="container">
        <h1>Dog Breeds</h1>
        <ul className="dog-list">
          {dogs.map((dog) => (
            <li key={dog.id} className="dog-item">
              <h2>{dog.name}</h2>
              <h3>{dog.attributes.name}</h3>
              <p>{dog.attributes.description}</p>
            </li>
          ))}
        </ul>
        <footer>
          <p>Powered by DogAPI</p>
        </footer>
      </div>
    </>
  );
}
