import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Myitems = () => {
    const {user} = UseAuth()
    const [Allpaints,setAllpaints] =useState([])
    const [paints,setpaints] =useState([])
    console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:3000/paints/${user?.email}`)
        .then((res)=>res.json())
        .then(data=>{
             setpaints(data)
             setAllpaints(data)
        })
        
    },[user])
    const handleyes = ()=>{
        const w = Allpaints.filter(use=>use.customization=== 'Yes')
        setpaints(w)
    }
    const handleno = ()=>{
        const w =Allpaints.filter(use=>use.customization=== 'No')
        setpaints(w)
    }
    const handleall = ()=>{
        setpaints(Allpaints)
    }
   const handle_delete = id =>{
    console.log(id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
        fetch(`http://localhost:3000/paints/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your painting has been deleted.",
                    icon: "success"
                  });
                  setpaints(paints.filter(paint=>paint._id !== id))
                  setAllpaints(Allpaints.filter(paint=>paint._id !== id))
            }
        })
        }
      });
   }
       return (
        <div className='max-w-[1440px] mx-auto'>
            <details className="dropdown mx-auto">
              <summary className="m-1 btn">Customization</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                 <li onClick={handleno}><a>No</a></li>
                <li onClick={handleyes}><a>Yes</a></li>
                <li onClick={handleall}><a>all</a></li>
                 </ul>
              </details>
        <div className='grid grid-cols-3   mt-10'>
            {
                paints.map(paint=><div key={paint._id} className="card mx-auto max-w-96 bg-base-100 shadow-xl gap-5 mt-5">
                <figure><img src="https://i.ibb.co/0KbTLP4/8431878.jpg"  alt="Shoes" /></figure>
                <div className="card-body flex">
                <h2 className="card-title">{paint.item_name}</h2>
                <div >
                  <p>price: {paint.price}</p>
                  <p>rating: {paint.rating}</p>
                  <p>Customization: {paint.customization}</p>
                  <p>Stock Status: {paint.StockStatus}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/update/${paint._id}`}><button className="btn btn-primary ">Update</button></Link>
                    <button onClick={()=>handle_delete(paint._id)} className="btn btn-primary ">Delete</button>
                  </div>
                </div>
              </div>)
            }
        </div>
        </div>
    );
};

export default Myitems;