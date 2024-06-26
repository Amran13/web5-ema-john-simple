import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {
    const {logOut, user} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(res => {
            Swal.fire({
                title: "Logged Out",
                text: "This item has already added to the cart!",
                icon: "success"
            });
        })
        .catch(err => {
            console.error(err)
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/">Home</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to="/">Home</Link>
                    <Link to="/order">Order</Link>
                        <Link to="/cart">Cart</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div> {user.email}<button onClick={handleLogOut} className='btn'>LogOut</button> </div> : <Link to="/login" className='btn'>LogIn</Link>
                }
                
            </div>
        </div>
    );
};

export default Header;
