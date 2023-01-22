import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import Brands from "./Brands";
// import { AiFillPlusSquare } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Footer from "./Footer";
import Partners from "./Partners";
import Supliments from "./Supliments";
const Medicines = () => {
  return (
    <div>
      <hr />
     
      <hr />
    
      <div style={{border:'6px solid whiteSmoke'}}>
      <div
        style={{
          display: "flex",
          margin: "50px",
          justifyContent: "space-between",
        }}
      >
        <div className="slider-fun" style={{ width: "500px", margin: "25px" }}>
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            classNameName="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <img
                src="https://www.superthirty.com/wp-content/uploads/2021/05/ayurveda-front-slide.jpg"
                alt="new1"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/85bbe9a7-230b-4836-bff3-d5f451b426a7.png"
                alt="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://onemg.gumlet.io/de33b4b7-c06a-400a-ab4d-f83958a44ffa.png"
                alt="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ytimg.com/vi/rVI4J38uO0c/maxresdefault.jpg"
                alt="4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ytimg.com/vi/eCBY8pPSJ2I/maxresdefault.jpg"
                alt="5"
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "15px",
          }}
        >
          <img
            src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/85bbe9a7-230b-4836-bff3-d5f451b426a7.png"
            alt=""
            width={500}
          />
        </div>
      </div>
      </div>
      <h1 style={{fontSize:'25px',margin:'10px'}}> India’s Leading Online Pharmacy & Healthcare Platform</h1>
     <div style={{border:'6px solid whiteSmoke'}}><Brands/></div>
     <div style={{border:'6px solid whiteSmoke'}}><Supliments/></div>
     
     
     <Partners/>
     <Footer/>
    </div>
  );
};

export default Medicines;
