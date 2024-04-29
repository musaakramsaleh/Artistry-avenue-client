import React from 'react';
import { Link } from 'react-router-dom';

const CategorySingle = ({paint}) => {
    return (
        <div>
            <div className=''>
            <div className='font-bold'>
            <div className='max-w-[400px] mx-auto mt-10'>
            <img src={paint.image} className='w-full h-[300px]' alt="" />
            <h2 className='text-xl text-center font-bold'>{paint.item_name}</h2>
            <p>Sub-Category: {paint.subCategory}</p>
            <p>{paint.description}</p>
            <div className='flex justify-between mt-3'>
            <p>Price: {paint.price}</p>
            <p>Rating: {paint.rating}</p>
            </div>
            <p>Processing Time: {paint.processing_time}</p>
            <Link to={`/Paintdetails/${paint._id}`}><button  className='btn w-full bg-blue-500 text-white'>View details</button></Link>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CategorySingle;