import aiimg from "../assets/png/aiassistantimg.png";
import CommonBtn from "./CommonBtn";
import { Ellipse } from "./Icons";
export const AiAssistant = () => {
  return (
    <div className="relative mt-6 overflow-x-clip sm:mt-12 lg:mt-[100px] min-h-[585px] flex items-center w-full">
      <div className="container max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 items-end">
        <div className="flex justify-center order-2 mt-8 lg:order-1 lg:mt-0"><img className="" src={aiimg} alt="aiimg" /></div>
        <div className="flex flex-col md:max-w-[517px] sm:max-w-[700px] order-1 lg:order-2">
          <h2 className="font-bold font-Recharge text-2xl sm:text-3xl md:text-[40px] sm:leading-[50px] text-[#02CDCF]">Ai-Powered Home Assistant</h2>
          <p className="mt-2 text-sm font-normal text-white sm:mt-4 sm:text-base font-Poppins opacity-70 sm:leading-[25.6px]">Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
          <p className="text-sm sm:text-base font-normal text-white font-Poppins opacity-70 mt-[6px] sm:leading-[25.6px]">Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
          <p className="text-sm sm:text-base font-normal text-white font-Poppins opacity-70 mt-[6px] sm:leading-[25.6px]">assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
          <div className="mt-7 sm:mt-10"><CommonBtn text="Learn More" /></div>
        </div>
      </div>
      <Ellipse cName="top-[38%] left-[10%]"/>
      <Ellipse cName="top-[38%] -right-[10%]"/>
    </div>
  );
};
