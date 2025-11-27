import { useCart } from './context/CartContext';
import { Link } from 'react-router-dom';

export function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="container">
      <header className="header">
        <h1>Meu Carrinho</h1>
        <Link to="/" className="carrinho-btn">🏠 Voltar para Loja</Link>
      </header>

      <main>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Seu carrinho está vazio 😢</h2>
            <Link to="/" style={{ color: '#2563eb', fontWeight: 'bold' }}>Ir as compras</Link>
          </div>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '30px' }}>{item.image}</span>
                  <div style={{ textAlign: 'left' }}>
                    <h3>{item.name}</h3>
                    <p>Qtd: {item.quantity} x R$ {item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <p style={{ fontWeight: 'bold' }}>R$ {(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ background: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '20px', textAlign: 'right', fontSize: '24px', fontWeight: 'bold' }}>
              Total: R$ {total.toFixed(2)}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}