import React from 'react';
import './CartView'
import { useCart } from '../../Context/CartContext/CartContext.jsx';
import AddOrders from '../../Components/AddOrders/AddOrders.jsx';
import FormData from '../../Components/FormData/FormData.jsx';
import { FormProvider } from '../../Context/FormContext/FormContext.jsx';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, getTotalItems, clearCart, removeFromCart } = useCart(); // Obtengo el carrito y total de items desde el contexto
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (<>
    <div className="container my-5">
      {cart.length === 0 ? (<>
        <div className="container my-5">
          <p className="text-start">
            <button className="btn btn-dark rounded-pill">
              <Link to={'/'} className="text-decoration-none text-white">
                <i className="bi bi-arrow-left-circle"> Volver Al Inicio </i>
              </Link>
            </button>
          </p>
        </div>
        <h2 className='d-flex justify-content-center align-items-center'>Tu carrito está vacío.</h2>
      </>) : (<>
        <div className="container my-5">
          <p className="text-start">
            <button className="btn btn-dark rounded-pill">
              <Link to={'/'} className="text-decoration-none text-white">
                <i className="bi bi-arrow-left-circle"> Volver Al Inicio </i>
              </Link>
            </button>
          </p>
        </div>

        <div>
          <h2 className='d-flex justify-content-center align-items-center'>Tu carrito de Compras</h2>
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-danger" onClick={clearCart}>
              <i className="bi bi-trash3"> Vaciar Carrito</i>
            </button>
          </div>
          <table className='table'>
            {cart.map((item) => (
              <tbody>
                <tr key={item.key}>
                  <td><img src={item.image} alt={item.title} width="95" /></td>
                  <td className='text-start align-middle'>{item.title} <br />
                    <span className='card-text text-star text-danger'>Precio Unitario: ${item.price} ARS</span> <br />
                    <span className='card-text text-center text-danger'>Cantidad: {item.quantity}</span>
                  </td>
                  <td className='text-end align-middle'><span className="badge bg-primary rounded-pill">${(item.price * item.quantity).toFixed(2)} ARS</span></td>
                  <td className='text-end align-middle'><button className='btn btn-danger btn-sm' onClick={() => removeFromCart(item.key)}><i className="bi bi-x-circle"></i></button></td>
                </tr>
              </tbody>
            ))}
            <tbody>
              <tr>
                <td className='text-start'><h5>Su valor TOTAL de compra es de:</h5></td>
                <td></td>
                <td></td>
                <td className='text-end text-danger'><h5 >$ {(total).toFixed(2)}</h5></td>
              </tr>
            </tbody>
          </table>
        </div></>)}
    </div>

    {cart.length === 0 ? ("") : (
      <FormProvider>
        <FormData />
        <AddOrders />
      </FormProvider>
    )}
  </>);
};

export default CartView;
