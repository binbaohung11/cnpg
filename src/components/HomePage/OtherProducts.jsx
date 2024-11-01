
export default function OtherProduct({ home }) {
    return (
        <div className="flex flex-col w-full mt-36 max-md:mt-12">
            <p class="font-mainB xl:text-[40px] md:text-[28px] xs:text-[20px] xl:mb-12 xs:mb-8 xl:text-start xs:text-center">{home.OtherProduct}</p>
            <div className="w-full h-full">
                <div className='grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-3 lg:gap-4'>
                    <div className='group h-fit w-full'>
                        <img className="bg-[#EEE] group-hover:shadow-md group-hover:shadow-[#00000040] rounded-[20px] w-full 2xl:h-[262px] md:h-[191px] xs:h-[96px] object-cover" src='https://picsum.photos/id/237/600/400' alt='alt' />
                        <p className="2xl:text-[32px] font-bold text-center mt-3 xl:text-[26px] md:text-[20px] xs:text-[14px] group-hover:text-[#969696]">Dừa Trái</p>
                    </div>
                    <div className='group h-fit w-full'>
                        <img className="bg-[#EEE] group-hover:shadow-md group-hover:shadow-[#00000040] rounded-[20px] w-full 2xl:h-[262px] md:h-[191px] xs:h-[96px] object-cover" src='https://picsum.photos/id/237/600/400' alt='alt' />
                        <p className="2xl:text-[32px] font-bold text-center mt-3 xl:text-[26px] md:text-[20px] xs:text-[14px] group-hover:text-[#969696]">Hạt Điều Rang Muối</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
