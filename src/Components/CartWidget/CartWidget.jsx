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
                            <Link className='nav-link text-decoration-none text-dark' to={'/cart'}>
                                <i className="bi bi-basket3"></i>
                                <span> ({getTotalItems()})</span>
                            </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default CartWidget;
