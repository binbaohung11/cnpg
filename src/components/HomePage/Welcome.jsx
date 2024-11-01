import { Icon } from '@iconify/react/dist/iconify.js';
import Certification from '../../assets/image/home/certification.png';
import Features from './Features';


export default function Welcome({ home }) {
    return (
        <div className="relative flex flex-row mt-12 max-lg:mt-2 font-mainR">
            <div className='flex flex-col mt-14 max-lg:mt-5 w-full z-10'>
                <div className='w-1/2 mb-52 max-lg:mb-12'>
                    <p className='font-mainB lg:text-[40px] leading-[0.5rem] max-xs:text-[10px] xs:text-[12px] sm:text-[16px]'>{home.Title}</p>
                    <p className='font-mainB text-[64px] max-lg:text-[24px] text-[#639F7A]'>HIGHLANDBP</p>
                    <p className='text-[20px] max-lg:text-[12px] mt-1 mb-4 text-justify'>{home.Content}</p>
                    <button className='bg-transparent border border-[#39444D] hover:bg-[#E1E1E1] hover:border-transparent hover:shadow-[#00000080] hover:shadow-sm hover:text-[#525252] font-mainB max-lg:text-[16px] text-[20px] w-fit text-[#0B0B0B] px-10 max-lg:px-5 py-2 max-lg:py-1.5 rounded-full'>
                        {home.SeeMore}
                    </button>
                </div>

                <Features home={home} />
            </div>

            <div className='absolute top-0 right-28 max-lg:right-0 z-0 -translate-y-4 max-lg:translate-y-6 max-lg:-translate-x-8 rotate-15 shadow-lg'>
                <img className='origin-top-right max-xs:hidden lg:w-[310px] lg:h-[485px] md:w-[150px] md:h-[200px] xs:w-[100px] xs:h-[150px]' src={Certification} alt='placeholder' />
            </div>
        </div>
    );
}
