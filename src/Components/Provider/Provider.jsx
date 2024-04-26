import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';


export const MyContext = createContext()

const Provider = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [cart])


    const handleBuy = (_id, product) => {
        const location = useLocation()
        const navigate = useNavigate()

        return () => {
            if (!user) {
                return (
                    navigate('/login')
                )
            }
            console.log('clicked')
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

    }

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
    const sharedInfo = {
        cart,
        handleBuy,
        handleDelete,
        handleDeleteAll,
        total,
        totalShippingCharge,
    }
    return (
        <MyContext.Provider value={sharedInfo}>
            {children}
        </MyContext.Provider>
    );
};

export default Provider;