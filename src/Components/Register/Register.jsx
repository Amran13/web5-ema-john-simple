import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';


const Register = () => {
    const handleRegister = () => {

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-24">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 hover:bg-orange-600">Register</button>
                        </div>
                        <span className='mt-4'>Already have an account? <Link to="/login">LOGIN</Link> </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;