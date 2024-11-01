import React, { useState } from "react";
import logo from "../../assets/image/home/image_logo.png";
import icon_menu from "../../assets/icons_navbar/icon_menu_main.png";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  const { t } = useTranslation();
  const menu = t("Menu");
  const location = useLocation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  const [showProducts, setShowProducts] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hàm kiểm tra xem đường dẫn có bắt đầu bằng một trong các tiền tố ngôn ngữ không
  const isCurrentPath = (path) => {
    return (
      location.pathname === path ||
      location.pathname.startsWith("/vn" + path) ||
      location.pathname.startsWith("/en" + path)
    );
  };
  return (
    <div className="w-full sticky top-0 z-50 bg-white">
      <div className=" py-5 px-[10rem] max-sm:px-[3rem] max-md:px-[3rem] max-lg:px-[3rem] max-xl:px-[5rem] max-2xl:px-[7rem] max-xl:py-4 max-2xl:py-5 ">
        <div className="w-full flex max-md:hidden">
          <div className="w-[10%] flex items-center justify-center ">
            <img
              src={logo}
              alt="logo"
              className="w-[115px] max-sm:w-[36px] max-md:w-[40px] max-lg:w-[50px] max-xl:w-[60px] max-2xl:w-[60px]"
            />
          </div>
          <div className=" w-[90%] flex items-center justify-center space-x-16 text-[20px] font-mainB max-md:text-[12px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px] max-md:space-x-5 max-lg:space-x-5 max-xl:space-x-8 max-2xl:space-x-14">
            <button
              className={`hover:text-[#639F7A] ${isCurrentPath("/home") ? "border-b-[2.5px] border-black" : ""
                }`}
            >
              <Link to={`/${currentLanguage}/home`}>{menu.Home}</Link>
            </button>
            <button
              className={`hover:text-[#639F7A] ${isCurrentPath("/our") ? "border-b-[2.5px] border-black" : ""
                }`}
            >
              <Link to={`/${currentLanguage}/our`}>{menu.Our}</Link>
            </button>
            {/* Lặp lại cho các mục menu khác */}
            <button
              className={`hover:text-[#639F7A] relative ${isCurrentPath("/product") ? "border-b-[2.5px] border-black" : ""
                }`}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <Link to={`/${currentLanguage}/product`}>{menu.Product}</Link>
              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    className="absolute w-[200px] bg-white shadow-md rounded-md p-4 z-50 pl-10 max-lg:pl-4 max-xl:pl-6 max-lg:w-[100px] max-xl:w-[140px] max-2xl:w-[160px] "
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col font-mainR text-[#E1E1E1] text-[18px] space-y-3 max-md:text-[12px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px]">
                      <button className=" text-left hover:text-black">
                        <Link to={`/${currentLanguage}/product/1`}>
                          Sản phẩm 1
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link to={`/${currentLanguage}/product/2`}>
                          Sản phẩm 2
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link to={`/${currentLanguage}/product/5`}>
                          Sản phẩm 5
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <button
              className={`hover:text-[#639F7A] ${isCurrentPath("/library") ? "border-b-[2.5px] border-black" : ""
                }`}
            >
              <Link to={`/${currentLanguage}/library`}>{menu.Library}</Link>
            </button>
            <button
              className={`hover:text-[#639F7A] ${isCurrentPath("/recruitment")
                ? "border-b-[2.5px] border-black"
                : ""
                }`}
            >
              <Link to={`/${currentLanguage}/recruitment`}>
                {menu.Recruitment}
              </Link>
            </button>
            <button
              className={`hover:text-[#639F7A] ${isCurrentPath("/contact") ? "border-b-[2.5px] border-black" : ""
                }`}
            >
              <Link to={`/${currentLanguage}/contact`}>{menu.Contact}</Link>
            </button>
          </div>
        </div>
        {/* Sliding Menu */}
        <div className="hidden max-md:block relative w-full">
          <div className="absolute top-1.5 -left-6 cursor-pointer" onClick={toggleMenu}>
            <img src={icon_menu} alt="icon_menu" />
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[25%]">
              <img src={logo} alt="logo" className="w-[36px] h-[36px]" />
            </div>
            <div className="w-[70%] text-right">
              <input type="text" className="bg-[#D9D9D9] py-1 px-5 rounded-[15px]" />
            </div>
          </div>
          {/* Sliding Menu Content */}
          <div className={`fixed top-30 left-0 w-[75%] h-full bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="pt-[57px] pl-[50px] space-y-[22px]">
              {[{
                title: "Chúng tôi",
                items: ["Giới thiệu chung", "Chứng chỉ chất lượng"]
              },
              {
                title: "Sản phẩm",
                items: ["Than gáo dừa vuông", "Than gáo dừa que", "Than gáo dừa lục giác", "Than gáo dừa BBQ", "Than gáo dừa nguyên liệu", "Hạt điều rang muối", "Dừa trái"]
              },
              { title: "Thư viện", items: ["Hình ảnh", "Video"] },
              { title: "Tin tức" },
              { title: "Tuyển dụng" },
              { title: "Liên hệ" },
              ].map((section, index) => (
                <div key={index}>
                  <button onClick={() => section.items && setAccordionOpen(prev => prev === index ? null : index)}
                    className="flex items-center justify-between w-1/2">
                    <h2 className="uppercase text-[#0B0B0B] text-base font-bold">{section.title}</h2>
                    {section.items && (
                      <p>{accordionOpen === index ? <FaAngleDown /> : <FaAngleRight />}</p>
                    )}
                  </button>
                  {section.items && accordionOpen === index && (
                    <div className="text-[12px] text-[#969696] grid overflow-hidden transition-all duration-300 ease-in-out">
                      <div className="mt-[10px] space-y-3">
                        {section.items.map((item, idx) => (
                          <Link key={idx} to={`/${item.replace(/ /g, '-').toLowerCase()}`} className="block hover:text-black">
                            <h3>{item}</h3>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
