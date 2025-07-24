import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import './Shop.css'; // Create this file for shop-specific styles

const Shop = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <main className="shop-container">
      <h1 className="shop-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Shop;