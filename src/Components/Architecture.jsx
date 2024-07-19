import React from 'react'
import { PiBuildingOfficeBold } from "react-icons/pi";
import Input from './Input';
import img2 from "../Img/img2.jpeg"
import img3 from "../Img/img3.png"
import img4 from "../Img/img4.jpeg"
import img5 from "../Img/img5.jpeg"
import { BiBuildingHouse } from "react-icons/bi";
import img6 from "../Img/img6.png"
import img7 from "../Img/img7.png"
import img8 from "../Img/img8.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import img9 from "../Img/img7.png"
import img10 from "../Img/img8.jpeg"
import Zal from './Zal';
import Swiperrrrr from './Swiperr';
import { useTranslation } from 'react-i18next';

export default function Architecture() {
    const { t } = useTranslation();
    const swipimg = [
        {
            img: img9,
            text: t("swiperArchitecture.text"),
            textsp: t("swiperArchitecture.textsp"),
            text2: t("swiperArchitecture.text2"),
            textsp2: t("swiperArchitecture.textsp2"),
            text3: t("swiperArchitecture.text3"),
            textsp3: t("swiperArchitecture.textsp3"),
            text4: t("swiperArchitecture.text4"),
            textsp4: t("swiperArchitecture.textsp4"),
            text5: t("swiperArchitecture.text5"),
            textsp5: t("swiperArchitecture.textsp5"),
        },
        {
            img: img10,
            text: t("swiperArchitecture.text6"),
            text2: t("swiperArchitecture.text7"),
        },
        {
            img: img9,
            text: t("swiperArchitecture.text"),
            textsp: t("swiperArchitecture.textsp"),
            text2: t("swiperArchitecture.text2"),
            textsp2: t("swiperArchitecture.textsp2"),
            text3: t("swiperArchitecture.text3"),
            textsp3: t("swiperArchitecture.textsp3"),
            text4: t("swiperArchitecture.text4"),
            textsp4: t("swiperArchitecture.textsp4"),
            text5: t("swiperArchitecture.text5"),
            textsp5: t("swiperArchitecture.textsp5"),
        },
        {
            img: img10,
            text: t("swiperArchitecture.text6"),
            text2: t("swiperArchitecture.text7"),
        },
    ]
    return (
        <>
            <div >
                <div className='mt-[138px] mb-[117px] '>
                    <Swiperrrrr />
                </div>
                <div className='container  text-[--text] grid grid-cols-2  h-[192px] '>
                    <div className='w-[381px] '>
                        <p className='mb-[20px]'>{t("Architecture.text")}</p>
                        <p>{t("Architecture.text2")}</p>
                    </div>
                    <div className='grid grid-cols-3 gap-[50px] h-[192px] '>
                        <div className='grid-rows-2 grid'>
                            <div className='flex justify-center items-center gap-[12px]'>
                                <PiBuildingOfficeBold className='text-[30px] text-[--gold]' />
                                <p className='w-[201px] text-[15px] leading-[18px] font-[400]'>{t("Architecture.text3")}</p>
                            </div>
                            <div className='flex justify-center items-center gap-[12px]'>
                                <PiBuildingOfficeBold className='text-[30px] text-[--gold]' />
                                <p className='w-[201px] text-[15px] leading-[18px] font-[400]'>{t("Architecture.text4")}</p>
                            </div>
                        </div>
                        <div className='grid-rows-2 grid'>
                            <div className='flex justify-center items-center gap-[12px]'>
                                <PiBuildingOfficeBold className='text-[30px] text-[--gold]' />
                                <p className='w-[201px] text-[15px] leading-[18px] font-[400]'>{t("Architecture.text5")}</p>
                            </div>
                            <div className='flex justify-center items-center gap-[12px]'>
                                <PiBuildingOfficeBold className='text-[30px] text-[--gold]' />
                                <p className='w-[201px] text-[15px] leading-[18px] font-[400]'>{t("Architecture.text6")}</p>
                            </div>
                        </div>
                        <div className='grid-rows-2 grid'>
                            <div className='flex justify-center items-center gap-[12px]'>
                                <PiBuildingOfficeBold className='text-[30px] text-[--gold]' />
                                <p className='w-[201px] text-[15px] leading-[18px] font-[400]'>{t("Architecture.text7")} </p>
                            </div>
                            <div className='flex justify-center items-center gap-[12px]'>
                                <PiBuildingOfficeBold className='text-[30px] text-[--gold]' />
                                <p className='w-[201px] text-[15px] leading-[18px] font-[400]'>{t("Architecture.text8")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[145px] container flex justify-center items-center flex-col'>
                <h1 className='mb-[14px]  text-[40px] text-[--gold] '>{t("Architecture.text11")}</h1>
                <Input />
            </div>
            <div className='h-[550px] relative bgimg2 mt-[100px]'>
                <h1 className='absolute text-[--text] leading-[60px] text-[40px] left-[55px] top-[55px] w-[271px]'>{t("Architecture.text12")}</h1>
                <h1 className='absolute text-[--text] leading-[60px] text-[40px]  top-[120px] left-[300px]'>{t("Architecture.text13")}</h1>
            </div>
            <div className='container mt-[110px] grid grid-cols-2 gap-[95px]' >
                <img src={img2} alt="" className='object-cover w-[624px] h-[512px]' />
                <div className='grid grid-cols-1 w-[471px] h-[256px] gap-[79px]'>
                    <div className='text-[--text]'>
                        <p>{t("Architecture.text14")}</p>
                        <p>{t("Architecture.text15")}</p>
                    </div>
                    <img src={img3} alt="" className='w-[471px] h-[256px]' />
                </div>
            </div>
            <div className='mt-[150px] container flex justify-center items-center'>
                <h1 className='text-[--gold] text-[40px]'>{t("Architecture.text16")}</h1>
                <h1 className='text-[--text] text-[120px] pt-[20px]'>{t("Architecture.text17")}</h1>
            </div>
            <div className='grid grid-cols-2 gap-[126px] mt-[90px] justify-center items-center text-[--text]'>
                <p>{t("Architecture.text18")}</p>
                <img src={img4} alt="" />
            </div>
            <div className='grid grid-cols-2 gap-[80px] justify-center items-center'>
                <img src={img5} alt="" />
                <div className='text-[--text]'>
                    <h1 className='text-[40px] leading-[50px] '>{t("Architecture.text19")}</h1>
                    <p>{t("Architecture.text20")}</p>
                </div>
            </div>
            <div className='mt-[150px] justify-center items-center flex'>
                <h1 className='text-[40px] text-[--gold]'>{t("Architecture.text21")}</h1>
            </div>
            <div className='container text-[--text] grid grid-cols-2 gap-[50px] mt-[80px]'>
                <div className=''>
                    <p className='w-[434px]'>{t("Architecture.text22")}</p>
                    <p className='w-[434px] mt-[25px]'>{t("Architecture.text23")}</p>
                    <div className='grid grid-cols-2  gap-[32px] mt-[40px]'>
                        <div className='grid grid-cols-1  gap-[32px] '>
                            <div className='flex justify-start items-center'>
                                <BiBuildingHouse className='text-[45px] text-[--gold]' />
                                <p className='text-[14px] font-[400] leading-[16px] '>{t("Architecture.text24")}</p>
                            </div>
                            <div className='flex justify-start items-center'>
                                <BiBuildingHouse className='text-[45px] text-[--gold]' />
                                <p className='text-[14px] font-[400] leading-[16px] '>{t("Architecture.text25")}</p>
                            </div>
                            <div className='flex justify-start items-center'>
                                <BiBuildingHouse className='text-[45px] text-[--gold]' />
                                <p className='text-[14px] font-[400] leading-[16px] '>{t("Architecture.text26")}</p>
                            </div>
                            <div className='flex justify-start items-center'>
                                <BiBuildingHouse className='text-[45px] text-[--gold]' />
                                <p className='text-[14px] font-[400] leading-[16px] '>{t("Architecture.text27")}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1  gap-[32px]'>
                            <div className='flex justify-start items-center'>
                                <BiBuildingHouse className='text-[45px] text-[--gold]' />
                                <p className='text-[14px] font-[400] leading-[16px] '>{t("Architecture.text28")}</p>
                            </div>
                            <div className='flex justify-start items-center'>
                                <BiBuildingHouse className='text-[45px] text-[--gold]' />
                                <p className='text-[14px] font-[400] leading-[16px] '>{t("Architecture.text29")}</p>
                            </div>
                            <div className='flex justify-start items-center'>
                                <BiBuildingHouse className='text-[45px] text-[--gold]' />
                                <p className='text-[14px] font-[400] leading-[16px] '>{t("Architecture.text30")}</p>
                            </div>
                            <div className='flex justify-start items-center'>
                                <BiBuildingHouse className='text-[45px] text-[--gold]' />
                                <p className='text-[14px] font-[400] leading-[16px] '>{t("Architecture.text31")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={img6} alt="" />
            </div>
            <div className='container mt-[157px] grid grid-cols-2 gap-[66px]'>
                <img src={img7} alt="" className='h-[365px] w-[625px]' />
                <div className='text-[--text] flex flex-col justify-center '>
                    <h1 className='text-[50px]'>{t("Architecture.text32")}</h1>
                    <p className='text-[16px] font-[400] leading-[19px] mt-[40px] mb-[20px]'>{t("Architecture.text33")}</p>
                    <p className='text-[16px] font-[400] leading-[19px]'>{t("Architecture.text34")}</p>
                </div>
            </div>
            <div className='container mt-[157px] grid grid-cols-2 gap-[66px]'>
                <div className='text-[--text] flex flex-col justify-center '>
                    <h1 className='text-[50px]'>{t("Architecture.text35")}</h1>
                    <p className='text-[16px] font-[400] leading-[19px] mt-[40px] mb-[20px]'>{t("Architecture.text36")}</p>
                </div>
                <img src={img8} alt="" className='h-[365px] w-[625px]' />
            </div>
            <div className='container flex justify-center items-center mt-[150px]'>
                <h1 className='text-[--gold] text-[40px]'>{t("Architecture.text37")}</h1>
            </div>
            <div className='container flex justify-center items-center '>
                <Input />
            </div>
            <div className='container'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    pagination={true}
                    // mousewheel={true}
                    // keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper text-[--text]"
                >
                    {swipimg.map((item, i) => (
                        <SwiperSlide key={i} className='text-[16px]'>
                            <img src={item.img} alt="" className='w-[554px] h-[564px] mb-[80px]' />
                            <div className='w-[478px]'>
                                <p className='text-[16px] leading-[19px] font-[400]'>{item.text}<span className='text-[--gold]'>{item.textsp}</span> </p>
                                <p className='text-[16px] leading-[19px] font-[400]'>{item.text2}<span className='text-[--gold]'>{item.textsp2}</span> </p>
                                <p className='text-[16px] leading-[19px] font-[400]'>{item.text3} <span className='text-[--gold]'>{item.textsp3}</span> </p>
                                <p className='text-[16px] leading-[19px] font-[400]'>{item.text4}<span className='text-[--gold]'>{item.textsp4}</span> </p>
                                <p className='text-[16px] leading-[19px] font-[400]'>{item.text5} <span className='text-[--gold]'>{item.textsp5}</span> </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='container mt-[125px]'>
                <h1 className='text-[40px] text-[--text]'>{t("Architecture.text38")}</h1>
            </div>
            <div className='container '>
                <Zal />
            </div>
        </>
    )
}
