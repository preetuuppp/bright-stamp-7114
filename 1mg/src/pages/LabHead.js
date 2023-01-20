import React, { useRef, useState } from "react";
import { Button, Heading } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { AiFillPlusSquare } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Partners from "./Partners";

export default function Labahead() {
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "50px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "500px", margin: "25px" }}>
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
                src="https://authenticfoundation.com/upload/event/full/636760102660000000.jpg"
                alt="new1"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://www.superthirty.com/wp-content/uploads/2021/05/ayurveda-front-slide.jpg"
                alt="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://img.freepik.com/premium-vector/medical-certificate-design-template-vaccine-certificate-free-covid-template-design_91611-585.jpg?w=2000"
                alt="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-11/09/full/1604865639-0712.jpg"
                alt="4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://ashahospitals.co/upload/2021/12/FREE-HEALTH-CHECK-UP-CAMP.jpeg"
                alt="5"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <header style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
            <b> Lab Test From The Comfort Of Your Home</b>
          </header>
          <h4>50,00,000+ lab tests booked | 20,00,000+ satisfied customers</h4>
          <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'15px'}}>
            <img
              src="https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto"
              alt=""
            />
            <img
              src="https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto"
              alt=""width={35}
            />
            <img
              src="https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto"
              alt=""width={35}
            />
            <img
              src="https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto"
              alt="" width={35}
            />
          </div>
            <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'15px',fontSize:'11px'}}>
            <h5>100% Safe & Hygienic</h5>
            <h5>Home Sample Pick Up</h5>
            <h5>View Reports Online</h5>
            <h5>Free Doctor Consultation</h5>
           
            </div>
            <Button margin={10} background='#F47895' color={'white'} variant='solid' >
    View Popular Packages
  </Button>
        </div>
      </div>
      <div>
      <Heading fontSize={20} margin={10}>Popular lab tests & profiles</Heading>
      <div className="card-group">
  <div className="card">
    
    <div className="card-body">
      <h6 className="card-title"><b>HEALTH TEST AT YOUR HOME</b></h6>
      <li className="card-text">Complete Blood Count</li>
      <li className="card-text">Liver Function Test
</li>
      <li className="card-text">Lipid Profile</li>
      
    </div>
   
  </div>
  <div className="card">
  
    <div className="card-body">
      <h5 className="card-title"><b>VISIT A LAB NEAR YOU</b></h5>
      <li className="card-text">USG Whole Abdomen</li>
      <li className="card-text">CT Scan (Head)</li>
      <li className="card-text">MRI Brain</li>
    </div>
    
  </div>
  
</div>
<Button margin={5} background='#F47895' color={'white'} variant='solid' >
    Find Your Tests
  </Button>
      </div>
      <br />
      <br />
      <Partners/>
    </>
  );
}
