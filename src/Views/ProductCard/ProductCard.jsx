import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom' 

function ProductCard({ prod }) {
  return (
  <>
    <div className="col-3 card-container">
      <div className="card border-0">
        <Link to={`/item/${prod.key}`}>
          <img
            src={prod.image}
            className="card-img-top"
            alt={prod.title}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-text text-center">{prod.title}</h5>
          <p className="card-text text-center text-danger">
            ${prod.price} ARS
          </p>
          <p className="text-center">
            <button className="btn btn-dark rounded-pill">
              <Link to={`/item/${prod.key}`} className='text-decoration-none text-light'> Ver Más <i className="bi bi-info-circle"></i>
              </Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProductCard