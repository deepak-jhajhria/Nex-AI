import { Ellipse, FacebookIcon, TelegramIcon, TwitterIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer className="w-full sm:min-h-[492px] bg-[url(./assets/images/footerbg.webp)] bg-center bg-cover bg-no-repeat mt-[89px] relative overflow-x-clip">
      <div className="container max-w-[1140px] pt-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-8 sm:pt-16 md:pt-[90px] lg:pt-[150px]">
          <div className="flex flex-col md:col-span-2 max-w-[356px]">
            <p className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70">
              Nullam viverra natoque amet et sed scelerisque viverra fringilla
              platea. Ullamcorper.
            </p>
            <div className="flex items-center gap-3 mt-3 sm:mt-5">
              <a className="duration-300 hover:-translate-y-2" href="http://facebook.com" target="_blank" rel="noopener noreferrer"><span><FacebookIcon /></span></a>
              <a className="duration-300 hover:-translate-y-2" href="http://Twitter.com" target="_blank" rel="noopener noreferrer"><span><TwitterIcon /></span></a>
              <a className="duration-300 hover:-translate-y-2" href="http://Telegram.com" target="_blank" rel="noopener noreferrer"><span><TelegramIcon /></span></a>
            </div>
          </div>
          <div className="flex justify-between mt-7 xs:mt-10 md:-ml-10 md:-mt-9 lg:ml-0">
            <ul className="flex flex-col gap-2 sm:gap-[14px]">
              <li className="text-base font-bold text-white sm:text-lg font-Recharge">Quick links</li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="#home">Home</a></li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="#">Features</a></li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="#marketplace">Marketplace</a></li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="#token">Tokens</a></li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="#nexchat">NexChat</a></li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="#about">About</a></li>
            </ul>
            <ul className="flex flex-col gap-2 sm:gap-[14px]">
              <li className="text-base font-bold text-white sm:text-lg font-Recharge">Information's</li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="/">Contact</a></li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="/">Phone</a></li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="/">terms</a></li>
              <li><a className="text-sm font-bold text-white sm:text-base font-Recharge opacity-70 duration-300 hover:opacity-100 hover:text-[#02CDCF]" href="/">Privacy</a></li>
            </ul>
          </div>
        </div>
      <p className="py-3 sm:py-[18] text-sm sm:text-base font-bold text-white font-Recharge opacity-70 mt-[28px] text-center border-t-[#6A6F6F] border-t-[2px]">@Copyright.nexai</p>
      </div>
      <Ellipse cName="-right-[10%] -top-[20%]"/>
    </footer>
  );
};
