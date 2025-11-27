import { useEffect, useState } from 'react';
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';

interface Order {
  id: string;
  data: string;
  total: number;
  itens: any[];
}

export function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // Estado para alternar entre Cliente e Vendedor

  function loadOrders() {
    fetch('http://localhost:3000/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      });
  }

  // Função genérica para remover pedido (serve para Cancelar ou Excluir)
  function handleCancelOrder(id: string) {
    if (confirm('Tem certeza que deseja CANCELAR este pedido? Essa ação não pode ser desfeita.')) {
      fetch(`http://localhost:3000/orders/${id}`, { method: 'DELETE' })
      .then(() => {
        alert('Pedido cancelado com sucesso!');
        loadOrders();
      });
    }
  }

  useEffect(() => {
    loadOrders();
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Carregando informações...</p>;

  return (
    <div>
      {/* BARRA DE ALTERNÂNCIA (Topo) */}
      <div style={{ background: '#f1f5f9', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <span>Visualizando como: <strong>{isAdmin ? 'Vendedor (Admin)' : 'Cliente Consumidor'}</strong></span>
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          style={{ padding: '8px 15px', background: isAdmin ? '#475569' : '#2563eb', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Trocar para Visão de {isAdmin ? 'Cliente' : 'Vendedor'}
        </button>
      </div>

      {isAdmin ? (
        // ================= VISÃO DO VENDEDOR (ADMIN) =================
        <div>
          <PageTitle title="Painel Administrativo (Gestão)" />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
             <div className="card" style={{ borderLeft: '4px solid #16a34a' }}>
                <h3>Faturamento</h3>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  R$ {orders.reduce((acc, order) => acc + order.total, 0).toFixed(2)}
                </p>
             </div>
             <div className="card" style={{ borderLeft: '4px solid #2563eb' }}>
                <h3>Total Pedidos</h3>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{orders.length}</p>
             </div>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3>Todos os Pedidos do Site</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                  <th style={{ padding: '10px' }}>ID</th>
                  <th style={{ padding: '10px' }}>Data</th>
                  <th style={{ padding: '10px' }}>Valor</th>
                  <th style={{ padding: '10px' }}>Ação</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
                    <td style={{ padding: '10px' }}>#{order.id}</td>
                    <td style={{ padding: '10px' }}>{order.data}</td>
                    <td style={{ padding: '10px', color: 'green', fontWeight: 'bold' }}>R$ {order.total.toFixed(2)}</td>
                    <td style={{ padding: '10px' }}>
                      <button onClick={() => handleCancelOrder(order.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Excluir do Sistema</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      ) : (
        // ================= VISÃO DO CLIENTE (CONSUMIDOR) =================
        <div>
          <PageTitle title="Minha Conta" />
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
             <div style={{ flex: 1, padding: '20px', background: 'white', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '30px' }}>📦</span>
                <h3>Seus Pedidos</h3>
             </div>
             <div style={{ flex: 1, padding: '20px', background: 'white', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '30px' }}>🔒</span>
                <h3>Segurança</h3>
             </div>
             <div style={{ flex: 1, padding: '20px', background: 'white', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '30px' }}>🎧</span>
                <h3>Ajuda</h3>
             </div>
          </div>

          <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>Histórico de Compras Recentes</h3>

          {orders.length === 0 ? (
            <p>Você ainda não fez nenhum pedido.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {orders.map(order => (
                <div key={order.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
                  {/* Cabeçalho do Pedido */}
                  <div style={{ background: '#f0f2f5', padding: '15px', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#555' }}>
                     <div>
                        <span>DATA DO PEDIDO</span><br/>
                        <strong>{order.data}</strong>
                     </div>
                     <div>
                        <span>TOTAL</span><br/>
                        <strong>R$ {order.total.toFixed(2)}</strong>
                     </div>
                     <div>
                        <span>Nº DO PEDIDO</span><br/>
                        <strong>#{order.id}</strong>
                     </div>
                  </div>
                  
                  {/* Corpo do Pedido */}
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ color: '#166534', marginBottom: '10px' }}>Status: Processando Envio</h4>
                    
                    {order.itens.map((item: any) => (
                      <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                        <span style={{ fontSize: '24px' }}>{item.image}</span>
                        <div>
                          <p style={{ margin: 0, fontWeight: 'bold', color: '#2563eb' }}>{item.name}</p>
                          <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>Qtd: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <Button style={{ fontSize: '0.8rem' }}>Rastrear pacote</Button>
                      
                      {/* BOTÃO DE CANCELAR (NOVO) */}
                      <button 
                        onClick={() => handleCancelOrder(order.id)}
                        style={{ 
                          padding: '8px 15px', 
                          background: 'white', 
                          color: '#ef4444',
                          border: '1px solid #ef4444', 
                          borderRadius: '5px', 
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        Cancelar Pedido
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}