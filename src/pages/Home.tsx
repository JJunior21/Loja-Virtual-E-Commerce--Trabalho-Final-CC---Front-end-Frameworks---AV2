import { useEffect, useState } from 'react';
import { useCart, type Product } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const { addToCart } = useCart();
  
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Busca os dados assim que a tela abre
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  
  return (
    <div>
      {/* Banner Promocional  */}
      <div style={{ 
          background: 'linear-gradient(90deg, #232f3e 0%, #37475a 100%)', 
          color: 'white', 
          padding: '40px', 
          borderRadius: '8px', 
          marginBottom: '30px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div>
            <span style={{ background: '#ffc107', color: '#000', padding: '5px 10px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.9rem' }}>OFERTA DO DIA</span>
            <h2 style={{ fontSize: '2.5rem', margin: '15px 0 0 0' }}>Semana da Tecnologia</h2>
            {}
        </div>
        <div style={{ fontSize: '80px' }}>📦✈️</div>
      </div>

      {/* Título da Seção  */}
      <h2 style={{ fontSize: '1.5rem', color: '#333', borderLeft: '5px solid #2563eb', paddingLeft: '15px', marginBottom: '20px' }}>
        Produtos em Destaque
      </h2>

      <div className="vitrine">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
      
      {/* Barra de Benefícios */}
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-around', background: 'white', padding: '20px', borderRadius: '8px', color: '#555' }}>
        <span>💳 <strong>Parcele em até 12x</strong> sem juros</span>
        <span>🛡️ <strong>Compra Garantida</strong> e segura</span>
        <span>🔄 <strong>Devolução Grátis</strong> em 7 dias</span>
      </div>
    </div>
  );
}
