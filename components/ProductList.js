import React, { useEffect } from 'react';
import Product from './Product';
import { useState } from 'react';

const ProductList = () => {

//     const productData = [
//         {
//             id:1,
//             name: 'iPhone',
//             description: "A description for iphone.",
//             category: 'mobile phones',
//         },
//         {
//             id:2,
//             name: 'Samsung',
//             description: "A description for Samsung.",
//             category: 'mobile phones',
//         },
//         {
//             id:3,
//             name: 'iPad',
//             description: "A description for ipad.",
//             category: 'tablets',
//         },
// ]

const [ products, setProducts ] = useState([]);
console.log(products)

useEffect( () => {
    // console.log('Use effect called!');
    fetchProducts();
},[] )


const fetchProducts = async() => {
    const products = await fetch("https://dummyjson.com/products");
    const productsJson = await products.json();
    setProducts(productsJson.products);
    // console.log(productsJson);
}

// console.log("Component rendered !");

  return (
    <div className="container text-center product-wrapper">
        <div className="row">
            { products.map( (product) => <Product key={product.id} product={ product } /> ) }
        </div>
    </div>
  )
}

export default ProductList;