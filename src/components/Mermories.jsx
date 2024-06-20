import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const memories = [
  {
    key: 1,
    url: "images/memory/1.jpg",
  },
  {
    key: 2,
    url: "images/memory/2.jpg",
  },
  {
    key: 3,
    url: "images/memory/3.jpg",
  },
  {
    key: 4,
    url: "images/memory/4.jpg",
  },
  {
    key: 5,
    url: "images/memory/5.jpg",
  },
  {
    key: 6,
    url: "images/memory/6.jpg",
  },
];

const Memories = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      slidesPerView={2}
      centeredSlides
      style={{ height: "500px" }}
      initialSlide={1}
    >
      {memories.map((item) => (
        <SwiperSlide
          key={item.key}
          // style={{
          //   backgroundImage: `url(${item.url})`,
          // }}
        >
          <img src={item.url} alt="memory-image" width={600} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Memories;
