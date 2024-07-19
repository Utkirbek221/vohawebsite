import React from 'react'
import img11 from "../Img/img11.png"
import img12 from "../Img/img11.png"
import img13 from "../Img/img13.png"
import img14 from "../Img/img14.png"
import img15 from "../Img/img15.png"
import img16 from "../Img/img16.png"
import img17 from "../Img/img17.png"
import img18 from "../Img/img18.png"
import img19 from "../Img/img18.png"
import { useTranslation } from 'react-i18next'


export default function Zal() {
    const { t } = useTranslation();
    
    return (
        <>
            <div className='grid grid-cols-2 text-[--text] gap-[50px] mt-[40px]'>
                <div className='grid grid-rows-1'>
                    <div className='w-[537px]'>
                        <p>{t("zal.text")}</p>
                        <p className='mt-[25px] mb-[20px]'>{t("zal.text2")}</p>
                        <p>{t("zal.text3")}</p>
                    </div>
                    <img src={img11} alt="" />
                </div>
                <img src={img12} alt="" />
            </div>
            <div className='relative  '>
                <p className='right-[120px] absolute text-[11px] mt-[18px] text-[--text]'>{t("zal.text4")}</p>
            </div>
            <div className='grid grid-cols-2 text-[--text] gap-[50px] mt-[110px]'>
                <img src={img13} alt="" />
                <div className='grid grid-rows-1'>
                    <div className='w-[537px] grid grid-cols-1 '>
                        <p className='text-[40px] mt-[45px]'>{t("zal.text5")}</p>
                        <p>{t("zal.text6")}</p>
                    </div>
                    <img src={img14} alt="" />
                </div>
            </div>
            <div className='relative  '>
                <p className='left-[120px] absolute text-[11px] mt-[18px] text-[--text]'>{t("zal.text7")}</p>
            </div>
            <div className=' mt-[125px]'>
                <h1 className='text-[40px] text-[--text]'>{t("zal.text8")}</h1>
            </div>
            <div className='grid grid-cols-2 text-[--text] gap-[50px] mt-[40px]'>
                <div className='grid grid-rows-1'>
                    <div className='w-[537px]'>
                        <p>{t("zal.text9")}</p>
                    </div>
                    <img src={img16} alt="" />
                </div>
                <img src={img15} alt="" />
            </div>
            <div className='relative  '>
                <p className='right-[120px] absolute text-[11px] mt-[18px] text-[--text]'>{t("zal.text10")}</p>
            </div>
            <div className=' mt-[125px]'>
                <h1 className='text-[40px] text-[--text]'>{t("zal.text11")}</h1>
            </div>
            <div className='grid grid-cols-2 text-[--text] gap-[50px] mt-[40px]'>
                <div className='grid grid-rows-1'>
                    <div className='w-[537px]'>
                        <p>{t("zal.text12")}</p>
                        <p>{t("zal.text13")}</p>
                    </div>
                    <img src={img18} alt="" />
                </div>
                <img src={img17} alt="" />
            </div>
            <div className='relative  '>
                <p className='right-[120px] absolute text-[11px] mt-[18px] text-[--text]'>{t("zal.text14")}</p>
            </div>
            <div className='mt-[110px] grid grid-cols-2'>
                <div className='text-[--text] flex flex-col justify-center items-start w-[500px]'>
                    <h1 className='text-[40px] font-[500]'>{t("zal.text15")}</h1>
                    <p className='mt-[40px] mb-[25px] text-[16px] leading-[19px]'>{t("zal.text16")}</p>
                    <p className='text-[16px] leading-[19px]'>{t("zal.text17")}</p>
                </div>
                <img src={img19} alt="" />
            </div>
            <div className='relative  mb-[150px]'>
                <p className='right-[120px] absolute text-[11px] mt-[18px] text-[--text]'>{t("zal.text18")}</p>
            </div>
        </>
    )
}
