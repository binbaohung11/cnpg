import { Icon } from "@iconify/react/dist/iconify.js";


export default function Features({ home }) {
    return (
        <div className="w-full">
            <div className="lg:hidden md:mt-11 flex flex-col h-fit gap-2 z-20 relative">
                <div className="flex flex-row justify-between items-center px-5 w-full h-fit py-7 rounded-[10px] bg-[#EEEEEE] shadow-sm">
                    <div className="flex flex-col w-full mr-4">
                        <p className="font-mainB text-[16px] mb-1">{home.Box1}</p>
                        <p className="text-[12px] text-justify">{home.Box1Content}</p>
                    </div>
                    <Icon className="text-[#39444D] text-5xl" icon="mdi:recycle" />
                </div>
                <div className="flex flex-row justify-between items-center px-5 w-full h-fit py-7 rounded-[10px] bg-[#EEEEEE] shadow-sm">
                    <div className="flex flex-col w-full mr-4">
                        <p className="font-mainB text-[16px] mb-1">{home.Box2}</p>
                        <p className="text-[12px] text-justify">{home.Box2Content}</p>
                    </div>
                    <Icon className="text-[#39444D] text-5xl" icon="mingcute:safety-certificate-fill" />
                </div>
                <div className="flex flex-row justify-between items-center px-5 w-full h-fit py-7 rounded-[10px] bg-[#EEEEEE] shadow-sm">
                    <div className="flex flex-col w-full mr-4">
                        <p className="font-mainB text-[16px] mb-1">{home.Box3}</p>
                        <p className="text-[12px] text-justify">{home.Box3Content}</p>
                    </div>
                    <Icon className="text-[#39444D] text-5xl" icon="ant-design:product-filled" />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 h-fit mt-4 z-20 relative max-lg:hidden'>
                <div className="flex flex-col w-full h-full p-10 rounded-[10px] bg-[#EEEEEE] shadow-sm">
                    <div className="flex justify-end w-full">
                        <Icon className="text-[#39444D] text-5xl" icon="mdi:recycle" />
                    </div>
                    <p className="font-mainB text-[24px] mt-3 mb-1">{home.Box1}</p>
                    <p className="text-[16px] text-justify">{home.Box1Content}</p>
                </div>
                <div className="flex flex-col w-full h-full p-10 rounded-[10px] bg-[#EEEEEE] shadow-sm">
                    <div className='flex justify-end w-full'>
                        <Icon className='text-[#39444D] text-5xl' icon="mingcute:safety-certificate-fill" />
                    </div>
                    <p className='font-mainB text-[24px] mt-3 mb-1'>{home.Box2}</p>
                    <p className='text-[16px] text-justify'>{home.Box2Content}</p>
                </div>
                <div className="flex flex-col w-full h-full p-10 rounded-[10px] bg-[#EEEEEE] shadow-sm">
                    <div className='flex justify-end w-full'>
                        <Icon className='text-[#39444D] text-5xl' icon="ant-design:product-filled" />
                    </div>
                    <p className='font-mainB text-[24px] mt-3 mb-1'>{home.Box3}</p>
                    <p className='text-[16px] text-justify'>{home.Box3Content}</p>
                </div>
            </div>
        </div>
    );
}
