import React from 'react'; 
import Swal from 'sweetalert2';
import { usecount } from '../../Hooks/useCount/useCount';
import { updateProducts } from '../../Firebase/Firebase';

const ItemCount = ({ stock, addToCart, product }) => {
  const { count, decrement, increment, reset } = usecount(1, 0, stock);

  const handleIncrement = () => {
    if (count < stock) {
      increment();
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Lo sentimos mucho. Alcanzaste el Stock máximo alcanzado!',
        text: `Solo tienes ${stock} productos disponibles en stock.`,
      });
    }
  };

  const stockValueIndicator = () => {
    return stock - count;
  };

  const newStock = stockValueIndicator(); // Variable que me devuelte el Number para determinar el nuevo valor de Stock

  const handleAddToCart = () => {
    addToCart(product, count);
    updateProducts(product.id, {stock:newStock}) //Actualizo mi Product
    Swal.fire({
      icon: 'success',
      title: 'Felicitaciones!',
      text: `Ya agregaste ${count} unidades de ${product.title} al Carrito`,
    });
    reset(); // Reseteo el contador del carrito una vez agregado el articulo
  };

  return (
    <div>
      <div className="d-flex justify-content-center p-2">
        <h5>Stock Disponible: {stockValueIndicator()} </h5>
      </div>
      <div className="d-flex justify-content-center p-2">
        <button className='btn btn-dark m-2 px-3' onClick={decrement}>
          <i className="bi bi-dash-circle"></i>
        </button>
        <h5 className='d-flex justify-content-center align-items-center m-2 px-1'>{count}</h5>
        <button className='btn btn-dark m-2 px-3' onClick={handleIncrement}>
          <i className="bi bi-plus-circle"></i>
        </button>
        <button className='btn btn-dark m-2 px-3' onClick={reset}>
          Reset
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center m-2">
        {count > 0 ? (
          <button className='btn btn-dark m-2 px-5' onClick={handleAddToCart}>
            <i className="bi bi-bag-plus-fill"> Añadir Al Carrito</i>
        </button>
      ):('')}
      </div>
    </div>
  );
};

export default ItemCount;
