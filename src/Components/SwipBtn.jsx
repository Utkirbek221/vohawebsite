import React, { useState } from 'react';
import img20 from "../Img/img21.png";
import img21 from "../Img/swipbtimg.png";
import img22 from "../Img/swipbtimg2.png";
import img23 from "../Img/swipbtimg3.png";
import { useTranslation } from 'react-i18next';


export default function SwipBtn() {
    const { t } = useTranslation();
    const [mainImage, setMainImage] = useState(img20);
    const [selectedImage, setSelectedImage] = useState(img20);
    const images = [img21, img22, img23];
    return (
        <>
            <div className='bg-[#FFFFFF] '>
                <div className='container'>
                    <h1 className='text-[--bgcol] text-[50px] pt-[80px] flex justify-center pb-[40px]'>{t("Swipbtn.text")}</h1>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='mb-[80px]  border-[#8A8A8A]'>
                            <img src={mainImage} alt="Main" className="w-full h-full object-cover rounded-[10px]" />
                        </div>
                        <div className='mb-[110px] flex gap-[60px]'>
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`w-[304px] h-[195px] border border-[#8A8A8A] rounded-[10px] bg-[#FFFFFF] flex ${selectedImage === img ? 'shadow-[2px_13px_57.8px_0px_#00000040]' : ''
                                        }`}
                                    onClick={() => {
                                        setMainImage(img);
                                        setSelectedImage(img);
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className='w-full h-full object-contain  cursor-pointer rounded-[10px] p-[17px]  '
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[524px] w-full bgimg3'>

            </div>
        </>
    );
}
