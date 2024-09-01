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
  // Стиль для слайдов (и для видео, и для изображений)
  const slideStyle = {
    width: "258px", // Фиксированная ширина
    height: "461px", // Фиксированная высота
    borderRadius: "10px", // Радиус скругления
    objectFit: "cover", // Обеспечивает корректное отображение содержимого
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
        <video style={slideStyle} controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>

      {/* Второй слайд - Видео 2 */}
      <SwiperSlide>
        <video style={slideStyle} controls>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>

      {/* Третий слайд - видео 3 */}
      <SwiperSlide>
        <video style={slideStyle} controls>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>

      {/* Четвертый слайд - Изображение 1 */}
      <SwiperSlide>
        <Box
          component="img"
          src={storisImage1}
          sx={slideStyle} // Применяем стили для изображений
        />
      </SwiperSlide>

      {/* Пятый слайд - Изображение 2 */}
      <SwiperSlide>
        <Box
          component="img"
          src={storisImage2}
          sx={slideStyle} // Применяем стили для изображений
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;