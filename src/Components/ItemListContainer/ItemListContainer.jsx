import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../Firebase/Firebase.js';
import ProductCard from '../../Views/ProductCard/ProductCard.jsx';

export default function ItemListContainer() {
    const [myProds, setMyProds] = useState([]);
    const { category } = useParams(); // Obtengo la categoría de mi URL.

    useEffect(() => {
        console.log('Categoría seleccionada:', category); // Verifico si mi categoría esta siendo captada.
        getProducts(category).then(products => {
            console.log('Productos Filtrados:', products); // Muestro los Productos Obtenidos.
            setMyProds(products);
        });
    }, [category]); // Se ejecuta nuevamente si detecta el cambio de Categoría.

    return (
        <div className='container my-5'>
            <div className="row">
                {myProds.length > 0 ? (
                    myProds.map(prod => <ProductCard key={prod.id} prod={prod} />)
                ) : (
                    <p>No hay Productos en esta categoría</p>
                )}
            </div>
        </div>
    );
}
