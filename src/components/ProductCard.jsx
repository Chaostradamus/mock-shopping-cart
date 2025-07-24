import { useState } from 'react';
import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset after adding
  };

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        loading="lazy" 
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <div className="quantity-controls">
          <button 
            onClick={handleDecrement}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input 
            type="number" 
            value={quantity} 
            min="1"
            onChange={(e) => {
              const value = Math.max(1, Number(e.target.value));
              setQuantity(value);
            }}
            className="quantity-input"
          />
          <button 
            onClick={handleIncrement}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
};

export default ProductCard;