import React from 'react';
import Swal from 'sweetalert2';
import { usecount} from '../../Hooks/useCount/useCount';

const ItemCount = ({ stock }) => {
  const { count, decrement, increment, reset } = usecount(1, 0, stock); // Uso el stock como mi máximo

  //Función que controla una alerta de superación del límite de Stock.
  const handleIncrement = () => {
    if (count < stock){
      increment()
    } else {
      Swal.fire({ //Implementación de SweetAlert2 Para más dinamismo
        icon: 'warning',
        title: 'Lo sentimos mucho. Alcanzaste el Stock máximo alcanzado!',
        text: `Solo tienes ${stock} productos disponibles en stock.`,
      })
    }
  }

  return (
  <>
    <div>
      <div className="d-flex justify-content-center p-2">
        <h5>Stock Disponible: {stock} </h5>
      </div>
      <div className="d-flex justify-content-center p-2">
        <button className='btn btn-dark m-2' onClick={decrement}>
          <i className="bi bi-dash-circle"></i>
        </button>
        <h5 className='d-flex justify-content-center align-items-center m-2'>{count}</h5>
        <button className='btn btn-dark m-2' onClick={handleIncrement}>
          <i className="bi bi-plus-circle"></i>
        </button>
        <button className='btn btn-dark m-2' onClick={reset}>
          Reset
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center m-2">
        <button className='btn btn-dark m-2'>
          <i className="bi bi-bag-plus-fill"> Añadir Al Carrito</i>
        </button>
      </div>
    </div>
  </>
  );
};

export default ItemCount;
