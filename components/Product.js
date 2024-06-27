import React from 'react';

const Product = (props) => {
    // console.log(props);
    const { title, thumbnail, description, category } = props.product;
    return (
        <div className="col">
            <div className="card">
                <img src={ thumbnail } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <span className="badge text-bg-success custom-badge">{ category }</span><br />
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default Product;