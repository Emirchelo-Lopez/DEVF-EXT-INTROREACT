// 3. Import the ProductCard component.
import ProductCard from "./ProductCard";

// 4. This component must accept props to get the product array.
export default function ProductList({ products }) {
  // 5. Access the product array from props.
  // Use the JavaScript .map() method to create a <ProductCard /> for each product.
  // Make sure to pass the details of each product (name, description, price)
  // down to the ProductCard as props.
  // Remember to include a unique `key` for each card in the list!

  return (
    <div className="product-list">
      {/* The list of ProductCard components will be rendered here */}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
