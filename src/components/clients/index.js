import React from 'react'
import { clients } from "../database";
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../Section'
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Navigation, Autoplay]);

const Client = () => {
    const renderClients = clients.map( client => <SwiperSlide>
        <div className="w-40 cursor-move px-2.5 py-5 border border-solid border-gray-200">
            <img src={client.image} alt={client.name} />
        </div>
    </SwiperSlide>)
    return (
        <Section 
            classes="bg-gray-100" 
            title={
                {
                    section1: "Our", 
                    section2:'Clients'
                }
            }>
            <div className="py-6 px-4">
                <Swiper
                    breakpoints={{
                        640: {
                            width: 640,
                            slidesPerView: 3,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 5,
                        },
                    }}
                    loop={true}
                    speed={800}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    { renderClients }
                </Swiper>
            </div>
        </Section>
    )
}

export default Client
