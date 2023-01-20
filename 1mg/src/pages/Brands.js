import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import CardSwiper from "./CardSwiper";
// https://backend-json.vercel.app/featureBrand
const Brands = () => {
  const [brand, setBrand] = useState([]);

  const getBrand = () => {
    fetch(`https://backend-json.vercel.app/featureBrand`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBrand(data);
        // console.log(data)
      });
  };

  useEffect(() => {
    getBrand();
  }, []);
  return (
    <>
      <div className="container py-4 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "10px",
              }}
            >
              {brand.map((item) => {
                return (
                  <div key={item.id}>
                    {" "}
                    <img src={item.image_url} />
                    <h4>
                      <b>{item.name}</b>
                    </h4>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Brands;
