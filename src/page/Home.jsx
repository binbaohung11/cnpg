import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Welcome from '../components/HomePage/Welcome';
import Features from '../components/HomePage/Features';
import Introduction from '../components/HomePage/Introduction';
import MainProducts from '../components/HomePage/MainProducts';
import OtherProduct from '../components/HomePage/OtherProducts';
import WhyChooseUs from '../components/HomePage/WhyChooseUs';
import Present from '../components/HomePage/Present';
import News from '../components/HomePage/News';

const Home = () => {
  const { t } = useTranslation();
  const home = t("Home");
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
    <div className='flex flex-col z-0'>
      <div className='mx-52 max-[1350px]:mx-7'>
        <Welcome home={home} />

        <Introduction home={home} />

        <MainProducts home={home} />

        <OtherProduct home={home} />

        <WhyChooseUs home={home} />

      </div>

      <Present home={home} />

      <News home={home} />
    </div>
  )
}

export default Home
