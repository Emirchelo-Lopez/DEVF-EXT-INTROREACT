import "./style.css";
import "animate.css";

const Characters = ({ characters, darkMode }) => {
  if (characters.length === 0) {
    return (
      <div className="alert alert-warning" role="alert">
        No characters found.
      </div>
    );
  }

  return (
    <div className="row">
      {characters.map((character) => (
        <div
          key={character.id}
          className="col-sm-3 mb-4 d-flex justify-content-center"
          style={{ cursor: "pointer" }}
        >
          <div
            className={`card ${
              darkMode ? "bg-dark text-light" : "bg-light text-dark"
            } animate__animated animate__zoomIn character-card`}
          >
            <img
              src={character.image}
              className="card-img-top"
              alt={character.name}
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">Species: {character.species}</p>
              <p className="card-text">Status: {character.status}</p>
              <p className="card-text">Origin: {character.origin.name}</p>
            </div>
            <div className="card-footer text-center small fst-italic">
              <small className="text-muted">ID: {character.id}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
