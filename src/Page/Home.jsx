import React, { useEffect, useState } from 'react';
import Slider from '../Components/Slider/Slider';
import { SiOpenai, SiPytorch, SiTensorflow } from 'react-icons/si';
import { RiBardFill } from 'react-icons/ri';
import { Slide } from 'react-awesome-reveal';

const Home = () => {
  
  const [theme, setTheme] = useState(localStorage.getItem('theme')|| 'light'); 
  const [review,setReview] = useState([])
 
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'); 
    if (savedTheme) {
      setTheme(savedTheme); 
    }
  }, []); 
  
  useEffect(() => {
    localStorage.setItem('theme', theme); 
  }, [theme]); 
  
  useEffect(()=>{
    fetch('customer.json')
    .then(res=>res.json())
    .then(data=>{
        setReview(data)
        console.log
    })
  },[])
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); 
  };
  
 
  const buttonBgColor = theme === 'light' ? 'bg-red-400' : 'bg-blue-400';
  
  return (
    <div  data-theme={theme}>
      <div className='max-w-[1440px] mx-auto'>
        <button 
          onClick={toggleTheme} 
          className={`p-4 text-white font-bold ${buttonBgColor}`}
        >
          {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </button>
        
        <Slider />
        
        <div className='mt-16'>
          <div className='max-w-[300px] mx-auto'>
            <h2 className='text-center text-4xl shadow-lg p-2 bg-gradient-to-r from-[rgba(225,139,70,255)] to-[rgba(242,184,115,255)]'>
              Our Clients
            </h2>
          </div>
          <p className='mt-3 text-center max-w-[800px] mx-auto'> This section not only demonstrates our credibility and expertise but also serves as a testament to the strong relationships we build with leading innovators. It's a brief yet impactful display of the names that believe in our work and the joint ventures that drive progress in technology.</p>
          
         <Slide>
         <div className='text-[220px] flex md:flex-row flex-col justify-between items-center mt-20'>
            <span>
              <SiOpenai />
              <p className='text-4xl text-center'>OpenAI</p>
            </span>
            <span>
              <RiBardFill />
              <p className='text-4xl text-center'>Bard</p>
            </span>
            <span>
              <SiPytorch />
              <p className='text-4xl text-center'>PyTorch</p>
            </span>
            <span>
              <SiTensorflow />
              <p className='text-4xl text-center'>TensorFlow</p>
            </span>
          </div>
         </Slide>
        </div>
        <div className='mt-16'>
            <div className='max-w-[400px] mx-auto mt-5 mb-24'>
            <h2 className='text-center text-4xl shadow-lg p-2 bg-gradient-to-r from-[rgba(225,139,70,255)] to-[rgba(242,184,115,255)]'>Our Client Reviews</h2>

            </div>
        <div className='grid grid-cols-3 gap-6'>
        {
            review.map(reviews=><div className='mt-3' key={reviews.id}>
               <div className="card text center bg-base-100 shadow-xl">

  <div className="text-center">
    <h2 className="text-center font-bold">{reviews.user}</h2>
    <p>"</p>
    <p>{reviews.comment}</p>
    <p>"</p>
  </div>
</div>
            </div>)
        }
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
