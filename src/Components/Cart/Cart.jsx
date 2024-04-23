import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/cart')
        .then(res => res.json())
        .then(data => setCart(data))
    } ,[])

    const handleDelete = (_id) => {
        console.log(_id)
    }
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Cart Page {cart.length} </h2>
            <div>
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
        </div>
    );
};

export default Cart;