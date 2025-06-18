// 1. Import the ProductList component.
import ProductList from "./components/ProductList";
import "./App.css";

// The data source for our application.
const productData = [
  {
    id: "p1",
    name: "Wireless Headphones",
    description: "High-fidelity sound and 24-hour battery life.",
    price: 149.99,
  },
  {
    id: "p2",
    name: "Mechanical Keyboard",
    description: "RGB backlit keyboard with custom switches.",
    price: 119.5,
  },
  {
    id: "p3",
    name: "4K Monitor",
    description: "A 27-inch monitor with stunning color accuracy.",
    price: 399.0,
  },
  {
    id: "p4",
    name: "Ergonomic Mouse",
    description: "Designed for comfort and long hours of use.",
    price: 79.99,
  },
];

export default function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Our Awesome Products</h1>
      </header>
      <main>
        {/* 2. Render the ProductList component here. */}
        {/* You need to pass the `productData` array to it as a prop. */}
        <ProductList products={productData} />
      </main>
    </div>
  );
}
