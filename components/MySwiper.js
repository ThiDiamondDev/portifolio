import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Container } from "@mui/material";

export default function MySwiper() {
  return (
    <Container sx={{ height: "70vh" }}>
      <Swiper
        style={{ paddingBottom: 30 }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/381aXv8JCC0?si=XbynramB65uBH5D0"
            title="YouTube video player"
            frameborder="0"
            allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1mwmJr7jOyo?si=svFTpat5cV6dbAI0"
            title="YouTube video player"
            frameborder="0"
            allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
