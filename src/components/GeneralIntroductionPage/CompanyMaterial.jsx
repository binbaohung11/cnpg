import Product1 from '../../assets/image/introduction/product1.png';
import Product2 from '../../assets/image/introduction/product2.png';

const CompanyMaterial = ({ intro }) => {
    return(
        <div className='mt-8 lg:mt-16 flex flex-col'>
            <p className='font-mainB text-[14px] md:text-[23px] lg:text-[32px] xl:text-[40px] mb-4 lg:mb-8 text-start'>{intro.Material}</p>
            <p className='text-[12px] md:text[15px] lg:text-[20px] xl:text-[24px]'>{intro.MaterialContent}</p>
            <div className='grid lg:grid-cols-2 gap-3 mt-4 lg:mt-8 mb-0 lg:mb-8'>
                <img src={Product1} alt='pro1' className='w-full h-full object-cover rounded-[15px]' />
                <img src={Product2} alt='pro2' className='w-full h-full object-cover rounded-[15px]' />
            </div>
        </div>
    );
}

export default CompanyMaterial;
