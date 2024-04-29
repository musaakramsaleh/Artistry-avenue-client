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

    fetch('https://assignment-10-server-nine-dun.vercel.app/addproduct',{
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
      <div className="bg-blue-200 p-24 max-w-screen-2xl mx-auto mt-5">
        <h2 className="text-center text-4xl font-bold mb-2">Add a Painting</h2>
        <form onSubmit={onSubmit}>
          <div className="md:flex gap-5">
            <div className="md:w-1/2 w-full">
              <label>Image:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='image'
              />
            </div>
            <div className="md:w-1/2 w-full">
              <label>Item Name:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='itemName'
              />
            </div>
          </div>
          <div className="md:flex gap-5 mt-5">
            <div className="w-1/2">
              <label>Sub-category:</label><br />
            
              <div className="form-control">
              <label className="label cursor-pointer">
              <span className="label-text">Landscape Painting</span> 
              <input type="radio" name="subcategory" value='Landscape Painting' className="radio checked:bg-blue-500" checked />
               </label>
             </div>
             <div className="form-control">
             <label className="label cursor-pointer">
             <span className="label-text">Portrait Drawing</span> 
             <input type="radio" name="subcategory" value='Portrait Drawing' className="radio checked:bg-blue-500" checked />
              </label>
              </div>
             <div className="form-control">
             <label className="label cursor-pointer">
             <span className="label-text">Watercolour Painting</span> 
             <input type="radio" name="subcategory" value='Watercolour Painting' className="radio checked:bg-blue-500" checked />
              </label>
              </div>
             <div className="form-control">
             <label className="label cursor-pointer">
             <span className="label-text">Oil Painting</span> 
             <input type="radio" name="subcategory" value='Oil Painting' className="radio checked:bg-blue-500" checked />
              </label>
              </div>
             <div className="form-control">
             <label className="label cursor-pointer">
             <span className="label-text">Charcoal Sketching</span> 
             <input type="radio" name="subcategory" value='Charcoal Sketching' className="radio checked:bg-blue-500" checked />
              </label>
              </div>
             <div className="form-control">
             <label className="label cursor-pointer">
             <span className="label-text">Cartoon Drawing</span> 
             <input type="radio" name="subcategory" value='Cartoon Drawing' className="radio checked:bg-blue-500" checked />
              </label>
              </div>
             
             
             
            </div>

            <div className="">
              <label>Short Description</label><br />
              <textarea name="short_description"  placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="md:w-1/2 w-full">
              <label>Price:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='price'
              />
            </div>
            <div className="md:w-1/2 w-full">
              <label>Rating:</label><br />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='rating'
              />
            </div>
          </div>
          <div className="md:flex justify-between">
          <div>
          <label>Customization:</label><br />
          <label className='text-center mr-3'>
                  <input className='' type="radio" name="Customization" value="Yes" />Yes
                </label>
                <label className='text-center'>
                  <input type="radio" name="Customization" value="No" />No
                </label>
          </div>
            <div className="md:w-1/2 w-full">
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