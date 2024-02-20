import { Ellipse, UniSecIconFirst, UniSecIconFourth, UniSecIconSecond, UniSecIconThird,} from "./Icons";
import UniqueSecCard from "./UniqueSecCard";
import glob from '../assets/png/uniquesecai.png'
export const UniqueSec = () => {
  return (
    <div className="px-3 md:px-8 lg:px-[50px]">
      <div className="border border-[#FCFCFC] rounded-3xl sm:rounded-[32px] min-h-[550px] md:min-h-[700px] xl:min-h-[800px] mt-12 sm:mt-16 md:mt-[90px] lg:mt-[155px] bg-[#0F1010] max-w-[1340px] container overflow-hidden relative">
        <div className=" max-w-[1140px] relative flex flex-col justify-between mx-auto z-10">
          <div className="flex flex-col">
            <h2 data-aos="fade-up" data-aos-duration="2000" className="font-bold font-Recharge text-2xl sm:text-3xl md:text-[40px] sm:leading-[50px] text-[#FCFCFC] text-center mt-8 sm:mt-12 xl:mt-20">Unique features</h2>
            <p data-aos="fade-up" data-aos-duration="2000" className=" text-sm sm:text-base font-normal text-white text-center max-w-[403px] mx-auto font-Poppins opacity-70 mt-2 sm:mt-[10px] px-2">ability to engage in natural, fluent conversations in over 15 languages,</p>
          </div>
          <div className="grid justify-between w-full gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 mt-8 sm:mt-12 xl:mt-20 h-[542px] overflow-y-scroll sm:px-6 2xl:px-0">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
              <UniqueSecCard svg={<UniSecIconFirst />} title="Remote Access and File Management" para=" Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. "/>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" className="sm:mt-[300px] flex justify-end">
              <UniqueSecCard svg={<UniSecIconSecond />} title="Real-time Home Monitoring" para="While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. "/>
            </div>
            <div className="sm:-mt-[100px]">
              <UniqueSecCard svg={<UniSecIconThird />} title="Autonomous and Natural Language Communication" para="Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend,"/>
            </div>
            <div className="sm:mt-[200px] flex justify-end">
              <UniqueSecCard svg={<UniSecIconFourth />} title="Intelligent Contextual Awareness" para="Nexai utilizes the hardware sensors placed throughout your home to understand your location and deliver relevant information or actions. For instance, if you're in the bedroom and there's a smart TV present, Nexai will automatically display on the TV screen. "/>
            </div>
          </div>
        </div>
        <img className="absolute top-[30%] left-1/2 -translate-x-1/2" src={glob} alt="glob" />
        <Ellipse cName="bottom-0 -left-[10%]"/>
        <Ellipse cName="top-[10%] -right-[10%]"/>
      </div>
    </div>
  );
};
