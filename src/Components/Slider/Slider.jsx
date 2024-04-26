import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <div className=''>
            <Swiper 
            navigation={true} 
            modules={[Navigation,Autoplay,Pagination]}
            pagination={{
                clickable:true
            }}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
                <SwiperSlide>
                <div className="  text-white font-bold text-4xl  bg-cover bg-center " style={{backgroundImage: `url(bg-1.jpg)`}}>
                <div className='lg:p-72 md:p-28 p-12'>
                <h1 className='relative lg:text-[50px] text-xl font-bold z-20'>Make your dream <br /><br className='hidden lg:block' />of having a <br /><br className='hidden lg:block'  />home with <span className='text-[#990000] bg-yellow-500 rounded-lg'>MyProperty</span></h1>
                
                </div>
                
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative  text-white font-bold text-4xl   bg-cover bg-center " style={{backgroundImage: `url(bg-2.jpg)`}}>
                <div className='lg:p-72 md:p-28 p-12'>
                <h1 className='relative z-20 lg:text-[50px] text-xl font-bold'>See our Exclusive<br /><br className='hidden lg:block'  />apartments to <br /><br className='hidden lg:block'  />buy or rent property</h1>
                <div className='absolute top-0 left-0 right-0 bottom-0  content-none bg-black opacity-45 z-10'></div>
                </div>
              
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative z-0   text-white font-bold text-4xl   bg-cover bg-center " style={{backgroundImage: `url(bg-3.jpg)`}}>
                <div className='lg:p-72 md:p-28 p-12'>
                <h1 className='relative z-20 lg:text-[50px] text-xl font-bold'>You can get your<br /><br className='hidden lg:block'  /> property in suitable location<br /><br className='hidden lg:block'  /> on a reasonable deal</h1>
                 <div className='absolute top-0 left-0 right-0 bottom-0  content-none bg-black opacity-45 z-10'></div>
                </div>
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;