import Infras from '../../assets/image/introduction/infrastructure.png';
import Facility1 from '../../assets/image/introduction/facility1.png';
import Facility2 from '../../assets/image/introduction/facility2.png';
import Facility3 from '../../assets/image/introduction/facility3.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useCallback, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react/dist/iconify.js';

const images = [
    Infras,
    Facility1,
    Facility2,
    Facility3
];

const CompanyInfrastructure = ({ intro }) => {
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
        <div>
            <p className='mt-8 lg:mt-16 font-mainB text-[14px] md:text-[23px] lg:text-[32px] xl:text-[40px] mb-4 lg:mb-8 text-start'>{intro.Infrastructure}</p>
            <div className='flex flex-col gap-0 lg:gap-2 mt-4 lg:mt-8 mb-0 lg:mb-8'>
                <div className='flex flex-col w-full text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] mb-4 lg:mb-8'>
                    <p dangerouslySetInnerHTML={{ __html: intro.InfrastructureContent1 }} />
                    <ul className='ml-6 md:ml-7 lg:ml-9 xl:ml-11 list-disc'>
                        {intro.InfrastructureList.split('.').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: intro.InfrastructureContent2 }} />
                </div>
                <div className="w-full h-full relative">
                    <Swiper
                        ref={sliderRef}
                        pagination={{ enabled: false }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        modules={[Pagination, Navigation]}
                        loop={true}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className='rounded-[15px]'>
                                <img key={index} src={image} alt='infras' className='w-full h-full object-cover rounded-[15px]' />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute top-1/2 left-0 transform -translate-x-20 -translate-y-1/2 max-md:hidden">
                        <div onClick={handlePrev} className="rounded-full hover:cursor-pointer hover:bg-[#EEE]">
                            <Icon className="text-5xl p-2 font-bold text-[#525252]" icon="akar-icons:chevron-left" />
                        </div>
                    </div>

                    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 md:hidden">
                        <div onClick={handlePrev} className="rounded-full hover:cursor-pointer">
                            <Icon className="text-xl font-bold text-[#525252]" icon="akar-icons:chevron-left" />
                        </div>
                    </div>

                    <div className="absolute top-1/2 right-0 transform translate-x-20 -translate-y-1/2 max-md:hidden">
                        <div onClick={handleNext} className="rounded-full hover:cursor-pointer hover:bg-[#EEE]">
                            <Icon className="text-5xl p-2 font-bold text-[#525252]" icon="akar-icons:chevron-right" />
                        </div>
                    </div>

                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 md:hidden">
                        <div onClick={handleNext} className="rounded-full hover:cursor-pointer">
                            <Icon className="text-xl font-bold text-[#525252]" icon="akar-icons:chevron-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyInfrastructure;
