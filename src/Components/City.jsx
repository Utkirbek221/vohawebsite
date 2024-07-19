import React from 'react'
import img20 from "../Img/img21.png"
import { useTranslation } from 'react-i18next';

export default function City() {
    const { t } = useTranslation();
    return (
        <>
            <div className='container'>
                <h1 className='text-[120px] text-[--gold] mt-[65px]'>{t("City.text")}</h1>
                <div className='flex justify-center items-center mt-[-100px] gap-[120px]'>
                    <h1 className='text-[--text] text-[40px]'>{t("City.text2")}</h1>
                    <div className='text-[--text] text-[16px] w-[415px] font-[400]'>
                        <p>{t("City.text3")}</p>
                        <p className='mt-[20px]'>{t("City.text4")}</p>
                    </div>
                </div>
                <div className='mt-[122px] grid grid-cols-2'>
                    <div className='text-[--text]  flex justify-end flex-col'>
                        <h1 className='text-[40px] mb-[40px]'>{t("City.text6")}</h1>
                        <p className='w-[429px] text-[16px] font-[400]'>{t("City.text7")}</p>
                        <p className='font-[400] text-[11px] mt-[120px] ml-[30px] mb-[16px]'>{t("City.text8")}</p>
                    </div>
                    <img src={img20} alt="" />
                </div>
            </div>
        </>
    )
}
