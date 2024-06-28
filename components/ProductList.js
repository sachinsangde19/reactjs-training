import React, { useEffect } from 'react';
import Product from './Product';
import { useState } from 'react';

const ProductList = () => {

const [ products, setProducts ] = useState([]);
const [ categoryList, setCategoryList ] = useState([]);
const [ filteredProducts, setFilteredProducts ] = useState([]);

useEffect( () => {
    fetchProducts();
    fetchCategories();
},[] )

useEffect( () => {
  console.log('Use Effect called !');
}, [ products ]);

const fetchCategories = async() => {
  const categories = await fetch("https://dummyjson.com/products/category-list");
  const categoriesJson = await categories.json();
  setCategoryList(categoriesJson);
  console.log(categoryList);
}

const fetchProducts = async() => {
    const products = await fetch("https://dummyjson.com/products");
    const productsJson = await products.json();
    setProducts(productsJson.products);
  }

const handleClick = (e) => {
  const filteredProducts = products.filter( (product) => product.category === e.target.textContent );
  setFilteredProducts(filteredProducts);
}

  return (
   <>
    <div className="container text-center product-wrapper">
      <div className="row">
        { categoryList.map( (category, index) => <button onClick={ (e) => handleClick(e) } key={ index } type="button" className="btn btn-primary category">{ category }</button> ) }
      </div>
    </div>
    <div className="container text-center product-wrapper">
      <div className="row">
        { filteredProducts.length > 0 ? filteredProducts.map( (product) => <Product key={product.id} product={ product } /> ) :
         products.map( (product) => <Product key={product.id} product={ product } /> ) }
      </div>
    </div>
    </>
  )
}

export default ProductList;