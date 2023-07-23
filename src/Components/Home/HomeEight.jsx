import React from 'react';
import bgAcademic from '../../assets/Img/bgPattern.jpg';
import { DepartData } from '../../Data/DepartData';


// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// import required modules
import { Pagination } from 'swiper/modules';

function HomeEight() {
  return (
    <div style={{ backgroundImage: `url(${bgAcademic})` }} className='relative w-full h-full px-3 py-10 space-y-10 text-center bg-no-repeat md:px-10 lg:px-10 xl:px-36 md:py-16 lg:py-20 xl:py-24'>
        <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Departments</h2>
        <p className='font-sans text-base md:text-lg lg:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. versions of Lorem Ipsum.</p>
        <Swiper
           slidesPerView={1}
           spaceBetween={10}
           autoplay={{
             delay:200
           }}
           pagination={{
             clickable: true,
             dynamicBullets:true
           }}
           breakpoints={{
             '@0.00': {
               slidesPerView: 1,
               spaceBetween: 10,
             },
             '@0.75': {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             '@1.00': {
               slidesPerView: 3,
               spaceBetween: 40,
             },
             '@1.50': {
               slidesPerView: 4,
               spaceBetween: 50,
             },
           }}
           modules={[Pagination]}
             className="w-full h-auto px-2 pt-5 pb-16 overflow-y-visible"
           >
            {DepartData.map((dep)=>(
             <SwiperSlide className="transition-all bg-white  hover:shadow-xl drop-shadow-lg rounded-3xl">
                <img src={dep.img} className='object-cover w-full h-1/2' alt="" />
                <div className='flex flex-col items-center justify-center w-full p-3 space-y-4 text-center h-1/2'>
                  <h2 className='text-[#CEA553] text-2xl leading-7'>{dep.title}</h2>
                  <a href={dep.buttonTo}  className='rounded-md lg:rounded-lg cursor-pointer w-auto bg-[#555555] text-[#555555] bg-opacity-10 pt-0.5 px-4 xl:px-6 pb-1 text-xs xl:text-sm font-sans'>
                     Learn More
                   </a>
                </div>
             </SwiperSlide>
            ))}
           </Swiper>
    </div>
  )
}

export default HomeEight



