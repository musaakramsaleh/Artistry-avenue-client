import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

const Addcard = () => {
  const {user} = UseAuth()
  const onSubmit = e =>{
    e.preventDefault()
    const form = e.target
    const image = form.image.value
    const item_name = form.itemName.value
    const subCategory = form.subcategory.value
    const description = form.short_description.value
    const price = form.price.value
    const rating = form.rating.value
    const customization = form.Customization.value
    const processing_time = form.processing_time.value
    const StockStatus = form.StockStatus.value
    const email = user.email
    const username = user.displayName
    const product = {image,item_name,subCategory,description,price,rating,customization,processing_time,StockStatus,email,username}
    console.log(product)

    fetch('http://localhost:3000/addproduct',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
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
        <div>
      <div className="bg-blue-200 p-24 max-w-screen-2xl mx-auto">
        <h2 className="text-center text-4xl font-bold">Add a Coffee</h2>
        <form onSubmit={onSubmit}>
          <div className="flex gap-5">
            <div className="w-1/2">
              <label>Image:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='image'
              />
            </div>
            <div className="w-1/2">
              <label>Item Name:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='itemName'
              />
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="w-1/2">
              <label>Sub-category:</label><br />
              <div className="grid grid-cols-2 gap-3 items-center justify-center">
                <label className='text-center'>
                  <input type="radio" name="subcategory" value="Landscape Painting:" /> Landscape Painting
                </label>
                <label className='text-center'>
                  <input type="radio" name="subcategory" value="Portrait Drawing" /> Portrait Drawing
                </label>
                <label className='text-center'>
                  <input type="radio" name="subcategory" value="Watercolour Painting" /> Watercolour Painting
                </label>
                <label className='text-center'>
                  <input type="radio" name="subcategory" value="Oil Painting" /> Oil Painting
                </label>
                <label className='text-center'>
                  <input type="radio" name="subcategory" value="Charcoal Sketching" /> Charcoal Sketching
                </label>
                <label className='text-center'>
                  <input type="radio" name="subcategory" value="Cartoon Drawing" /> Cartoon Drawing
                </label>
              </div>
            </div>

            <div className="w-1/2">
              <label>Short Description</label><br />
              <textarea name="short_description" id="" cols="50" rows="10"></textarea>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/2">
              <label>Price:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='price'
              />
            </div>
            <div className="w-1/2">
              <label>Rating:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='rating'
              />
            </div>
          </div>
          <div className="flex justify-between">
          <div>
          <label>Customization:</label><br />
          <label className='text-center mr-3'>
                  <input className='' type="radio" name="Customization" value="Yes" />Yes
                </label>
                <label className='text-center'>
                  <input type="radio" name="Customization" value="No" />No
                </label>
          </div>
            <div className="w-1/2">
              <label>Processing Time:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='processing_time'
              />
            </div>
          </div>
          <div className="flex justify-between">
          <div>
          <label>Stock Status:</label><br />
          <label className='text-center mr-3'>
                  <input className='' type="radio" name="StockStatus" value="In Stock" />In Stock
                </label>
                <label className='text-center'>
                  <input type="radio" name="StockStatus" value="Made to Order" />Made to Order
                </label>
          </div>
          </div>
          <div className="w-full mt-5">
            <input
              type="submit"
              value="ADD"
              className="cursor-pointer bg-gradient-to-r text-white font-bold from-[rgba(225,139,70,255)] to-[rgba(242,184,115,255)] input w-full"
            />
          </div>
        </form>
      </div>
    </div>
    );
};

export default Addcard;