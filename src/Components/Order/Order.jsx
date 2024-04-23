import React, { useEffect, useState } from 'react';
import Product from './Product';
import OrderSummery from '../Order-Summery/OrderSummery';

const Order = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-4'>Order Page {products.length} </h2>
            <div className='grid grid-cols-12'>
                <div className='grid grid-cols-3 col-span-9 gap-6'>
                    {
                        products.map(item => <Product key={item.productId} product={item}></Product>)
                    }
                </div>
                <div className='col-span-3'>
                    <OrderSummery></OrderSummery>
                </div>

            </div>
        </div>
    );
};

export default Order;