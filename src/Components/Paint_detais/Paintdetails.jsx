import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../Hooks/UseData';

const Paintdetails = () => {
    const { paints } = useData();
    const { id } = useParams()
    const [single, setSingle] = useState({});
    useEffect(() => {
        
        const foundPaint = paints.find(item => item._id === id);
        if (foundPaint) {
            setSingle(foundPaint);
        }
    }, [paints, id]);
    console.log(single)
    return (
        <div className='max-w-[1440px] mx-auto mt-5'>
            <img src="https://i.ibb.co/0KbTLP4/8431878.jpg" className='md:w-2/3  md:h-[600px] h-[300px]' alt="" />
           <div className='text-black font-bold'>
           <p className='text-2xl mt-3'>{single.item_name}</p>
           <p className='mt-2 lg:w-3/4'>{single.description}</p>
           <p className='mt-2'>Price: {single.price}</p>
           <p>Processing_time: {single.processing_time}</p>
           <p>Stock status: {single.StockStatus}</p>
           <p>Rating: {single.rating}</p>
           <p>Category: {single.subCategory}</p>
           <p>Customization: {single.customization}</p>
           <p>Processing Time: {single.processing_time}</p>
           </div>
        </div>
    );
};

export default Paintdetails;