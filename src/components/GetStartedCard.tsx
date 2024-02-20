import CommonBtn from "./CommonBtn"
import ellipsedoted from '../assets/png/dotedellipse.png'
import { Ellipse } from "./Icons"

export const GetStartedCard = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="flex flex-col gap-5 sm:flex-row items-center justify-between container max-w-[1140px] mt-20 sm:mt-28 md:mt-40 lg:mt-[243px]">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="flex flex-col mr-2 font-bold font-Recharge text-2xl sm:text-3xl md:text-[40px] text-[#FCFCFC] md:leading-[52px] max-sm:text-center">Ready to get started <span className="text-[#02CDCF]">Talk to us Today </span></h2>
          <CommonBtn text="Get Started"/>
      </div>
      <img className="absolute -bottom-[18%] -right-[1%] max-sm:w-[13%]" src={ellipsedoted} alt="ellipse" />
      <Ellipse cName="-left-[10%] -top-[10%]"/>
    </div>
  )
}
