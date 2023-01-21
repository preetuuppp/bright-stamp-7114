// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import CardSwiper from "./CardSwiper";

import { useNavigate } from 'react-router-dom';
// https://backend-json.vercel.app/featureBrand
const Supliments = () => {

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/dabar');
    }

    return (
    <>
      <div className="container py-2 px-2 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{  
            0:{
              slidesPerView:1,
          spaceBetween:10
            },
           480:{
              slidesPerView:2,
          spaceBetween:10
            },
            1068:{
              slidesPerView:5,
          spaceBetween:30
            },
            768:{
              slidesPerView:3,
          spaceBetween:15
            },
          }}
        >
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://img5.hkrtcdn.com/19809/prd_1980864-HK-Vitals-Multivitamin-Women-by-HealthKart-60-tablets-Unflavoured_c_l.jpg" 
            }} 
          />
         
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://rukminim1.flixcart.com/image/416/416/xif0q/vitamin-supplement/c/b/9/60-cold-pressed-organic-flax-seeds-oil-capsules-1250mg-with-original-imaghhwgxuhfqcjw.jpeg?q=70"}}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/ceb8xikygjrjocx1t0vl.jpg"}}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
           <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://cdn.shopify.com/s/files/1/0160/3102/3204/products/DailyGreensCapsules.jpg?v=1645397601" }}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://m.media-amazon.com/images/I/5118phZ-EWL.jpg"}}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://cdn.shopify.com/s/files/1/0065/0651/2502/files/2_7356c465-1321-4cee-b383-36d5d8b49287.jpg?v=1649935655"}}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525320/j7ruar88gacbzksuadjn.png"}}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
 
        </Swiper>
      </div>
    </>
  );
};

export default Supliments;
