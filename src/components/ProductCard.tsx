import { Button } from './Button';
import { type Product } from '../context/CartContext';

interface Props {
  product: Product;
  onAdd: (p: Product) => void;
}

export function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="card">
      <div className="imagem-produto">{product.image}</div>
      <h3>{product.name}</h3>
      <p className="preco">R$ {product.price.toFixed(2)}</p>
      <Button onClick={() => onAdd(product)} style={{ width: '100%' }}>
        Comprar
      </Button>
    </div>
  );
}