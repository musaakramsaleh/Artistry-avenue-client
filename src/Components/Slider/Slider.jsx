import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import { Slide } from 'react-awesome-reveal';
const Slider = () => {
    
    return (
        <div className=''>
            <Swiper 
            modules={[Navigation,Autoplay,Pagination]}
            pagination={{
                clickable:true
            }}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
                <SwiperSlide>
                <div className=" relative z-0 text-white font-bold text-4xl  bg-cover bg-center " style={{backgroundImage: `url(bg-1.jpg)`}}>
                <div className='relative lg:p-60 md:p-28 p-12'>
                    
                    <div className='relative z-50'>
                    <Slide>
                    <h1 style={{ color: 'white' ,zIndex:30}} className='relative lg:text-[50px] text-xl font-bold z-20'>Transform your space  <br /><br />with unique art<br className='hidden lg:block' /><br />Discover paintings that speak to <br /><br /> your soul.</h1>
                   </Slide>
                    </div>
                <div className='absolute top-0 left-0 right-0 bottom-0  content-none bg-black opacity-35 z-10'></div>

                </div>
                
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative  text-white font-bold text-4xl   bg-cover bg-center " style={{backgroundImage: `url(bg-2.jpg)`}}>
                <div className='lg:p-60 md:p-28 p-12'>
                <div className='relative z-50'>
                    <Slide>
                    <h1 className='relative z-20 lg:text-[50px] text-xl font-bold'>Experience art like <br /><br className='hidden lg:block'  />never before Shop our  <br /><br className='hidden lg:block'  />exclusive collection of handcrafted <br /><br />paintings.</h1>
                   </Slide>
                    </div>
                <div className='absolute top-0 left-0 right-0 bottom-0  content-none bg-black opacity-35 z-10'></div>
                </div>
              
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative z-0   text-white font-bold text-4xl   bg-cover bg-center " style={{backgroundImage: `url(bg-3.jpg)`}}>
                <div className='lg:p-60 md:p-28 p-12'>
                <div className='relative z-50'>
                    <Slide>
                    <h1 className='relative z-20 lg:text-[50px] text-xl font-bold'>Elevate your home  <br /><br className='hidden lg:block'  /> with captivating artwork.<br /><br className='hidden lg:block'  />Find the perfect piece <br /><br />that resonates with you.</h1>
                   </Slide>
                    </div>
                
                 <div className='absolute top-0 left-0 right-0 bottom-0  content-none bg-black opacity-35 z-10'></div>
                </div>
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;