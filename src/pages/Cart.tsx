import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';
import { Alert } from '../components/Alert';

export function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div>
      <PageTitle title="Meu Carrinho de Compras" />

      <main>
        {cart.length === 0 ? (
          // CASO O CARRINHO ESTEJA VAZIO
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Alert>
              Seu carrinho está vazio no momento 😢
            </Alert>
            <Link to="/" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>
              ⬅ Voltar para a Vitrine
            </Link>
          </div>
        ) : (
          // CASO TENHA PRODUTOS
          <div>
            {cart.map((item) => (
              <div key={item.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '30px' }}>{item.image}</span>
                  <div style={{ textAlign: 'left' }}>
                    <h3>{item.name}</h3>
                    <p style={{ color: '#666' }}>Qtd: {item.quantity} x R$ {item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  
                  <Button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ background: '#ef4444', padding: '8px 15px' }}
                  >
                    Remover
                  </Button>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '30px', textAlign: 'right' }}>
              <p style={{ fontSize: '20px' }}>Total a pagar:</p>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#16a34a' }}>
                R$ {total.toFixed(2)}
              </p>
            </div>

            <div style={{ textAlign: 'right', marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                 <Link to="/">
                    <Button style={{ background: '#64748b' }}>
                        Continuar Comprando
                    </Button> 
                 </Link>

                 <Button 
  onClick={() => {
    // Cria o objeto do pedido
    const pedido = {
      data: new Date().toLocaleString(),
      total: total,
      itens: cart
    };

    // Envia para o servidor (POST)
    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido)
    })
    .then(() => {
      alert('✅ Pedido salvo no banco de dados!');
      window.location.href = '/'; // Volta para home
    })
    .catch(erro => alert('Erro ao salvar: ' + erro));
  }}
>
  Finalizar Compra Real
</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}