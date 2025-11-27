export function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '15px', background: '#dcfce7', color: '#166534', borderRadius: '5px', marginBottom: '20px' }}>
      {children}
    </div>
  );
}