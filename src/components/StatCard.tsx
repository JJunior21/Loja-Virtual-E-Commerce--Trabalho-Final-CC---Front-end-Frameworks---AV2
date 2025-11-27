export function StatCard({ title, value }: { title: string, value: string }) {
  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: 1 }}>
      <h4>{title}</h4>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>{value}</p>
    </div>
  );
}