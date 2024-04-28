import React from 'react';
import { Link } from 'react-router-dom';

const SinglePaint = ({paint}) => {
    return (
        <div className=''>
            <div>
            
            <div className='max-w-[400px] mx-auto mt-10'>
            <img src="https://i.ibb.co/0KbTLP4/8431878.jpg" alt="" />
            <h2 className='text-xl text-center font-bold'>{paint.item_name}</h2>
            <div className='flex gap-3 mb-4 justify-between'>
            <p>price: {paint.price}</p>
            <p>rating: {paint.rating}</p>
            
            </div>
            <Link to={`/Paintdetails/${paint._id}`}><button  className='btn w-full bg-blue-500 text-white'>View details</button></Link>
            </div>
            </div>
        </div>
    );
};

export default SinglePaint;