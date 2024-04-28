import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Allart = () => {
    const allpaints = useLoaderData()
    const [paints,setpaints] = useState(allpaints)
    console.log(paints)
    return (
        <div className='mx-auto max-w-[1440px]'>
            <h2 className='text-center text-2xl font-bold my-5'>All paintings list</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-center'>
        <th>Item Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Ratings</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
      {
        paints.map(paint=><tr key={paint._id} className='text-center'>
            <th>{paint.item_name}</th>
            <td>{paint.price}</td>
            <td>{paint.StockStatus}</td>
            <td>{paint.rating}</td>
            <td><Link to={`/Paintdetails/${paint._id}`}><button  className='btn w-full bg-blue-500 text-white'>View details</button></Link></td>
          </tr>
        )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Allart;