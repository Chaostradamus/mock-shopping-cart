import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart">
            Cart ({cartCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;