import React from 'react'
import Nav from '../Nav'
import Slider from '../sliders'
import bg from '../../images/bg/bg.jpg'
import Slide from '../sliders/slide'
import { Location } from "@reach/router";
import { sliders } from "../sliders/sliders";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import '../../styles/swiper.css'

SwiperCore.use([Navigation, Autoplay]);

const Header = ({ title, subtitle }) => {
    const renderSlider = sliders.map( (slider, index) => <SwiperSlide key={index}>
        <Slider 
            image={slider.image} 
            classes={slider.className} 
            link={slider.link} 
            btnText={slider['btn-text']}
            animation={slider.animation}
            subtitle={slider.subtitle}
            title={slider.title}
        />
    </SwiperSlide> )

    const renderBg = <Slide
        image={bg} 
        subtitle={subtitle}
        title={title}
        classes="text-center"
    />

    const renderHomeSlider = <Swiper
        slidesPerView={1}
        navigation
        loop={true}
        speed={800}
        grabCursor={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        onSlideChange={() => console.log('slide change')}
    >
        { renderSlider }
    </Swiper>

    return (
        <div className="left-0 relative top-0 w-full">
            <div className="absolute top-0 right-0 left-0">
                <Nav key={1} />
            </div>
            <Location>
                {({ location })=> (
                    location.pathname === '/' ? renderHomeSlider : renderBg
                )}
            </Location>
        </div>
    )
}

export default Header
