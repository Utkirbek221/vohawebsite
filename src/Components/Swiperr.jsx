import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import swipimg1 from "../Img/swipimg1.jpeg"
import swipimg2 from "../Img/swipimg2.jpeg"
import swipimg3 from "../Img/swipimg3.jpeg"
import swipimg4 from "../Img/swipimg3.jpeg"

export default function Swiperrrrr() {

    return (
        <>
            <div className='mt-[178px] h-[550px] flex justify-center items-center'>
                <Swiper
                    slidesPerView={3.5}
                    spaceBetween={30}
                    loop
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    slidesOffsetBefore={223.5} // Half of the slide width (447px / 2)
                    slidesOffsetAfter={223.5} // Half of the slide width (447px / 2)
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}"></span>`;
                        }
                    }}
                    className="mySwiper h-[550px] w-full"
                >
                    <SwiperSlide className='w-[447px] h-[548px] text-[24px]'>
                        <img src={swipimg1} alt="" className='w-[447px] h-[448px] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className='w-[447px] h-[448px] text-[24px]'>
                        <img src={swipimg2} alt="" className='w-[447px] h-[448px] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className='w-[447px] h-[448px] text-[24px]'>
                        <img src={swipimg3} alt="" className='w-[447px] h-[448px] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className='w-[447px] h-[448px] text-[24px]'>
                        <img src={swipimg4} alt="" className='w-[447px] h-[448px] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className='w-[447px] h-[448px] text-[24px]'>
                        <img src={swipimg3} alt="" className='w-[447px] h-[448px] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className='w-[447px] h-[448px] text-[24px]'>
                        <img src={swipimg4} alt="" className='w-[447px] h-[448px] object-cover' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
