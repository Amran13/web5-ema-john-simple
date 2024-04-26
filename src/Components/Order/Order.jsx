import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import OrderSummery from '../Order-Summery/OrderSummery';
import { MyContext } from '../Provider/Provider';
import { AuthContext } from '../Provider/AuthProvider';

const Order = () => {
    const { cart, handleDeleteAll, total, totalShippingCharge } = useContext(MyContext)
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
    }

    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-4'>Order Page {products.length} </h2>
            <div className='grid grid-cols-12'>
                {/* <div className='grid grid-cols-3 col-span-9 gap-6'> */}
                <div className={`${user ? `grid-cols-3 col-span-9` : `grid-cols-3 col-span-12`} grid gap-6 `}>
                    {
                        isClicked ? products.map(item => <Product key={item._id} product={item}></Product>) :
                            products.slice(0, 24).map(item => <Product key={item._id} product={item}></Product>)
                    }
                </div>
                {
                    user && <div className='col-span-3'>
                        <OrderSummery cart={cart} handleDeleteAll={handleDeleteAll} total={total} totalShippingCharge={totalShippingCharge}></OrderSummery>
                    </div>
                }
            </div>
                {
                    isClicked ||
                    <div className='text-center my-6'><button onClick={() => setIsClicked(!isClicked)} className='btn btn-primary btn-wide'>See More</button></div>
                }
        </div>
    );
};

export default Order;