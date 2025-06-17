// react snippet rafce
import "./style.css";
import reactLogo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={reactLogo}
            alt="Logo"
            width="30"
            height="24"
            className="navbar__logo d-inline-block align-text-top"
          />
          Rick and Morty
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
