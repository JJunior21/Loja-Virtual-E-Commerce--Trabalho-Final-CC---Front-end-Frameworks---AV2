import { PageTitle } from '../components/PageTitle';

export function Sobre() {
  return (
    <div>
      {/* Banner Institucional */}
      <div style={{ background: 'linear-gradient(to right, #0f172a, #334155)', color: 'white', padding: '60px 20px', borderRadius: '8px', marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Transformando o Varejo</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          A Loja AV2 é líder em tecnologia e inovação logística, conectando milhões de consumidores aos melhores produtos do mundo.
        </p>
      </div>

      <PageTitle title="Quem Somos" />

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginBottom: '50px' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: '#2563eb', fontSize: '1.5rem', marginBottom: '15px' }}>Nossa Missão</h3>
            <p style={{ lineHeight: '1.6', color: '#475569', fontSize: '1.1rem' }}>
                Ser a empresa mais centrada no cliente do planeta; onde os clientes podem encontrar e descobrir qualquer coisa que queiram comprar online, com os preços mais baixos possíveis.
            </p>
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: '#2563eb', fontSize: '1.5rem', marginBottom: '15px' }}>Infraestrutura Global</h3>
            <p style={{ lineHeight: '1.6', color: '#475569', fontSize: '1.1rem' }}>
                Com 12 centros de distribuição automatizados e uma frota própria de entrega, garantimos que seu pedido chegue em até 24 horas em 90% do território nacional.
            </p>
        </div>
      </div>

      {/* Estatísticas de "Empresa Grande" */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', background: '#f8fafc', padding: '40px', borderRadius: '12px' }}>
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1e293b' }}>+15 Mi</h2>
            <p style={{ color: '#64748b' }}>Clientes Ativos</p>
        </div>
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1e293b' }}>99.8%</h2>
            <p style={{ color: '#64748b' }}>Entregas no Prazo</p>
        </div>
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1e293b' }}>24h</h2>
            <p style={{ color: '#64748b' }}>Suporte Técnico</p>
        </div>
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1e293b' }}>100%</h2>
            <p style={{ color: '#64748b' }}>Seguro</p>
        </div>
      </div>
    </div>
  );
}