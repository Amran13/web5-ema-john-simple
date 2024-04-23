import React from 'react';

const Product = ({ product }) => {
    const { category, name, seller, price, img } = product;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt='image' /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {`Seller : ${seller}`} </p>
                <p> {`Category : ${category}`} </p>
                <p> {`Price : $${price}`} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;