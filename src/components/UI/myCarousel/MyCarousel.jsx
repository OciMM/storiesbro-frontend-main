import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";

// Пути к изображениям и видео
// import storisImage1 from "../../../images/landingImages/storis1.svg";
// import storisImage2 from "../../../images/landingImages/storis2.svg";
// import storisImage3 from "../../../images/landingImages/storis3.svg";
// import video1 from "../../../videos/video1.mp4";
// import video2 from "../../../videos/video2.mp4";

import storisImage1 from "./images/storis.svg";
import storisImage2 from "./images/mediatmpIMG_6316.jpg";
import video1 from "./images/IMG_6315.mp4";
import video2 from "./images/IMG_6313.mp4";
import video3 from "./images/FullSizeRender.mp4";

const MyCarousel = () => {
  // Стиль для видео
  const videoStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      {/* Первый слайд - Видео 1 */}
      <SwiperSlide>
        <video style={videoStyle} controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>

      {/* Второй слайд - Видео 2 */}
      <SwiperSlide>
        <video style={videoStyle} controls>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>

      {/* Третий слайд - Видео 3 */}
      <SwiperSlide>
        <video style={videoStyle} controls>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>

      {/* Четвертый слайд - Изображение 1 */}
      <SwiperSlide>
        <Box
          sx={{ width: { xs: "100%", sm: "100%" } }}
          component="img"
          src={storisImage1}
        />
      </SwiperSlide>

      {/* Пятый слайд - Изображение 2 */}
      <SwiperSlide>
        <Box
          sx={{ width: { xs: "100%", sm: "100%" } }}
          component="img"
          src={storisImage2}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;