import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const OrderSummery = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }, [])
    let total = 0
    if (cart.length > 0) {
        cart.map(item => {
            total = item.price + total
        })
    }
    let totalShippingCharge = 0
    if (cart.length > 0) {
        cart.map(item => {
            totalShippingCharge = item.shipping + totalShippingCharge
        })
    }
    const handleDeleteAll = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete all the items from cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/cart', {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setCart([])
                        }
                    })
            }
        });



    }
    return (
        <div className='bg-orange-200 flex flex-col justify-center items-center py-8'>
            <h2 className='text-2xl font-bold text-center my-4'>Order Summery</h2>
            <div className='space-y-3 text-xl '>
                <p> Selected Items : {cart.length} </p>
                <p> total price : ${total} </p>
                <p> Shipping Charge : ${totalShippingCharge} </p>
                <p>Tax : ${(total * 20) / 100} </p>
                <h3>Grand Total : ${total - ((total * 20) / 100)} </h3>
                <div className='pt-12 space-y-4'>
                    <button onClick={handleDeleteAll} className='btn bg-red-500 hover:bg-red-600 block btn-wide border-none'>Clear Cart</button>
                    <button className='btn bg-orange-400 hover:bg-orange-500 block btn-wide border-none'>Proceed checkout</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummery;