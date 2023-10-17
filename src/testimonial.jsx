import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../src/index.css";
// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="contains">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
          <SwiperSlide data-hash="slide1" className="swiper-slide ">
            "working with barnksforte technologies limited has been a game
            changer for us. <br />their innovative solutions and attention to details
            have helped us achieve our <br /> goals faster than we have ever imagined.
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">
            {" "}
            "working with barnksforte technologies limited has been a game
            changer for us. <br />their innovative solutions and attention to details
            have helped us achieve our <br /> goals faster than we have ever imagined.
          </SwiperSlide>
          <SwiperSlide data-hash="slide3">
            {" "}
            "working with barnksforte technologies limited has been a game
            changer for us. <br />their innovative solutions and attention to details
            have helped us achieve our  <br />goals faster than we have ever imagined.
          </SwiperSlide>
          <SwiperSlide data-hash="slide4">
            {" "}
            "working with barnksforte technologies limited has been a game
            changer for us. <br />their innovative solutions and attention to details
            have helped us achieve our <br /> goals faster than we have ever imagined.
          </SwiperSlide>
          <SwiperSlide data-hash="slide5">
            {" "}
            "working with barnksforte technologies limited has been a game
            changer for us. <br />their innovative solutions and attention to details
            have helped us achieve our  <br />goals faster than we have ever imagined.
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
