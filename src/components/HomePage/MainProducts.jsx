import { Icon } from '@iconify/react/dist/iconify.js';
import { useCallback, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than Gáo Dừa Vuông' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than Gáo Dừa Vuông 1' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than Gáo Dừa Vuông 2' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than Gáo Dừa Vuông 3' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than Gáo Dừa Vuông 4' },
    { src: 'https://picsum.photos/seed/picsum/600/400', title: 'Than Gáo Dừa Vuông 5' },
];

export default function MainProducts({ home }) {
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
        <div className="flex flex-col w-full xl:mt-36 md:mt-24 xs:mt-12">
            <p class="font-mainB xl:text-[40px] md:text-[28px] xs:text-[20px] xl:mb-12 xs:mb-8 xl:text-start xs:text-center">{home.CoalProduct}</p>
            <div className="w-full h-full relative">
                <Swiper
                    ref={sliderRef}
                    pagination={{ enabled: false }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        733: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="group w-full h-full bg-[#FFF] rounded-[20px] shadow-sm">
                                <img className="bg-[#EEE] group-hover:shadow-md group-hover:shadow-[#00000040] rounded-[20px] w-full 2xl:h-[262px] md:h-[191px] h-[96px] object-cover" src={image.src} alt={image.title} />
                                <p className="2xl:text-[32px] font-bold text-center mt-3 xl:text-[26px] md:text-[20px] text-[14px] group-hover:text-[#969696]">{image.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute top-1/2 left-0 transform -translate-x-20 -translate-y-1/2 max-md:hidden">
                    <div onClick={handlePrev} className="rounded-full hover:cursor-pointer hover:bg-[#EEE]">
                        <Icon className="text-5xl p-2 font-bold text-[#525252]" icon="akar-icons:chevron-left" />
                    </div>
                </div>

                {/* <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 md:hidden">
                    <div onClick={handlePrev} className="rounded-full hover:cursor-pointer">
                        <Icon className="text-xl font-bold text-[#525252]" icon="akar-icons:chevron-left" />
                    </div>
                </div> */}

                <div className="absolute top-1/2 right-0 transform translate-x-20 -translate-y-1/2 max-md:hidden">
                    <div onClick={handleNext} className="rounded-full hover:cursor-pointer hover:bg-[#EEE]">
                        <Icon className="text-5xl p-2 font-bold text-[#525252]" icon="akar-icons:chevron-right" />
                    </div>
                </div>

                {/* <div className="absolute top-1/2 right-6 transform -translate-y-1/2 md:hidden">
                    <div onClick={handleNext} className="rounded-full hover:cursor-pointer">
                        <Icon className="text-xl font-bold text-[#525252]" icon="akar-icons:chevron-right" />
                    </div>
                </div> */}
            </div>

        </div>
    );
}
