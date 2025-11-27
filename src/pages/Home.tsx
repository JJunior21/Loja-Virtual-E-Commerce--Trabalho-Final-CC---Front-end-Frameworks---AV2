import { useEffect, useState } from 'react';
import { useCart, type Product } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const { addToCart } = useCart();
  
  // 1. Criamos um estado para guardar os produtos que vêm da API
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect: Executa assim que a tela carrega
  useEffect(() => {
    // Faz a chamada para a nossa API fake (Porta 3000)
    fetch('http://localhost:3000/products')
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        setProducts(data); // Salva os dados no estado
        setLoading(false); // Avisa que terminou de carregar
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Carregando produtos da API... ⏳</div>;
  }

  return (
    <div>
      {/* Banner Promocional */}
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
            <h2 style={{ fontSize: '2.5rem', margin: '15px 0' }}>Semana da Tecnologia</h2>
            <p style={{ fontSize: '1.2rem' }}>Produtos carregados via API REST</p>
        </div>
        <div style={{ fontSize: '80px' }}>📦✈️</div>
      </div>

      <h2 style={{ fontSize: '1.5rem', color: '#333', borderLeft: '5px solid #2563eb', paddingLeft: '15px', marginBottom: '20px' }}>
        Produtos em Destaque 
      </h2>

      <div className="vitrine">
        {/* Agora mapeamos a lista que veio da API, não a fixa */}
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
      
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-around', background: 'white', padding: '20px', borderRadius: '8px', color: '#555' }}>
        <span>💳 <strong>Parcele em até 12x</strong> sem juros</span>
        <span>🛡️ <strong>Compra Garantida</strong> e segura</span>
        <span>🔄 <strong>Devolução Grátis</strong> em 7 dias</span>
      </div>
    </div>
  );

}
