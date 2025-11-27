import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Contact() {
  return (
    <div>
      <PageTitle title="Central de Atendimento" />

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Lado Esquerdo: Formulário de Contato */}
        <div style={{ flex: 2, background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Envie uma mensagem</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Assunto</label>
            <Input placeholder="Ex: Dúvida sobre meu pedido" />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Seu E-mail</label>
            <Input placeholder="cliente@email.com" />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Mensagem</label>
            <textarea 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '120px', fontFamily: 'Arial' }}
              placeholder="Descreva como podemos te ajudar..."
            />
          </div>

          <Button onClick={() => alert('Mensagem enviada! Entraremos em contato em até 24h.')}>
            Enviar Mensagem
          </Button>
        </div>

        {/* Lado Direito: Informações Corporativas */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          
          {/* Card de Telefone */}
          <div className="card" style={{ marginBottom: '20px', borderLeft: '5px solid #2563eb' }}>
            <h4 style={{ color: '#64748b', marginBottom: '10px' }}>Televendas & SAC</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>0800 777 1234</p>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Seg. a Sex. das 08h às 20h</p>
          </div>

          {/* Card de WhatsApp */}
          <div className="card" style={{ marginBottom: '20px', borderLeft: '5px solid #16a34a' }}>
            <h4 style={{ color: '#64748b', marginBottom: '10px' }}>WhatsApp Oficial</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#16a34a' }}>(11) 99999-0000</p>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Atendimento rápido via IA</p>
          </div>

          {/* Redes Sociais */}
          <div className="card" style={{ borderLeft: '5px solid #e11d48' }}>
            <h4 style={{ color: '#64748b', marginBottom: '15px' }}>Redes Sociais</h4>
            <div style={{ display: 'flex', gap: '15px', fontSize: '1.5rem' }}>
              <span style={{ cursor: 'pointer' }}>📸 @lojaav2_oficial</span>
            </div>
            <div style={{ marginTop: '10px', fontSize: '1.5rem' }}>
               <span style={{ cursor: 'pointer' }}>💼 linkedin.com/company/lojaav2</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}