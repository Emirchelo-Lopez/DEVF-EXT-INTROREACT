import Toolbar from "./components/Toolbar";
import "./App.css";

export default function App() {
  // For this exercise, we'll hardcode the theme value.
  const theme = "dark";

  return (
    // 2. Wrap the Toolbar component with the Theme provider
    // and give it the theme value.
    <div className={`App ${theme}`}>
      <Toolbar />
    </div>
  );
}
