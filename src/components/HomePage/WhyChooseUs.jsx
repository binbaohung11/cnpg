
export default function WhyChooseUs({ home }) {
    const reason1 = [
        { id: 1, title: home.SmellFree, content: home.SmellFreeContent },
        { id: 2, title: home.SmokeFree, content: home.SmokeFreeContent },
        { id: 3, title: home.Temperature, content: home.TemperatureContent },
        { id: 4, title: home.Concentration, content: home.ConcentrationContent },
        { id: 5, title: home.BurnTime, content: home.BurnTimeContent },
    ];

    const reason2 = [
        { id: 6, title: home.HealthProtect, content: home.HealthProtectContent },
        { id: 7, title: home.EnvironmentFriendly, content: home.EnvironmentFriendlyContent },
    ]

    return (
        <div className='flex flex-col bg-[#EEEEEE] w-full p-16 max-xl:p-6 mt-36 max-xl:mt-12 rounded-[20px] shadow-sm'>
            <p className='font-mainB text-[#39444D] text-center text-[40px] max-xl:text-[20px] mb-16 max-xl:mb-1'>{home.WhyChooseUs}</p>

            <div class="h-[300px] [&::-webkit-scrollbar]:[width:8px] [&::-webkit-scrollbar]:bg-[#E1E1E1] [&::-webkit-scrollbar-thumb]:bg-[#969696] [&::-webkit-scrollbar-thumb]:h-[52px] [&::-webkit-scrollbar-thumb]:rounded-[10px] [&::-webkit-scrollbar]:rounded-[10px] overflow-x-hidden overflow-scroll xl:hidden">
                {[...reason1, ...reason2].map((item, index) => (
                    <div key={index} className='flex pr-3 justify-start items-center flex-row w-full h-fit my-3'>
                        <div className="w-[28px] h-[25px] rounded-full inline-flex items-center justify-center mr-1.5 bg-[#639F7A]">
                            <p className='text-[14px] text-white'>{item.id}</p>
                        </div>
                        <div className='flex flex-col w-full'>
                            <p className='font-mainB text-[16px] text-[#639F7A]'>{item.title}</p>
                            <p className='text-[12px] text-justify'>{item.content}</p>
                        </div>
                    </div>
                ))}
                <div className='w-full h-full mt-3 px-3'>
                    <iframe
                        className="w-full h-full rounded-[15px]"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className='grid grid-cols-2 h-fit gap-28 max-xl:hidden'>
                <div className='flex flex-col w-full h-fit pb-4'>
                    {reason1.map((item, index) => (
                        <div key={index} className='flex justify-start items-center flex-row w-full h-fit my-5'>
                            <div className="w-[34px] h-[34px] rounded-full inline-flex items-center justify-center mr-3 bg-[#639F7A]">
                                <p className='text-[20px] text-white font-bold'>{item.id}</p>
                            </div>
                            <div className='flex flex-col w-full'>
                                <p className='font-mainB text-[24px] text-[#639F7A]'>{item.title}</p>
                                <p className='text-[20px] text-justify'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col w-full h-full'>
                    {reason2.map((item, index) => (
                        <div key={index} className='flex justify-start items-center flex-row w-full h-fit my-5'>
                            <div className="w-[34px] h-[34px] rounded-full inline-flex items-center justify-center mr-3 bg-[#639F7A]">
                                <p className='text-[20px] text-white font-bold'>{item.id}</p>
                            </div>
                            <div className='flex flex-col w-full'>
                                <p className='font-mainB text-[24px] text-[#639F7A]'>{item.title}</p>
                                <p className='text-[20px] text-justify'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                    <div className='w-full h-full mt-3 ml-3'>
                        <iframe
                            className="w-full h-full rounded-[15px]"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
