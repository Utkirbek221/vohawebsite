import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Input() {
    const { t } = useTranslation();
    return (
        <>
            <div className='flex flex-col justify-start items-start '>
                <div className='mt-[63px] flex items-center justify-center  gap-[60px]'>
                    <input
                        type="text"
                        placeholder={t("input3.textinp")}
                        className='border-b-2 border-white bg-transparent text-white placeholder-white  w-[265px] h-[27px] text-[18px]'
                    />
                    <input
                        type="text"
                        placeholder={t("input3.textinp2")}
                        className='border-b-2 border-white bg-transparent text-white placeholder-white  w-[200px] h-[27px] text-[18px]'
                    />
                    <button className='flex justify-center items-center gap-[16px]'>
                        <h1 className='text-[--text]'>{t("input3.text")}</h1>
                        <button className='border border-[--gold] rounded-full w-[56px] h-[56px] flex justify-center items-center text-white'>
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
                    <label htmlFor="personalData" className='text-white text-[18px]'>
                    {t("input3.text2")} <span className='text-[--gold]'>{t("input3.text3")}</span>
                    </label>
                </div>
            </div>
        </>
    );
}
