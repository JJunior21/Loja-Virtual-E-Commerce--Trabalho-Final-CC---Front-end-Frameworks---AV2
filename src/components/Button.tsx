import { ButtonHTMLAttributes } from 'react';

// Aceita todas as propriedades de um botão normal HTML
export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button 
      {...props} 
      style={{
        backgroundColor: '#2563eb', color: 'white', padding: '10px 20px', 
        border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold',
        ...props.style // Permite sobrescrever estilo se precisar
      }}
    />
  );
}