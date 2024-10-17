import { Link } from 'react-router-dom'
import './CartWidget.css'
import React from 'react'

const CartWidget = () => {
    return (
        <>
            <div className="col d-flex align-items-center justify-content-end">
                <ul className="nav p-2 bg-light rounded-pill">
                    <li className="nav-item">
                        <a className="nav-link">
                            <Link className='text-decoration-none text-dark' to={'/cart'}>
                                <i className="bi bi-basket3"></i>
                                <span> (0)</span>
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CartWidget