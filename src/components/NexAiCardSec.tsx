import AI from '../assets/png/AI-img.png'
import CommonBtn from './CommonBtn'
const NexAiCard = () => {
    return (
        <div className='px-3 mt-[160px]'>
            <div className="mx-auto max-w-[1350px] pb-[174px] pt-[163px] ps-[100px] border border-white rounded-3xl bg-[url('./assets/png/nexAiCard.gif')] ">
                <div className="grid grid-cols-2 gap-11">
                    <div>
                        <h2 className='text-[40px] font-Recharge font-bold leading-[50px] text-[#02CDCF]'>What is NexAi?</h2>
                        <p className='text-base font-Poppins font-normal leading-[25px] text-[#B7B8BB] max-w-[564px] pt-4 pb-2'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                        <p className='text-base font-Poppins font-normal leading-[25px] text-[#B7B8BB] max-w-[564px] pb-10'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                        <CommonBtn text='Learn More' />
                    </div>
                    <div className='relative'>
                        <div className='bg-[#02CDCF] h-[463px] w-[463px] blur-[180px] absolute right-0 top-0 animate-pulse '></div>
                        <img className='max-w-[463px] mix-blend-lighten max-h-[463px]' src={AI} alt="AI-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NexAiCard