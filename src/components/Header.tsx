import bottomshadow from "../assets/png/headerbottomshadow.png";
import CommonBtn from "./CommonBtn";
import AiGif from '../assets/png/headergif.gif'
export const Header = () => {
  return (
    <div className="w-full sm:pt-[10px] sm:px-[20px]">
      <div className="container max-w-[1380px] max-sm:flex-col sm:bg-[url(./assets/png/herobgwithai.png)] bg-no-repeat bg-left sm:min-h-[453px] md:min-h-[745px] flex sm:items-center">
        <div className="w-full max-w-[400px] sm:max-w-[577px]  flex flex-col xl:ml-[120px] max-sm:mt-6">
          <h1 data-aos="fade-up" data-aos-duration="2000" className="font-bold text-white font-Recharge text-3xl sm:text-[50px] lg:text-[60px] sm:leading-[60px] lg:leading-[75px]"><span className="text-[#02CDCF]  font-normal mr-4">Nexai</span>is an advanced AI-powered home assistant</h1>
          <p data-aos="fade-up" data-aos-duration="2000" className="text-sm font-normal text-white sm:mt-2 sm:text-base lg:mt-4 font-Poppins opacity-70">Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
          <div data-aos="fade-up" data-aos-duration="2000" className="mt-8 sm:mt-[51px] sm:-mb-[60px] lg:-mb-[140px]"><CommonBtn text="Know More" /></div>
        </div>
        <img data-aos="fade-up" data-aos-duration="2000" className="mt-8 sm:hidden" src={AiGif} alt="" />
      </div>
      <img className="-translate-y-1/2 sm:hidden" src={bottomshadow} alt="bottomshadow"/>
    </div>
  );
};
