import PlaceHolder from '../../assets/image/home/placeholder.png';

export default function News({ home }) {
    return (
        <div className='mx-52 max-xl:mx-7 my-36'>
            <p className='font-mainB text-[40px] max-xl:text-[20px] mb-12'>{home.News}</p>
            <div className='grid grid-cols-2 gap-4 h-fit'>
                <div className='h-fit w-full gap-y-12 max-xl:gap-y-3 2xl:pr-36 xl:pr-20 pr-3 flex flex-col'>
                    <div className='group w-full h-full flex flex-row'>
                        <img className='max-xl:hidden group-hover:shadow-xl group-hover:shadow-[#00000040] rounded-full w-[95px] h-[95px] mr-4 object-cover' src={PlaceHolder} alt='alt' />
                        <div className='flex flex-col h-[95px] max-xl:h-[55px] w-full border-b border-[#969696]'>
                            <p className='text-[18px] max-xl:text-[12px] text-[rgb(150,150,150)]'>ngày/tháng/năm</p>
                            <p className='group-hover:text-[#969696] 2xl:text-[32px] xl:text-[28px] text-[16px] font-mainB'>Tiêu đề tin tức</p>
                        </div>
                    </div>
                    <div className='group w-full h-full flex flex-row'>
                        <img className='max-xl:hidden group-hover:shadow-xl group-hover:shadow-[#00000040] rounded-full w-[95px] h-[95px] mr-4 object-cover' src={PlaceHolder} alt='alt' />
                        <div className='flex flex-col h-[95px] max-xl:h-[55px] w-full border-b border-[#969696]'>
                            <p className='text-[18px] max-xl:text-[12px] text-[#969696]'>ngày/tháng/năm</p>
                            <p className='group-hover:text-[#969696] 2xl:text-[32px] xl:text-[28px] text-[16px] font-mainB'>Tiêu đề tin tức</p>
                        </div>
                    </div>
                    <div className='group w-full h-full flex flex-row'>
                        <img className='max-xl:hidden group-hover:shadow-xl group-hover:shadow-[#00000040] rounded-full w-[95px] h-[95px] mr-4 object-cover' src={PlaceHolder} alt='alt' />
                        <div className='flex flex-col h-[95px] max-xl:h-[55px] w-full border-b border-[#969696]'>
                            <p className='text-[18px] max-xl:text-[12px] text-[#969696]'>ngày/tháng/năm</p>
                            <p className='group-hover:text-[#969696] 2xl:text-[32px] xl:text-[28px] text-[16px] font-mainB'>Tiêu đề tin tức</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start py-10 max-xl:py-3 px-14 max-xl:px-7 justify-end h-full w-full rounded-[20px] bg-[url('./assets/image/home/placeholder.png')] bg-cover bg-center">
                    <p className='text-[20px] max-xl:text-[14px] text-[#969696]'>ngày/tháng/năm</p>
                    <p className='text-[40px] max-xl:text-[18px] font-mainB'>Tiêu đề tin tức</p>
                </div>
            </div>
        </div>
    );
}
