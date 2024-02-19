import AI from '../assets/images/AI-img.webp'
import CommonBtn from './CommonBtn'
const NexAiCard = () => {
    return (
        <div className='px-3 mt-12 xs:mt-16 sm:mt-20 md:mt-[110px] lg:mt-[140px] overflow-x-clip'>
            <div className="container min-h-[810px] max-w-[1340px] flex items-center px-4 sm:px-8 md:px-10 py-6 sm:py-10 md:py-16 lg:pl-[100px] border border-white rounded-3xl bg-[url('./assets/png/uniqueseccard.png')] bg-no-repeat bg-cover bg-center">
                <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-11">
                    <div data-aos="fade-up" data-aos-duration="1000" className='lg:max-w-[564px] flex flex-col items-start'>
                        <h2 data-aos="fade-up" data-aos-duration="2000" className='text-2xl sm:text-3xl md:text-[40px] font-Recharge font-bold md:leading-[50px] text-[#02CDCF]'>What is NexAi?</h2>
                        <p data-aos="fade-up" data-aos-duration="2000" className='text-xs xs:text-sm sm:text-base font-Poppins font-normal leading-5 sm:leading-[25px] text-[#B7B8BB] mt-1 xs:mt-3 md:mt-4 mb-1 xs:mb-2'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                        <p data-aos="fade-up" data-aos-duration="2000" className='text-xs xs:text-sm sm:text-base font-Poppins font-normal leading-5 sm:leading-[25px] text-[#B7B8BB] mb-6 sm:mb-10'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                        <CommonBtn text='Learn More' />
                    </div>
                    <div className='relative flex max-lg:justify-center'>
                        <span data-aos="fade-up" data-aos-duration="2000" className='bg-[#02CDCF] w-full h-[363px] max-w-[363px] blur-[280px] absolute right-0 top-0 z-0'></span>
                        <img data-aos="fade-up" data-aos-duration="2000" className='max-w-[468px] mix-blend-lighten max-h-[463px] w-full' src={AI} alt="AI-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NexAiCard