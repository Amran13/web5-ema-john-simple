import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(res => {
            if(res.user){
                Swal.fire({
                    title: "Logged In",
                    text: "This item has already added to the cart!",
                    icon: "success"
                });
                navigate(`${location?.state ? location.state : '/order'}`)
            }
        })
        .catch(err => {
            Swal.fire({
                title: "Oops!",
                text: err,
                icon: "error"
            });
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-24">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 hover:bg-orange-600">Login</button>
                        </div>
                        <span className='mt-4'>New to Car Doctor? <Link to="/register">REGISTER</Link> </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;