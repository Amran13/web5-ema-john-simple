import React, { useEffect, useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Product = ({ product }) => {
    const [cart, setCart] = useState([])
    const { _id, category, name, seller, price, img } = product;
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    const handleBuy = (_id) => {
        const res = cart.find(item => item._id == _id)
        console.log(res, _id)
        if (res) {
            Swal.fire({
                title: "Already Added",
                text: "This item has already added to the cart!",
                icon: "error"
            });
        } else {
            console.log('fetching')
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Added To Cart!",
                            text: "Your Prouducts has been added to Cart!",
                            icon: "success"
                        });
                        navigate('/cart')
                    }
                })
        }

    }
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src={img} alt='image' /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {`Seller : ${seller}`} </p>
                <p> {`Category : ${category}`} </p>
                <p> {`Price : $${price}`} </p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBuy(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;