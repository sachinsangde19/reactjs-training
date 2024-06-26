import React from 'react';
import Product from './Product';

const ProductList = () => {
  return (
    <div className="container text-center product-wrapper">
        <div className="row">
            <div className="col">
                <Product />
            </div>
        </div>
    </div>
  )
}

export default ProductList;