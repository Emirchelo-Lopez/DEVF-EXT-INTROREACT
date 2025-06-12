import { useState } from "react";

// Pistas para completar el código
// La función eliminarProducto debe actualizar el estado filtrando el producto correspondiente.
// Usa setProductos con el método .filter() para excluir el producto seleccionado de la lista.
// Asegúrate de pasar el índice correcto en la función onClick.

export default function ShoppingList() {
  // Define state for the shopping list
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  // Function to add a new product to the list
  const addProduct = () => {
    if (newProduct.trim() !== "") {
      setProducts([...products, newProduct]);
      setNewProduct("");
    }
  };

  // Function to remove a product from the list
  const removeProduct = (index) => {
    // Complete the logic to remove a product
    const filteredProducts = [];

    products.forEach((prod, i) => {
      if (i !== index) {
        filteredProducts.push(prod);
      }
    });

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button onClick={addProduct}>Add</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}
            <button onClick={() => removeProduct(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
