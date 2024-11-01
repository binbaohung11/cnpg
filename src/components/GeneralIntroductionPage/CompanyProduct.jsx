import Product1 from '../../assets/image/introduction/product1.png';
import Product2 from '../../assets/image/introduction/product2.png';
import Product3 from '../../assets/image/introduction/product3.png';

const CompanyProduct = ({ intro }) => {
    return (
        <div>
            <p className='mt-8 lg:mt-16 font-mainB text-[14px] md:text-[23px] lg:text-[32px] xl:text-[40px] mb-4 lg:mb-8 text-start'>{intro.Product}</p>
            <div className='flex flex-col xl:flex-row gap-4 lg:gap-6 mt-4 lg:mt-8 mb-0 xl:mb-8 w-full'>
                <div className='xl:w-3/5 w-full h-full'>
                    <p className='text-[12px] md:text-[15px] lg:text-[20px] xl:text-[24px]' dangerouslySetInnerHTML={{ __html: intro.ProductContent }} />
                </div>
                <div className='xl:w-2/5 w-full max-xl:grid max-xl:grid-cols-2 max-xl:gap-3'>
                    <img src={Product1} alt='facility1' className='w-full h-full object-cover rounded-[15px]' />
                    <img src={Product2} alt='facility1' className='xl:hidden h-full object-cover rounded-[15px]' />
                </div>
            </div>
            <div className='grid xl:grid-cols-2 gap-3 mt-3 xl:mt-8 mb-0 lg:mb-8'>
                <img src={Product2} alt='pro1' className='max-xl:hidden w-full h-full object-cover rounded-[15px]' />
                <img src={Product3} alt='pro3' className='w-full h-full object-cover rounded-[15px]' />
            </div>
        </div>
    );
}

export default CompanyProduct;
