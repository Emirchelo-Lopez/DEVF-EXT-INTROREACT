import { useReducer, useRef, useCallback, useEffect, useState } from "react";

// The initializer function runs once to get the initial state.
// It tries to load from localStorage, otherwise it uses a default.
const init = (initialState) => {
  try {
    const storedHistory = localStorage.getItem("counterHistory");
    if (storedHistory) {
      const history = JSON.parse(storedHistory);
      // We can derive the last count from the last history entry if needed,
      // but for simplicity we'll just restore history and keep count at 0.
      // A more robust solution might store the whole state object.
      return { ...initialState, history };
    }
  } catch (e) {
    console.error("Failed to parse history from localStorage", e);
  }
  return initialState;
};

// The reducer function manages all state transitions
function reducer(state, action) {
  switch (action.type) {
    case "increment": { // Now uses a payload for the amount, defaulting to 1
      const amount = action.payload || 1;
      return {
        count: state.count + amount,
        history: [
          ...state.history,
          `+${amount} (New Value: ${state.count + amount})`,
        ],
      };
    }
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (New Value: ${state.count - 1})`],
      };
    case "reset":
      // Resets to a clean slate, not the localStorage version
      return { count: 0, history: [] };
    case "undo": {
      if (state.history.length === 0) {
        return state; // Can't undo if there's no history
      }
      // A simple way to get the previous count
      // For a more robust undo, storing previous state is better.
      // Here, we parse the last history message to figure out the change.
      const lastChange = state.history[state.history.length - 1];
      const changeAmount = parseInt(lastChange.split(" ")[0]);

      return {
        count: state.count - changeAmount, // Revert the count
        history: state.history.slice(0, -1), // Remove last history item
      };
    }
    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(
    reducer,
    { count: 0, history: [] },
    init
  );
  const [inputValue, setInputValue] = useState(1); // State for the custom amount input
  const incrementBtnRef = useRef(null);

  // Effect to save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("counterHistory", JSON.stringify(state.history));
  }, [state.history]);

  // Focus the increment button on initial render
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  // Memoized handlers
  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment", payload: Number(inputValue) || 1 });
  }, [inputValue]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  return (
    <div>
      <h2>Counter: {state.count}</h2>

      {/* Action Buttons */}
      <button ref={incrementBtnRef} onClick={handleIncrement}>
        +
      </button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleReset}>Reset</button>

      {/* Challenge 2: Custom Increment Input */}
      <div style={{ marginTop: "1rem" }}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: "50px", marginRight: "8px" }}
        />
        <span>Increment Amount</span>
      </div>

      {/* History Display */}
      <h3>History of Changes:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterGame;
