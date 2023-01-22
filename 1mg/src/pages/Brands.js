// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import CardSwiper from "./CardSwiper";
// import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
// https://backend-json.vercel.app/featureBrand
const Brands = () => {

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
            data={{imgSrc: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1641187637/lcfd1eufwbtituwyswpi.jpg" 
            }} 
          />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
         
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1642586423/uq1gwxslqqrxxwv6zi6j.jpg"}}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525304/kfyx5kvvn2ai5fwswhsa.png"}}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
           <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525284/cabpuknnlyyzgqfnb4x5.png" }}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525168/p1blaka183nc1zlil8tq.png"}}
            />
            <div style={{border:'1px solid white',borderRadius:'20px' ,background:'#f56567',marginTop:'5px'}}><button className='w=50 rounded-50' style={{color:"white"}} variant='Crimson' onClick={handleClick}>See All</button></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper
            data={{imgSrc: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525147/qjfdkz5njmk9n7vvrbb3.png"}}
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

export default Brands;
