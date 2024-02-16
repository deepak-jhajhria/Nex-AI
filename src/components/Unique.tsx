import { UniSecIconFirst, UniSecIconFourth, UniSecIconSecond, UniSecIconThird,} from "./Icons";
import UniqueSecCard from "./UniqueSecCard";

export const UniqueSec = () => {
  return (
    <div className="border border-[#FCFCFC] rounded-[32px] min-h-[800px] mx-[50px] mt-[120px] bg-[url(./assets/png/uniquesecbg.png)] bg-blend-hue bg-no-repeat bg-cover bg-center">
      <div className="container max-w-[1140px] relative">
        <h2 className="font-bold font-Recharge text-[40px] leading-[50px] text-[#FCFCFC] text-center mt-20">Unique features</h2>
        <p className="text-base font-normal text-white text-center max-w-[397px] mx-auto font-Poppins opacity-70 mt-[10px]">ability to engage in natural, fluent conversations in over 15 languages,</p>
        <div className="grid justify-between w-full grid-cols-2 mt-20 h-[546px] overflow-y-scroll">
          <div>
            <UniqueSecCard svg={<UniSecIconFirst />} title="Remote Access and File Management" para=" Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. "/>
          </div>
          <div className="mt-[300px] flex justify-end">
            <UniqueSecCard svg={<UniSecIconSecond />} title="Real-time Home Monitoring" para="While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. "/>
          </div>
          <div className="-mt-[100px]">
            <UniqueSecCard svg={<UniSecIconThird />} title="Autonomous and Natural Language Communication" para="Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend,"/>
          </div>
          <div className="mt-[200px] flex justify-end">
            <UniqueSecCard svg={<UniSecIconFourth />} title="Intelligent Contextual Awareness" para="Nexai utilizes the hardware sensors placed throughout your home to understand your location and deliver relevant information or actions. For instance, if you're in the bedroom and there's a smart TV present, Nexai will automatically display on the TV screen. "/>
          </div>
        </div>
      </div>
    </div>
  );
};
