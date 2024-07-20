import { Box } from "@mui/material";
import React from "react";
import storisImage from "../../../images/landingImages/storis.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "./style.css";
import "swiper/css/navigation";

const MyCarousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      <SwiperSlide>
        <Box
          sx={{ width: { xs: "100%", sm: "100%" } }}
          component="img"
          src={storisImage}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{ width: { xs: "100%", sm: "100%" } }}
          component="img"
          src={storisImage}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{ width: { xs: "100%", sm: "100%" } }}
          component="img"
          src={storisImage}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{ width: { xs: "100%", sm: "100%" } }}
          component="img"
          src={storisImage}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{ width: { xs: "100%", sm: "100%" } }}
          component="img"
          src={storisImage}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{ width: { xs: "100%", sm: "100%" } }}
          component="img"
          src={storisImage}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
