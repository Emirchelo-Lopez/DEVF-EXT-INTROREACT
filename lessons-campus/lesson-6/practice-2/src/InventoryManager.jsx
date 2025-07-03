import { useReducer, useRef, useCallback, useState, useEffect } from "react";

// Lazy initializer function to load state from localStorage
const init = (initialState) => {
  try {
    const storedProducts = localStorage.getItem("inventory");
    return storedProducts
      ? { products: JSON.parse(storedProducts) }
      : initialState;
  } catch (error) {
    console.error("Could not parse inventory from localStorage", error);
    return initialState;
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      if (!action.name) return state;
      return {
        products: [
          ...state.products,
          { id: Date.now(), name: action.name, quantity: 1 },
        ],
      };
    case "increment":
      return {
        products: state.products.map((p) =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    case "decrement":
      return {
        products: state.products.map((p) =>
          p.id === action.id && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        ),
      };
    case "remove":
      return {
        products: state.products.filter((p) => p.id !== action.id),
      };
    // Challenge 3: New action to clear the inventory
    case "clear":
      return { products: [] };
    default:
      return state;
  }
}

function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, { products: [] }, init);
  const [searchTerm, setSearchTerm] = useState(""); // Challenge 1: State for search input
  const inputRef = useRef(null);

  // Challenge 2: Effect to save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(state.products));
  }, [state.products]);

  const handleAddProduct = useCallback(() => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value.trim() });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, []);

  const handleClearInventory = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  // Challenge 1: Filter products based on search term
  const filteredProducts = state.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Inventory Manager</h2>
      <input ref={inputRef} type="text" placeholder="Product name" />
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleClearInventory} style={{ marginLeft: "8px" }}>
        Clear Inventory
      </button>

      <hr style={{ margin: "1rem 0" }} />

      {/* Challenge 1: Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
            <button
              onClick={() => dispatch({ type: "increment", id: product.id })}
            >
              +
            </button>
            <button
              onClick={() => dispatch({ type: "decrement", id: product.id })}
            >
              -
            </button>
            <button
              onClick={() => dispatch({ type: "remove", id: product.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryManager;
