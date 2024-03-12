import React from 'react';
import { images } from '../utils/images';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useLocation } from 'react-router-dom';
import ByCandidates from '../json/ByCandidates.json';

const PledgeBook = () => {
  const location = useLocation();
  const length = location.state.length;
  const title = location.state.title;

  const slides = Array.from({ length: length }).map(
    (el, index) => process.env.PUBLIC_URL + `/assets/img/ByImg/Manifesto/${title}${index}.png`
  );

  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={1} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <img key={index} src={slideContent} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PledgeBook;