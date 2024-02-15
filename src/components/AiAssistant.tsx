import aiimg from "../assets/png/aiassistantimg.png";
import CommonBtn from "./CommonBtn";
export const AiAssistant = () => {
  return (
    <div className="relative ">
      <div className="container max-w-[1240px] grid grid-cols-2 items-end py-[76px]">
        <div><img src={aiimg} alt="aiimg" /></div>
        <div className="flex flex-col max-w-[517px]">
          <h2 className="font-bold font-Recharge text-[40px] leading-[50px] text-[#02CDCF]">Ai-Powered Home Assistant</h2>
          <p className="mt-4 text-base font-normal text-white font-Poppins opacity-70">Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
          <p className="text-base font-normal text-white font-Poppins opacity-70 mt-[6px]">Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
          <p className="text-base font-normal text-white font-Poppins opacity-70 mt-[6px]">assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
          <div className="mt-10"><CommonBtn text="Learn More" /></div>
        </div>
      </div>
    </div>
  );
};
