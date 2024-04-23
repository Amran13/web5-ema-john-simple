import React, { useEffect, useState } from 'react';
import Product from './Product';

const Order = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    } ,[])
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-4'>Order Page {products.length} </h2>

            <div className='grid grid-cols-3 gap-12'>
                {
                    products.map(item => <Product key={item.id} product={item}></Product>)
                }
            </div>
        </div>
    );
};

export default Order;