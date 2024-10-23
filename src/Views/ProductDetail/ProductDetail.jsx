import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase.js';
import ItemCount from '../../Components/ItemCount/ItemCount.jsx';
import { useCart } from '../../Context/CartContext/CartContext.jsx';

const ProductDetail = () => {
  const { key } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Uso el addToCart de mi contexto

  const getProductByKey = async (key) => {
    const productCollection = collection(db, 'ProductList');
    const q = query(productCollection, where('key', '==', Number(key)));
  
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const productDoc = querySnapshot.docs[0]; // Aquí obtenemos el documento
        const productData = productDoc.data();
        setProduct({ ...productData, id: productDoc.id }); // Guardamos el ID junto con los datos del producto
      } else {
        console.log('No se encontró el producto');
      }
    } catch (error) {
      console.log('Error al obtener el producto:', error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getProductByKey(key);
  }, [key]);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h2>Cargando producto...</h2>
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h2>Lo sentimos!</h2>
        <h2>No se encontró el producto</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5">
        <p className="text-start">
          <button className="btn btn-dark rounded-pill">
            <Link to={'/'} className="text-decoration-none text-white">
              <i className="bi bi-arrow-left-circle"> Volver Al Inicio </i>
            </Link>
          </button>
        </p>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <img src={product.image} className="img-fluid" alt={product.title} />
          </div>
          <div className="col">
            <h1>{product.title}</h1>
            <hr />
            <p className="text-danger fs-3">${product.price} ARS</p>
            <p>Descripción: {product.description}.</p>
            <p>Categoría/s: {product.category}, {product.type}.</p>
            <hr />
            <div>
              <ItemCount stock={product.stock} addToCart={addToCart} product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
