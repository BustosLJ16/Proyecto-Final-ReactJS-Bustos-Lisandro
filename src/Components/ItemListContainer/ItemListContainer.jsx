import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../Firebase/Firebase.js';
import ProductCard from '../../Views/ProductCard/ProductCard.jsx';

export default function ItemListContainer() {
    const [myProds, setMyProds] = useState([]);
    const { category } = useParams(); // Obtengo la categoría de mi URL.

    useEffect(() => {
        const fetchProducts = async () => {
            console.log('Categoría seleccionada:', category);
            const products = await getProducts(category); // Obtiene productos según la categoría seleccionada.
            console.log('Productos Filtrados:', products);
            setMyProds(products); // Pasa el dato de los productos y los setea.
        };

        fetchProducts();
    }, [category]); // Se ejecuta nuevamente si detecta el cambio de la Categoría.

    return (
        <div className='container my-5'>
            <div className="row">
                {myProds.length > 0 ? (
                    myProds.map(prod => <ProductCard key={prod.key} prod={prod} />) // Envio mis datos para hacer una Card.
                ) : (
                    category && <p>No hay Productos en esta categoría</p> // Muestra solamente si es que hay una categoría seleccionada.
                )}
            </div>
        </div>
    );
}
