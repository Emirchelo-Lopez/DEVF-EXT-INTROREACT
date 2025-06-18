// 6. This component needs to accept the props passed from ProductList (name, description, price).
export default function ProductCard({ name, description, price }) {
  // A helper function to format the price. You can use this!
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="product-card">
      {/* 7. Use the props to display the product's name, description, and price. */}
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">{formatPrice(price)}</p>
    </div>
  );
}
