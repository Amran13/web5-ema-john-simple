import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Provider/Provider';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {user} = useContext(AuthContext)
    const {handleBuy} = useContext(MyContext)
    const { _id, category, name, seller, price, img } = product;

        
    return (
        <div className={`card ${user ? 'w-72' : 'w-96'} bg-base-100 shadow-xl`}>
            <figure><img src={img} alt='image' /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {`Seller : ${seller}`} </p>
                <p> {`Category : ${category}`} </p>
                <p> {`Price : $${price}`} </p>
                <div className="card-actions justify-end">
                    <button onClick={handleBuy(_id, product)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;