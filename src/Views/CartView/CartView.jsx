import React from 'react';
import { useCart } from '../../Context/CartContext/CartContext.jsx';
import AddOrders from '../../Components/AddOrders/AddOrders.jsx';
import FormData from '../../Components/FormData/FormData.jsx';
import { FormProvider } from '../../Context/FormContext/FormContext.jsx';

const CartView = () => {
  const { cart, getTotalItems } = useCart(); // Obtengo el carrito y total de items desde el contexto
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (<>
    <div className="container my-5">
      {cart.length === 0 ? (
        <h2 className='d-flex justify-content-center align-items-center'>Tu carrito está vacío.</h2>
      ) : (<div>
        <h2 className='d-flex justify-content-center align-items-center'>Tu carrito de Compras</h2>
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.key} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src={item.image} alt={item.title} width="175" />
              </div>
              <div>
                <h5 className='pb-2'>{item.title}</h5>
                <p>Precio Unitario: ${item.price} ARS</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <span className="badge bg-primary rounded-pill">${(item.price * item.quantity).toFixed(2)} ARS</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <h5>Su Precio TOTAL es de: </h5>
            <h5>$ {total} ARS</h5>
          </li>
        </ul>
      </div>)}
    </div>

    <FormProvider>
      <FormData />
      <AddOrders />
    </FormProvider>
  </>);
};

export default CartView;
