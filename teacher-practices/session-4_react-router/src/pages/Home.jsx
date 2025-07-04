import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  return <h1>Welcome, {user.email}!</h1>;
};

export default Home;
