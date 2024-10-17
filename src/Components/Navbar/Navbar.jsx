import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav id="navbar" className="container my-1">
                <div className="row bg-secondary-subtle p-3 rounded">
                    <div className="col">
                        <Link to={'/'}>
                            <img src="https://imagenes.compragamer.com/assets/logos/logo-fix.png" className='d-flex justify-content-start' alt="Logo" width="252" />
                        </Link>
                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <ul className="nav p-2 bg-light rounded-pill">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link className='text-decoration-none text-dark' to={'/category/componentes'}>Componentes</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link className='text-decoration-none text-dark' to={'/category/pantallas'}>Pantallas</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link className='text-decoration-none text-dark' to={'/category/perifericos'}>Periféricos</Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export default Navbar