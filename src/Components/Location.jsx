import React from 'react'
import dom from "../Img/locationimg.jpeg"
import { useTranslation } from 'react-i18next';
export default function Location() {
    const { t } = useTranslation();
    return (
        <>
            <div className='flex justify-start items-center  gap-[80px] bg-[--text] pb-[110px]'>
                <iframe
                    title="Google Map"
                    className="h-[599px] w-[834px]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=41.301675143661,69.21912855221122&hl=uz&z=17&output=embed`}
                ></iframe>
                <div className=''>
                    <h1 className='tex-[--bgcol] text-[40px]'>
                        {t("lacation.text")}
                    </h1>
                    <p className='text-[18px] w-[400px] mt-[34px]'>
                    {t("lacation.text2")}
                        <span className='text-[--gold]'> {t("lacation.text3")}</span>
                        {t("lacation.text4")}
                    </p>
                </div>
            </div>
            <div className='bg-[--text] pb-[100px] '>
                <img src={dom} alt="" className='h-[800px] w-full object-cover' />
            </div>
        </>
    )
}
