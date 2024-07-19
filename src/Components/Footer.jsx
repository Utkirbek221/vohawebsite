import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoArrowUp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div id='footer' className='bg-[#FFFFFF]'>
        <div className=' flex container gap-[73px]'>
          <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-4xl font-serif mb-8">{t("Footer.text")}</h1>

            <div className="mb-6 flex justify-start items-start">
              <FaLocationDot className="text-[20px] text-[--gold]" />
              <div className="ml-4">
                <h2 className="text-[16px] text-[#5E635F]">{t("Footer.text2")}</h2>
                <p className='text-[#575757] text-[14px]'>{t("Footer.text3")}</p>
              </div>
            </div>

            <div className="mb-6 flex">
              <FaLocationDot className="text-[22px] text-[--gold]" />
              <div className="ml-4">
                <h2 className=" text-[16px] text-[#5E635F]">{t("Footer.text2")}</h2>
                <p className='text-[#575757] text-[14px]'>{t("Footer.text4")}</p>
              </div>
            </div>

            <div className="mb-6 flex">
              <FaLocationDot className="text-[20px] text-[--gold]" />
              <div className="ml-4">
                <h2 className="text-[16px] text-[#5E635F]">{t("Footer.text2")}</h2>
                <p className='text-[#575757] text-[14px]'>{t("Footer.text5")}</p>
              </div>
            </div>

            <div className="mb-6 flex">
              <FaLocationDot className="text-[20px] text-[--gold]" />
              <div className="ml-4">
                <h2 className="text-[16px] text-[#5E635F]">{t("Footer.text2")}</h2>
                <p className='text-[#575757] text-[14px]'>{t("Footer.text6")}</p>
              </div>
            </div>

            <div className="mt-6 flex">
              <FaLocationDot className="text-[20px] text-[--gold]" />
              <div className="ml-4">
                <h2 className="text-[16px] text-[#5E635F] ">{t("Footer.text7")}</h2>
                <p className='text-[#575757] text-[24px] '>1060</p>
              </div>
            </div>

            <div className='flex justify-between items-end'>
              <div className="mt-8 flex gap-[15px]">
                <div className='w-[30px] h-[30px] bg-[--bgcol] rounded-[50%] flex justify-center items-center text-[--gold]'>
                  <FaFacebook />
                </div>
                <div className='w-[30px] h-[30px] bg-[--bgcol] rounded-[50%] flex justify-center items-center text-[--gold]'>
                  <FaTelegram />
                </div>
                <div className='w-[30px] h-[30px] bg-[--bgcol] rounded-[50%] flex justify-center items-center text-[--gold]'>
                  <AiFillInstagram />
                </div>
              </div>
              <a href='#header' className='cursor-pointer  w-[55px] h-[53px] border-[1px] border-[--gold] rounded-[50%] mb-[-30px] flex justify-center items-center text-[--gold]'>
                <IoArrowUp />
              </a>
            </div>
          </div>
          <iframe
            title="Google Map"
            className="h-[599px] w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=41.301675143661,69.21912855221122&hl=uz&z=17&output=embed`}
          ></iframe>
        </div>
      </div>

    </>
  )
}
