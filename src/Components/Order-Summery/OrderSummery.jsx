import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const OrderSummery = ( {cart, handleDeleteAll, total, totalShippingCharge} ) => {
    // const [cart, setCart] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/cart')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCart(data)
    //         })
    // }, [])
    // console.log(cart, handleDeleteAll, total)

    return (
        <div className='bg-orange-200 flex flex-col justify-center items-center py-8'>
            <h2 className='text-2xl font-bold text-center my-4'>Order Summery</h2>
            <div className='space-y-3 text-xl '>
                <p> Selected Items : {cart?.length || 0} </p>
                <p> total price : ${total || 0} </p>
                <p> Shipping Charge : ${totalShippingCharge || 0} </p>
                <p>Tax : ${(total * 20) / 100 || 0} </p>
                <h3>Grand Total : ${total - ((total * 20) / 100) || 0} </h3>
                <div className='pt-12 space-y-4'>
                    <button onClick={handleDeleteAll} className='btn bg-red-500 hover:bg-red-600 block btn-wide border-none'>Clear Cart</button>
                    <button className='btn bg-orange-400 hover:bg-orange-500 block btn-wide border-none'>Proceed checkout</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummery;