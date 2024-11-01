import React from 'react';
import phone from "../../assets/icon_header/icon_phone.png";
import mail from "../../assets/icon_header/icon_email.png";
import logo from "../../assets/image/home/image_logo.png";
import KetNoiVoiToi from "./KetNoiVoiToi";

const Footer = () => {
    return (
        <footer className="bg-[#39444D] py-6 text-white">
            <div className="w-full ml-6 sm:ml-6 md:ml-8 xl:ml-16 2xl:ml-20 4k:ml-28 flex items-center space-x-4 mb-6">
                <div>
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[36px] h-[36px] sm:w-[43px] sm:h-[43px] md:w-[43px] md:h-[43px] lg:w-[127px] lg:h-[127px]"
                    />
                </div>
                <div>
                    <h1 className="text-base md:text-xl lg:text-4xl lg:leading-normal font-bold">
                        CÔNG TY TNHH XUẤT NHẬP KHẨU <br/> CAO NGUYÊN BÌNH PHƯỚC
                    </h1>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row">
                <div className="ml-6 sm:ml-6 md:ml-8 md:w-3/4 lg:ml-12 xl:ml-16 2xl:ml-20 4k:ml-28">
                    <h4 className="font-bold uppercase text-base mt-4 md:text-base md:mt-0 lg:mt-0 lg:text-2xl xl:mt-0 2xl:mt-0 2xl:text-3xl 4k:text-4xl 4k:mt-0">Địa
                        chỉ</h4>
                    <p className="mt-2 text-[12px] md:text-sm lg:text-[20px] lg:leading-normal 2xl:text-2xl 4k:text-3xl">
                        Ấp Thuận Hòa, Xã Thuận Lợi, Huyện Đồng Phú, Tỉnh Bình Phước
                    </p>
                    <p className="mt-2 text-[12px] md:text-sm lg:text-[20px] 2xl:text-2xl 4k:text-3xl">Link gg map</p>
                    <div className="mx-auto md:mt-4 md:block hidden">
                        <KetNoiVoiToi/>
                    </div>
                </div>
                <div className="ml-6 sm:ml-6 md:ml-8 md:w-1/2 lg:ml-12 xl:ml-16 2xl:ml-20 4k:ml-28">
                    <div>
                        <h4 className="font-bold uppercase text-base mt-4 md:text-base md:mt-0 lg:mt-0 lg:text-2xl xl:mt-0 2xl:mt-0 2xl:text-3xl 4k:text-4xl 4k:mt-0">Liên
                            hệ</h4>
                        <div className="flex items-center space-x-2 max-md:space-x-2 max-lg:space-x-1 mt-2">
                            <img
                                src={phone}
                                alt="icon_phone"
                                className="w-[31px] max-md:w-[10px] max-lg:w-[15px] max-xl:w-[20px] max-2xl:w-[25px] max-4k:[30px]"
                            />
                            <a className="text-[12px] md:text-sm lg:text-[20px] 2xl:text-2xl 4k:text-3xl"
                               href="tel:+84915430543">+84 915 430 543</a>
                        </div>
                        <div className="flex items-center mt-2 space-x-2 max-md:space-x-2 max-lg:space-x-1 ">
                            <img
                                src={mail}
                                alt="icon_mail"
                                className="w-[31px] max-md:w-[10px] max-lg:w-[15px] max-xl:w-[20px] max-2xl:w-[25px] max-4k:[30px]"
                            />
                            <a className="text-[12px] md:text-sm lg:text-[20px] 2xl:text-2xl 4k:text-3xl"
                               href="mailto:CAONGUYENBP.COCO@GMAIL.COM">
                                CAONGUYENBP.COCO@GMAIL.COM
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-4 md:mt-4 justify-between w-full">
                            <div className="w-5/12">
                                <h4 className="font-bold uppercase text-base mt-4 md:text-base md:mt-0 lg:mt-0 lg:text-2xl xl:mt-0 2xl:mt-0 2xl:text-3xl 4k:text-4xl 4k:mt-6">Tuyển
                                    dụng</h4>
                                <h4 className="font-bold uppercase text-base mt-4 md:text-base md:mt-2 lg:pt-3 lg:text-2xl xl:mt-0 2xl:mt-0 2xl:text-3xl 4k:text-4xl 4k:mt-4">Tin
                                    tức</h4>
                            </div>
                            <div className="mx-auto md:hidden">
                                <KetNoiVoiToi/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-11/12 my-6 mx-auto">
                <hr className="border-t border-gray-300 flex-grow"/>
            </div>
            <p className="my-auto text-center text-[12px] md:text-sm lg:text-[20px] 2xl:text-2xl 4k:text-3xl ">Copyright
                2024 © HighLandBP</p>
        </footer>
    );
};

export default Footer;