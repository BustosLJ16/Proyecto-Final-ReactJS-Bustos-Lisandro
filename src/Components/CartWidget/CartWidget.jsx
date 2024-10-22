import { Link } from 'react-router-dom';
import './CartWidget.css';
import React from 'react';
import { useCart } from '../../Context/CartContext/CartContext.jsx';

const CartWidget = () => {
    const { getTotalItems } = useCart(); // Obtengo el total de productos en el carrito

    return (
        <>
            <div className="col d-flex align-items-center justify-content-end">
                <ul className="nav p-2 bg-light rounded-pill">
                    <li className="nav-item">
                        <a className="nav-link">
                            <Link className='text-decoration-none text-dark' to={'/cart'}>
                                <i className="bi bi-basket3"></i>
                                <span> ({getTotalItems()})</span>
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default CartWidget;
