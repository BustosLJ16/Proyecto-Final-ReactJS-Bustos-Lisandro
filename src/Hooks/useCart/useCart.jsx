import { useCart } from '../../Context/CartContext/CartContext.jsx';

const CartCount = () => {
  const { getTotalItems } = useCart();
  
  return (
    <div>
      <h2>Productos en el carrito: {getTotalItems()}</h2>
    </div>
  );
};
