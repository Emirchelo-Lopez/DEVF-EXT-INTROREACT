// react snippet rafce
import "./style.css";
import reactLogo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <>
      {/* As a heading  */}
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar__link">Rick and Morty</a>
        <div className="navbar__container-fluid">
          <img className="navbar__logo" src={reactLogo} alt="logo_react"></img>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// snnipet: rafce
