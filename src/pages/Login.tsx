import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if(email) {
      navigate('/dashboard'); 
    } else {
      alert('Por favor, informe um e-mail válido.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Fazer login</h2>
      <p style={{ marginBottom: '20px', color: '#666' }}>Acesse sua conta para ver seus pedidos.</p>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '0.9rem' }}>E-mail ou CPF</label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '0.9rem' }}>Senha</label>
        <Input type="password" />
      </div>

      <Button onClick={handleLogin} style={{ width: '100%', padding: '12px', fontSize: '1rem', background: '#eab308', color: '#000' }}>
        Continuar
      </Button>

      <p style={{ marginTop: '20px', fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
        Ao continuar, você concorda com as Condições de Uso e a Notificação de Privacidade da Loja AV2.
      </p>
      
      <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <span style={{ color: '#2563eb', cursor: 'pointer', fontSize: '0.9rem' }}>Novo na Loja AV2? Crie sua conta.</span>
      </div>
    </div>
  );
}