import Facility1 from '../../assets/image/introduction/facility1.png';
import Facility2 from '../../assets/image/introduction/facility2.png';
import Facility3 from '../../assets/image/introduction/facility3.png';

const CompanyOverview = ({ intro }) => {
    return (
        <div>
            <p className='font-mainB text-[14px] md:text-[23px] lg:text-[32px] xl:text-[40px] mb-4 lg:mb-8 text-start'>{intro.Title}</p>
            <p className='text-[12px] md:text[15px] lg:text-[20px] xl:text-[24px]' dangerouslySetInnerHTML={{ __html: intro.Content }} />
            <div className='grid lg:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-8 mb-0 lg:mb-8'>
                <img src={Facility1} alt='facility1' className='w-full h-full object-cover rounded-[15px]' />
                <div className='flex flex-col w-full font-mainB text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] mb-4 lg:mb-8'>
                    <p className=''>{intro.ListTitle}</p>
                    <ul className='ml-6 md:ml-7 lg:ml-9 xl:ml-11 list-disc'>
                        {[...Array(8)].map((_, index) => (
                            <li key={index}>{intro[`ListItem${index + 1}`]}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className='text-[12px] md:text[15px] lg:text-[20px] xl:text-[24px]' dangerouslySetInnerHTML={{ __html: intro.Content2 }} />
            <div className='grid lg:grid-cols-2 gap-3 mt-4 lg:mt-8 mb-0 lg:mb-8'>
                <img src={Facility2} alt='facility1' className='w-full h-full object-cover rounded-[15px]' />
                <img src={Facility3} alt='facility1' className='w-full h-full object-cover rounded-[15px]' />
            </div>
        </div>
    );
}

export default CompanyOverview;
