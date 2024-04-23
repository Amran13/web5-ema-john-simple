import React from 'react';
import img from '../../assets/images/Group 12.jpg'

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col justify-center items-center lg:flex-row-reverse">
                <div className='w-1/2 mx-auto'>
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 mx-auto'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;