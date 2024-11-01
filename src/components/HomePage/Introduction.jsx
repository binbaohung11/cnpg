

export default function Introduction({ home }) {
    return (
        <div className="flex flex-col w-full mt-36 max-md:mt-12">
            <p class="font-mainB xl:text-[40px] md:text-[28px] xs:text-[20px] max-md:text-center mb-3 max-md:mb-2">{home.We}</p>
            <p class="font-mainB xl:text-[24px] md:text-[20px] xs:text-[16px] mb-2 max-md:hidden">{home.Company}</p>
            <div class="flex flex-col w-full mb-4 gap-2 max-md:gap-2 md:hidden">
                <p class="text-[12px] mb-0 text-justify">{home.Intro}</p>
                <div class="grid grid-cols-2 gap-2 h-full w-full">
                    <div class="w-full h-full">
                        <p class="font-mainB text-[14px] text-justify">{home.Established}</p>
                        <p class="text-[12px] text-justify">{home.EstablishedContent}</p>
                    </div>
                    <div class="bg-[#EEEEEE] w-full h-full rounded-[10px] shadow-sm"></div>
                </div>
            </div>
            <div class="flex flex-col gap-2 md:hidden">
                <div className='w-full'>
                    <p class="font-mainB text-[16px] mb-1">{home.Product}</p>
                    <p className="text-[14px] text-justify" dangerouslySetInnerHTML={{ __html: home.ProductContent }}></p>
                </div>
            </div>
            <div class="flex flex-row mb-4 gap-4 max-md:hidden xl:hidden">
                <div className='w-[45%]'>
                    <div class="flex flex-col">
                        <p class="text-[12px] mb-2">{home.Intro}</p>
                        <p class="font-mainB text-[14px] mb-1 text-justify">{home.Established}</p>
                        <p class="text-[12px] text-justify">{home.EstablishedContent}</p>
                    </div>
                </div>
                <div className='w-[65%]'>
                    <div className='grid grid-cols-2 gap-2 h-full w-full'>
                        <div className='bg-[#EEEEEE] w-full h-full rounded-[20px] shadow-sm'></div>
                        <div className='bg-[#EEEEEE] w-full h-full rounded-[20px] shadow-sm'></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-4 max-md:hidden xl:hidden">
                <div className='w-2/5 bg-[#EEEEEE] rounded-[20px]'></div>
                <div className='w-3/5'>
                    <p class="font-mainB text-[16px] mb-1">{home.Product}</p>
                    <p className="text-[14px] text-justify" dangerouslySetInnerHTML={{ __html: home.ProductContent }}></p>
                </div>
            </div>
            <div class="flex flex-row mb-4 gap-4 max-xl:hidden">
                <div className='w-[45%]'>
                    <div class="flex flex-col">
                        <p class="text-[20px] mb-5">{home.Intro}</p>
                        <p class="font-mainB text-[24px] mb-1 text-justify">{home.Established}</p>
                        <p class="text-[20px] text-justify">{home.EstablishedContent}</p>
                    </div>
                </div>
                <div className='w-[65%]'>
                    <div className='grid grid-cols-2 gap-4 h-full w-full'>
                        <div className='bg-[#EEEEEE] w-full h-full rounded-[20px] shadow-sm'></div>
                        <div className='bg-[#EEEEEE] w-full h-full rounded-[20px] shadow-sm'></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-4 max-xl:hidden">
                <div className='w-2/5 bg-[#EEEEEE] rounded-[20px]'></div>
                <div className='w-3/5'>
                    <p class="font-mainB text-[24px] mb-1">{home.Product}</p>
                    <p className="text-[20px] text-justify" dangerouslySetInnerHTML={{ __html: home.ProductContent }}></p>
                </div>
            </div>
        </div>
    );
}
