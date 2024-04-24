import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import OrderSummery from '../Order-Summery/OrderSummery';

const Cart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/cart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Products has deleted",
                        icon: "success"
                    });
                    const remaining = cart.filter(item => item._id !== _id)
                    setCart(remaining)
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Cart Page {cart.length} </h2>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                    {
                        cart.map(item => <div key={item._id} className='flex justify-between items-center p-6 gap-x-12 my-2 border-2' >
                            <div className='w-24 h-24 flex justify-center'>
                                <img src={item.img} alt="" />
                            </div>
                            <div>
                                <h3> {item.name} </h3>
                                <p> {item.categoy} </p>
                                <p> {item.price} </p>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(item._id)} className='btn'>X</button>
                            </div>
                        </div>)
                    }
                </div>
                <div className='col-span-1'>
                    <OrderSummery></OrderSummery>
                </div>
            </div>
        </div>
    );
};

export default Cart;