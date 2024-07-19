import React from 'react';
import bgimg from '../Img/mainbgimg.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Input from '../Components/Input';
import { Pagination } from 'swiper/modules';
import Swiperrrrr from '../Components/Swiperr';
import { useTranslation } from 'react-i18next';
import 'swiper/swiper-bundle.css';

export default function Main() {
  const { t } = useTranslation();
  const swipData = [
    {
      text: t("swiper.text"),
      text2: t("swiper.text2"),
      text3: t("swiper.text3"),
      text4: t("swiper.text4"),
      text5: t("swiper.text5"),
      text6: t("swiper.text6"),
      text7: t("swiper.text7"),
      text8: t("swiper.text8"),
      text9: t("swiper.text9"),
    },
    {
      text: t("swiper.text"),
      text2: t("swiper.text2"),
      text3: t("swiper.text3"),
      text4: t("swiper.text4"),
      text5: t("swiper.text5"),
      text6: t("swiper.text6"),
      text7: t("swiper.text7"),
      text8: t("swiper.text8"),
      text9: t("swiper.text9"),
    },
    {
      text: t("swiper.text"),
      text2: t("swiper.text2"),
      text3: t("swiper.text3"),
      text4: t("swiper.text4"),
      text5: t("swiper.text5"),
      text6: t("swiper.text6"),
      text7: t("swiper.text7"),
      text8: t("swiper.text8"),
      text9: t("swiper.text9"),
    },
  ];

  return (
    <>
      <div className='bg-[#064850] min-h-screen'>
        <div className='container flex justify-center mt-[-50px]'>
          <h1 className='font-[400] text-[120px] leading-[140px] text-[--gold] allura'>{t("main.text")}</h1>
        </div>
        <div className='container mt-[100px] h-[590px] relative'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {swipData.map((data, i) => (
              <SwiperSlide key={i} className='flex justify-center'>
                <div className='h-[500px] bg-[#FFFFFF] rounded-[32px] p-[50px] shadow-lg'>
                  <p className='font-[500] text-[38px] leading-[57px]'>{data.text}</p>
                  <p className='text-[18px] font-[500] mt-[22px] mb-[22px]'>{data.text2}</p>
                  <p className='text-[22px] font-[500]'>{data.text3}</p>
                  <ul className='text-[18px] grid gap-[10px] mt-[22px] mb-[26px]'>
                    <li>{data.text4}</li>
                    <li>{data.text5}</li>
                    <li>{data.text6}</li>
                    <li>{data.text7}</li>
                    <li>{data.text8}</li>
                  </ul>
                  <p className='text-[18px]'>{data.text9}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination mt-[50px]"></div>
          </Swiper>
        </div>
        <div className='container mt-[100px]'>
          <div className='grid grid-cols-2 gap-[98px]'>
            <img src={bgimg} alt="" className='h-[358px] w-[630px]' />
            <div>
              <h1 className='w-[452px] mb-[28px] text-[52px] leading-[60px] tracking-[2%] text-left text-white'>
                {t("main.text2")}
                <span className='mb-[28px] text-[52px] leading-[60px] tracking-[2%] text-left text-[--gold]'> VOHA</span>
              </h1>
              <p className='w-[419px] font-[400] text-[18px] leading-[27px] tracking-[2%] text-white'>
                {t("main.text3")}
              </p>
            </div>
          </div>
        </div>
        <Swiperrrrr />
        <div className='container flex justify-center items-center mt-[150px] flex-col'>
          <h1 className='bodoni text-[40px] text-[--gold] font-[500]'>{t("main.text4")}</h1>
          <Input />
        </div>
      </div>
    </>
  );
}
