import { InputHTMLAttributes } from 'react';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      {...props}
      style={{
        padding: '10px', borderRadius: '5px', border: '1px solid #ccc',
        width: '100%', marginBottom: '10px'
      }}
    />
  );
}