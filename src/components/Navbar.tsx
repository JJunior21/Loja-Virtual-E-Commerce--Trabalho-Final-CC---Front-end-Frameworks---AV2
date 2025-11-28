import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="header">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Loja AV2</h1>
      </Link>
      
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        {}
        <Link to="/" className="carrinho-btn">Produtos</Link>
        <Link to="/dashboard" className="carrinho-btn">Dashboard</Link>
        <Link to="/sobre" className="carrinho-btn">Sobre</Link>
        <Link to="/contatos" className="carrinho-btn">Contatos</Link>
        <Link to="/login" className="carrinho-btn">Login</Link>
        
        <Link to="/carrinho" className="carrinho-btn" style={{ background: '#facc15', color: 'black', border: 'none' }}>
          🛒 ({totalItems})
        </Link>
      </div>
    </nav>
  );

}
