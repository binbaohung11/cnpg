import { Icon } from "@iconify/react/dist/iconify.js";
import { useCallback, useRef } from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than 1' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than 2' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than 3' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than 4' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than 5' },
];

export default function Present({ home }) {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <div className="flex flex-col">
            <p className='font-mainB text-[40px] max-xl:text-[20px] mt-36 max-xl:mt-12 max-xl:mx-16 text-center'>{home.Present}</p>

            <div className='bg-[#E1E1E1] w-full mt-7 h-fit'>
                <div className='mx-52 max-xl:mx-7 h-full py-14 flex flex-col justify-center items-center'>
                    <div className="w-full h-fit relative">
                        <Swiper
                            ref={sliderRef}
                            pagination={{ enabled: false }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 0,
                                    spaceBetween: 0,
                                },
                                370: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                733: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 45,
                                },
                            }}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-full">
                                        <img className="bg-[#EEEEEE] rounded-[10px] w-full 2xl:h-[159px] lg:h-[125px] md:h-[75px] h-[44px] object-cover" src={image.src} alt={image.title} />
                                        <p className="2xl:text-[32px] font-bold text-center mt-3 lg:mt-7 xl:text-[26px] md:text-[20px] xs:text-[14px] group-hover:text-[#969696]">{image.title}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="absolute top-1/2 left-0 transform -translate-x-20 -translate-y-1/2 max-xl:hidden">
                            <div onClick={handlePrev} className="rounded-full hover:cursor-pointer hover:bg-[#EEE]">
                                <Icon className="text-5xl p-2 font-bold text-[#525252]" icon="akar-icons:chevron-left" />
                            </div>
                        </div>

                        {/* <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 md:hidden">
                            <div onClick={handlePrev} className="rounded-full hover:cursor-pointer">
                                <Icon className="text-xl font-bold text-[#525252]" icon="akar-icons:chevron-left" />
                            </div>
                        </div> */}

                        <div className="absolute top-1/2 right-0 transform translate-x-20 -translate-y-1/2 max-xl:hidden">
                            <div onClick={handleNext} className="rounded-full hover:cursor-pointer hover:bg-[#EEE]">
                                <Icon className="text-5xl p-2 font-bold text-[#525252]" icon="akar-icons:chevron-right" />
                            </div>
                        </div>

                        {/* <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 md:hidden">
                            <div onClick={handleNext} className="rounded-full hover:cursor-pointer">
                                <Icon className="text-xl font-bold text-[#525252]" icon="akar-icons:chevron-right" />
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>

            <p className="mt-5 text-center text-[24px] max-xl:hidden" dangerouslySetInnerHTML={{ __html: home.Pride }} />
            <p className="mt-5 mx-20 lg:mx-32 text-center text-[12px] md:text-[14px] xl:hidden">{home.PrideMobile}</p>
        </div>
    );
}
