import React from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../Hooks/UseAuth';

const Fakedata = () => {
    const {user} = UseAuth()
  const onSubmit = e =>{
    e.preventDefault()
    const form = e.target
    const image = form.photo.value
    const subCategory = form.subCategory.value
    const types = form.types.value
    const Categories = {image,subCategory,types}
    console.log(Categories)

    fetch('https://assignment-10-server-nine-dun.vercel.app/category',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(Categories)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: "Success!",
          text: "Data added Successfully!",
          icon: "success"
        });
        form.reset()
      }
    })
}
    return (
        <div className='mt-5'>
            <form onSubmit={onSubmit}>
                <label >category</label>
                <input name='subCategory' className='border border-red-500' type="text" />
                <input name ='photo' className='border border-red-500' type="text" />
                <input name ='types' className='border border-red-500' type="text" />
                <input type='submit' />
            </form>
        </div>
    );
};

export default Fakedata;