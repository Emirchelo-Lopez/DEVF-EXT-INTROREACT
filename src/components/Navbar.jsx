import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {!user && <Link to="/login">Log In</Link>}
        {!user && <Link to="/signup">Sign Up</Link>}
      </div>
      {user && <button onClick={logout}>Log Out</button>}
    </nav>
  );
};

export default Navbar;
