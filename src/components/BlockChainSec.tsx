import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ellipse } from "./Icons";
import ellipsedoted from '../assets/images/dotedellipse.webp'
import ellipsedotedleft from '../assets/images/dotedellipseleft.webp'
export const BlockChainSec = () => {
  const slides: Array<{ id: number; title: string }> = [
    { id: 1, title: "Security and Privacy" },
    { id: 2, title: "Transparent and Reliable Data Management" },
    { id: 3, title: "Self-learning and Personalization" },
    { id: 4, title: "Automated and Transparent Transactions" },
    { id: 5, title: "Security and Privacy" },
    { id: 6, title: "Automated and Transparent Transactions" },
  ];
  const settings = { dots: false, infinite: true, speed: 3000, slidesToShow: 3.2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, pauseOnHover: true, arrows: false,responsive: [
    {breakpoint: 457,settings: {slidesToShow: 1,},},
    {breakpoint: 540,settings: {slidesToShow: 1.5,},},
    {breakpoint: 600,settings: {slidesToShow: 1.8,},},
    {breakpoint: 1200,settings: {slidesToShow: 2,},},
    {breakpoint: 1400,settings: {slidesToShow: 3,},},
    ],};
  return (
    <div id="marketplace" className="mt-12 xs:mt-16 sm:mt-20 md:mt-[110px] lg:mt-[153px] overflow-x-clip container max-w-[1920px] relative">
      <h2 className="font-Recharge font-bold text-2xl sm:text-3xl md:text-[40px] md:leading-[50px] text-[#02CDCF] text-center">Blockchain & AI technology</h2>
      <p className=" font-Poppins font-normal text-sm sm:text-base text-[#B7B7B7] text-center max-w-[997px] mx-auto mt-2 xs:mt-3 md:mt-4 sm:leading-[25.6px]">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
      <h2 className=" font-Recharge font-bold text-base sm:text-xl leading-8 text-white max-w-[684px] text-center mx-auto mt-6 sm:mt-10 md:mt-[60px] lg:mt-[102px]">By building the software on blockchain, Nexai provides the followingadvantages</h2>
        <Slider className="lg:ml-[10%] pt-8 sm:pt-10 md:pt-[67px] max-lg:container !max-w-[1340px] 2xl:max-w-[1440px]" {...settings}>
          {slides.map((slideContent, index) => (
            <div data-aos="fade-up" data-aos-duration="1000" className={`w-full max-w-[280px] min-h-[280px] sm:max-w-[300px] sm:min-h-[300px] md:max-w-[367px] md:min-h-[367px] bg-[url(./assets/png/poliganblockchain.png)] bg-cover bg-center bg-no-repeat md:bg-[100%,100%] duration-300 hover:scale-90 ${index % 2 === 0 ? "" : "mt-10 sm:mt-16 md:mt-[113px]"}`} key={slideContent.id}>
              <div className="max-w-[212px] w-full flex justify-center mx-auto mt-[50px] md:mt-[70px] flex-col items-center">
                <span className="shadow-[0_4px_16px_0_#02CDCF99_inset] w-[58px] h-[58px] flex justify-center items-center rounded-full text-white font-bold font-Recharge leading-[51px] text-[32px]">
                  {slideContent.id}
                </span>
                <h2 className="text-lg md:text-xl font-bold lg:leading-8 text-center text-white font-Recharge mt-5 md:mt-[30px]">
                  {slideContent.title}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
        <Ellipse cName="top-[40%] -left-[10%]"/>
        <Ellipse cName="top-[10%] -right-[13%]"/>
        <img className="absolute top-0 right-0 max-sm:w-[13%]" src={ellipsedoted} alt="ellipse" />
        <img className="absolute left-0 -bottom-[26%] max-sm:w-[13%]" src={ellipsedotedleft} alt="ellipse" />
    </div>
  );
};
