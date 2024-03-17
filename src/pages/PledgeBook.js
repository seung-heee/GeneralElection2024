import React from 'react';
import { images } from '../utils/images';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useLocation } from 'react-router-dom';
import ByCandidates from '../json/ByCandidates.json';

import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const PledgeBook = () => {
  const location = useLocation();
  const length = location.state.length;
  const title = location.state.title;

  const slides = Array.from({ length: length }).map(
    (el, index) => process.env.PUBLIC_URL + `/assets/img/byImg/PledgeBook/${title}${index}.png`
  );
  
  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={1} virtual>
      <IoIosArrowDropleft  className='absolute top-[40%] z-20 left-2' size={20}/>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <img key={index} src={slideContent} />
          </SwiperSlide>
        ))}
      <IoIosArrowDropright className='absolute top-[40%] z-20 right-2'  size={20}/>
    </Swiper>
  );
};

export default PledgeBook;