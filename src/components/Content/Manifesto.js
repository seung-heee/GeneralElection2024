import { useLocation } from "react-router-dom";
import { images } from '../../utils/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../css/Content.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Manifesto = () => {
    const location = useLocation();
    const title = location.state.title;

    return (
        <div>
            {Object.keys(images.소견서).includes(title) && (
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        Object.keys(images.소견서[title]).map((key) => (
                            <div key={key}>
                                <SwiperSlide>
                                    <img className='w-screen' src={images.소견서[title][key]} alt={key} />
                                </SwiperSlide>
                            </div>
                        ))
                    }
                </Swiper >)}
        </div >
    )
}

export default Manifesto;