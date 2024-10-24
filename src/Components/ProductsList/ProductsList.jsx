import { useEffect, useState } from 'react';
import './ProductList.css'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../Firebase/Firebase.js';
import ProductCard from '../../Views/ProductCard/ProductCard.jsx';

export default function ProductList() {
  const [myProds, setMyProds] = useState([]);
  const { category } = useParams(); // Obtiene la categoría desde la url que se use según mi NavBar.

  useEffect(() => {
    getProducts(category).then(products => setMyProds(products));
  }, [category]); // Vuelvo a ejecutar el filtrado si mi categoría cambia.

  return (
    <div className='container my-5'>
      <div className="row">
        {myProds.size !== 0 ? (
          myProds.map(prod => <ProductCard key={prod.key} prod={prod} />) // Envio mis datos para hacer una Card.
        ) : (
          <p>No hay Productos Para Mostrarte Ahora</p>
        )}
      </div>
    </div>
  );
}
