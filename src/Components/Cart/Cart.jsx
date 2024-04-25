import React, { useContext} from 'react';
import OrderSummery from '../Order-Summery/OrderSummery';
import { MyContext } from '../Provider/Provider';

const Cart = () => {
    const { cart, handleDelete, handleDeleteAll, total, totalShippingCharge} = useContext(MyContext)
    
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-12'>Cart Page {cart.length} </h2>
            <div className='grid grid-cols-2 gap-8'>
                <div className='col-span-1'>
                    { 
                    cart.length > 0 ? 
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
                        </div>) : <div className='text-3xl font-medium text-center'> No Products has been added. </div>
                    }
                </div>
                <div className='col-span-1'>
                    <OrderSummery cart={cart} handleDeleteAll={handleDeleteAll} total={total} totalShippingCharge={totalShippingCharge} ></OrderSummery>
                </div>
            </div>
        </div>
    );
};

export default Cart;