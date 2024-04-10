// Import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import MovieSliderCard from './MovieSliderCard/MovieSliderCard';

function MovieSlider({ slides }) {
    return (
        <div className='container mx-auto mt-12'>
            <h3 className='mb-4 text-3xl font-bold text-primary-color'>Top 50</h3>
           <Swiper
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true} 
                modules={[Navigation]}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <MovieSliderCard sliderCard={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieSlider;