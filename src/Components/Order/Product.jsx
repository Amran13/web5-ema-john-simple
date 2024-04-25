import React, { useContext, useEffect, useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MyContext } from '../Provider/Provider';

const Product = ({ product }) => {
    const {handleBuy, handleTest} = useContext(MyContext)
    const { _id, category, name, seller, price, img } = product;


    
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
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