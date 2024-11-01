import Structure from '../../assets/image/introduction/structure.png';

const CompanyStructure = ({ intro }) => {
    return (
        <div className='grid xl:grid-cols-2 gap-8 mt-8 lg:mt-16 mb-0 lg:mb-8'>
            <div className='flex flex-col justify-center w-full h-full'>
                <p className='font-mainB text-[14px] md:text-[23px] lg:text-[32px] xl:text-[40px] mb-4 lg:mb-8 text-start'>{intro.Structure}</p>
                <p className='text-[12px] md:text[15px] lg:text-[20px] xl:text-[24px]' dangerouslySetInnerHTML={{ __html: intro.StructureContent }} />
            </div>
            <img src={Structure} alt='structure' className='w-full object-cover rounded-[15px]' />
        </div>
    );
}

export default CompanyStructure;
