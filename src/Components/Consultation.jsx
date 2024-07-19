import React from 'react'
import img21 from "../Img/img21.png"
import img22 from "../Img/img22.png"
import img26 from "../Img/img26.png"
import img27 from "../Img/img27.png"
import img28 from "../Img/img28.png"
import img29 from "../Img/img29.png"
import img34 from "../Img/img30.png"
import { FaHeadset } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { useTranslation } from 'react-i18next'

export default function Consultation() {
    const { t } = useTranslation();
    return (
        <>
            <div className='bg-[#FFFFFF]'>
                <div className='container text-[--bgcol] text-[40px] '>
                    <h1 className='pt-[150px] text-center'>{t("Consul.text")}</h1>
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col justify-start items-start'>
                            <div className='mt-[63px] flex items-center justify-center  gap-[60px]'>
                                <input
                                    type="text"
                                    placeholder={t("Consul.textinput")}
                                    className='border-b-2 border-[#555D61] bg-transparent text-[#555D61] placeholder-[#555D61]  w-[265px] h-[27px] text-[18px]'
                                />
                                <input
                                    type="text"
                                    placeholder={t("Consul.textinput2")}
                                    className='border-b-2 border-[#555D61] bg-transparent text-[#555D61] placeholder-[#555D61]  w-[200px] h-[27px] text-[18px]'
                                />
                                <button className='flex justify-center items-center gap-[16px]'>
                                    <h1 className='text-[#555D61] text-[16px]'>{t("Consul.textt")}</h1>
                                    <button className='border border-[--gold] rounded-full w-[56px] h-[56px] flex justify-center text-[15px] items-center text-[#555D61]'>
                                        &#8594;
                                    </button>
                                </button>
                            </div>
                            <div className='mt-[10px] flex items-center justify-start mb-[100px]'>
                                <input
                                    type="checkbox"
                                    id="personalData"
                                    className='appearance-none border border-[--gold] rounded-full w-[20px] h-[20px] mr-[10px] bg-transparent checked:bg-[--gold] checked:border-transparent'
                                />
                                <label htmlFor="personalData" className='text-[#555D61] text-[18px]'>
                                {t("Consul.text2")}<span className='text-[--gold]'>{t("Consul.text3")}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-[40px] mt-[80px] pb-[80px]'>{t("Consul.text4")}</h1>
                    <div className='grid grid-cols-2 gap-[30px] pb-[150px]'>
                        <div className='bg-[--bgcol] flex p-[54px_34px_54px_54px] gap-[30px]'>
                            <img src={img21} alt="" />
                            <div className=' flex flex-col justify-start items-start'>
                                <h1 className='mb-[30px] text-[22px] text-[--text]'>{t("Consul.text5")}</h1>
                                <div className=' text-[--text] text-[16px] font-[400] leading-[19px] flex flex-col justify-start items-start'>
                                    <p className='text-start'><span className='text-[--gold]'>{t("Consul.text6")}</span> {t("Consul.text7")}</p>
                                    <p className='text-[--gold]'>{t("Consul.text8")}</p>
                                    <p>{t("Consul.text9")}</p>
                                    <p>{t("Consul.text10")}</p>
                                    <p>{t("Consul.text11")}</p>
                                    <p>{t("Consul.text12")}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[--bgcol] flex p-[54px_34px_54px_54px] gap-[30px] justify-center items-center'>
                            <img src={img22} alt="" className='w-[123px] h-[124px] ' />
                            <div className=' flex flex-col justify-start items-start'>
                                <h1 className='mb-[30px] text-[22px] text-[--text]'>{t("Consul.texttt")}</h1>
                                <div className=' text-[--text] text-[16px] font-[400] leading-[19px] flex flex-col justify-start items-start'>
                                    <p className='text-start'><span className='text-[--gold]'>{t("Consul.textt2")}</span> {t("Consul.textt3")}</p>
                                    <p className='mt-[20px]'>{t("Consul.textt4")}</p>
                                    <p>{t("Consul.textt5")}</p>
                                    <p>{t("Consul.textt6")}</p>
                                    <p>{t("Consul.textt7")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-[40px] pb-[80px]'>{t("Consul.text13")}</h1>
                    <div className=' gap-[25px] grid grid-cols-3 pb-[170px]'>
                        <div className='bgim w-[380px] h-[402px] relative'>
                            <h1 className='absolute text-[22px] bottom-[20px] left-[20px] text-[--text]'>{t("Consul.text14")}</h1>
                        </div>
                        <div className='bgim2 w-[380px] h-[402px] relative'>
                            <h1 className='absolute text-[22px] bottom-[20px] left-[20px] text-[--text]'>{t("Consul.text15")}</h1>
                        </div>
                        <div className='bgim3 w-[380px] h-[402px] relative'>
                            <h1 className='absolute text-[22px] bottom-[20px] left-[20px] text-[--text]'>{t("Consul.text16")}</h1>
                        </div>
                    </div>
                    <h1 className='text-[40px] text-start'>{t("Consul.text17")}</h1>
                    <div className='grid grid-cols-2 mt-[40px]'>
                        <div>
                            <p className='text-[#524F46] text-[16px] w-[422px] mb-[43px]'>{t("Consul.text18")}</p>
                            <img src={img26} alt="" />
                        </div>
                        <img src={img27} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        <p className='text-center mt-[110px] text-[16px] leading-[19px] w-[422px] '>{t("Consul.text19")}</p>
                        <div className='flex mt-[97px] gap-[100px] pb-[150px]'>
                            <img src={img28} alt="" />
                            <img src={img29} alt="" />
                        </div>
                    </div>
                    <div className='pb-[150px]'>
                        <h1 className='text-[40px] mb-[40px]'>{t("Consul.text20")}</h1>
                        <div className='grid grid-cols-4'>
                            <div className='bgim4 w-[281px] h-[412px] relative '>
                                <h1 className='absolute bottom-[25px] left-[25px] text-[26px] text-[--text]'>{t("Consul.text21")}</h1>
                            </div>
                            <div className='bgim5 w-[281px] h-[412px] relative '>
                                <h1 className='absolute bottom-[25px] left-[25px] text-[26px] text-[--text]'>{t("Consul.text22")}</h1>
                            </div>
                            <div className='bgim6 w-[281px] h-[412px] relative '>
                                <h1 className='absolute bottom-[25px] left-[25px] text-[26px] text-[--text]'>{t("Consul.text23")}</h1>
                            </div>
                            <div className='bgim7 w-[281px] h-[412px] relative '>
                                <h1 className='absolute bottom-[25px] left-[25px] text-[26px] text-[--text]'>{t("Consul.text24")}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bgim8 h-[495px]  '>
                    <div className='bgshadow2 h-full w-full '>
                        <div className='container'>
                            <div className=' flex justify-between items-center  pt-[75px] mb-[175px]'>
                                <h1 className='text-[40px] text-[--text]'>{t("Consul.text25")}</h1>
                                <img src={img34} alt="" className='' />
                            </div>
                            <div className=' flex justify-between items-center '>
                                <div className='w-[282px] h-[94px] bg-[--bgcol] flex justify-start items-center p-[27px] gap-[20px]'>
                                    <p className='text-[--gold] text-[18px]'>24/7</p>
                                    <p className='text-[16px] text-[--text] '>{t("Consul.text26")}</p>
                                </div>
                                <div className='w-[282px] h-[94px] bg-[--bgcol] flex justify-start items-center p-[27px] gap-[20px]'>
                                    <FaHeadset  className='text-[--gold] text-[32px]'/> 
                                    <p className='text-[16px] text-[--text] '>{t("Consul.text27")}</p>
                                </div>
                                <div className='w-[282px] h-[94px] bg-[--bgcol] flex justify-start items-center p-[27px] gap-[20px]'>
                                    <MdOutlineSms className='text-[--gold] text-[32px]' />
                                    <p className='text-[16px] text-[--text] '>{t("Consul.text28")}</p>
                                </div>
                                <div className='w-[282px] h-[94px] bg-[--bgcol] flex justify-start items-center p-[27px] gap-[20px]'>
                                    <IoIosStarOutline className='text-[--gold] text-[32px]' />
                                    <p className='text-[16px] text-[--text] '>{t("Consul.text29")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
