import bottomshadow from "../assets/png/headerbottomshadow.png";
import CommonBtn from "./CommonBtn";

export const Header = () => {
  return (
    <div className="w-full pt-[10px] px-[30px]">
      <div className="container max-w-[1380px] bg-[url(./assets/png/herobgwithai.png)] bg-no-repeat bg-center bg-[100%,100%] min-h-[745px] flex items-center">
        <div className="w-full max-w-[577px] flex flex-col ml-[120px]">
          <h1 className="font-bold text-white font-Recharge text-[60px] leading-[75px]"><span className="text-[#02CDCF] font-Neuropolitical font-normal mr-4">Nexai</span>is an advanced AI-powered home assistant</h1>
          <p className="mt-4 text-base font-normal text-white font-Poppins opacity-70">Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
          <div className="pt-[51px] -mb-[140px]"><CommonBtn text="Know More" /></div>
        </div>
      </div>
      <img className="-translate-y-1/2 " src={bottomshadow} alt="bottomshadow"/>
    </div>
  );
};
