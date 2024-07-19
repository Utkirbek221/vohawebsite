import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { RiDownload2Line } from "react-icons/ri";
import logo from "../Img/headerlogo.png";
import { IoCallOutline } from "react-icons/io5";
import { GoArrowDown } from "react-icons/go";
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        localStorage.setItem("lang",lng.target.value);
        i18n.changeLanguage(lng.target.value);
    };

    return (
        <>
            <div id='header' className='bgimg h-[650px]'>
                <div className='bgshadow h-[650px] text-[--text] flex justify-center items-start pt-[20px]'>
                    <div className='container flex justify-between items-center'>
                        <div className='flex justify-center items-start pt-[11px] gap-[16px]'>
                            <button className='p-[11px_25px] bg-[--gold] rounded-[62px] text-[#504C31] text-[30px]'>
                                <IoMdMenu />
                            </button>
                            <button className='p-[12px_30px] border-[1px] border-[#C5C3B6] rounded-[62px] bg-[#23373E4F]'>
                                {t('header.link1')}
                            </button>
                            <button className='p-[10px_13px] border-[1px] border-[#C5C3B6] rounded-[50%] bg-[#23373E4F] leading-[15px]'>
                                <p>{t("header.link2")}</p>
                                <p>{t("header.link3")}</p>
                            </button>
                            <button className='p-[11px] border-[1px] border-[#C5C3B6] rounded-[50%] bg-[#23373E4F] leading-[15px] text-[28px]'>
                                <RiDownload2Line />
                            </button>
                        </div>
                        <div className='flex justify-center items-center w-[128px] h-[65px]'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='flex justify-center items-center pt-[11px] gap-[44px]'>
                            <div className='flex justify-center items-center gap-[8px]'>
                                <select onChange={changeLanguage} defaultValue={i18n.language} name="selectedFruit" className='cursor-pointer text-[15px] bg-transparent'>
                                    <option value="ru">РУ</option>
                                    <option value="uz">UZ</option>
                                    <option value="en">EN</option>
                                </select>
                            </div>
                            <div className='flex justify-center items-center gap-[7px] text-[21px]'>
                                <IoCallOutline />
                                <h2>1060</h2>
                            </div>
                            <button className='text-[15px] p-[12px_30px] border-[1px] border-[#C5C3B6] rounded-[62px] bg-[#23373E4F]'>{t("header.link4")}</button>
                        </div>
                    </div>
                </div>
                <div className='container flex justify-between items-center'>
                    <div className='bodoni text-[--text] text-[130px] font-[300] leading-[120px] mt-[-175px]'>
                        <h1>{t("header.link5")}</h1>
                        <h1>{t("header.link6")}</h1>
                    </div>
                    <a href='#footer' className='cursor-pointer w-[124px] h-[124px] border border-[--gold] rounded-[50%] flex justify-center items-center text-[29px] text-[--text] mt-[-65px]'>
                        <GoArrowDown />
                    </a>
                </div>
            </div>
        </>
    );
}
