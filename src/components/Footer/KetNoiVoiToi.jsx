import React from 'react';
import facebookLogo from "../../assets/image/footer/facebookLogo.png";
import zaloLogo from "../../assets/image/footer/zaloLogo.png";
import pinterestLogo from "../../assets/image/footer/pinterestLogo.png";

const KetNoiVoiToi = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center items-start">
            <h4 className="font-bold text-base mt-4 md:mt-0 lg:text-2xl 2xl:text-3xl">
                Kết Nối Với Chúng Tôi
            </h4>
            <ul className="flex space-x-2 mt-2 md:mt-0 md:ml-6 md:flex-row lg:ml-16 lg:space-x-5">
                <li>
                    <img src={facebookLogo} alt="Facebook"
                         className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[53px] lg:h-[53px] "/>
                </li>
                <li>
                    <img src={zaloLogo} alt="Zalo" className="md:w-[30px] md:h-[30px] lg:w-[53px] lg:h-[53px] w-[25px] h-[25px]"/>
                </li>
                <li>
                    <img src={pinterestLogo} alt="Pinterest"
                         className="md:w-[30px] md:h-[30px] lg:w-[53px] lg:h-[53px] w-[25px] h-[25px]"/>
                </li>
            </ul>
        </div>
    );
};

export default KetNoiVoiToi;