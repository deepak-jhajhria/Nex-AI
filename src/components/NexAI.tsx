import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ellipse } from "./Icons";

export const NexAI = () => {
  const slides: Array<{ id: number; title: string }> = [
    { id: 0, title: "NexAi, Turn on light" },
    { id: 1, title: "NexAi, measure this table" },
    { id: 2, title: "NexAi, set alarm of 5:00 am" },
    { id: 3, title: "NexAi, measure this table" },
    { id: 4, title: "NexAi, Turn on music" },
    { id: 5, title: "NexAi, is the front door locked?" },
    { id: 6, title: "NexAi, Turn of AC." },
  ];
  interface Settings {dots: boolean;infinite: boolean;speed: number;slidesToShow: number;slidesToScroll: number;autoplay: boolean;pauseOnHover: boolean;arrows: boolean;cssEase: string;
    responsive: { breakpoint: number; settings: { slidesToShow: number; } }[];}
    
  const settings: Settings = {dots: false,infinite: true,speed: 3000,slidesToShow: 4,slidesToScroll: 1,autoplay: true,pauseOnHover: true,arrows: false,cssEase: 'ease',
    responsive: [
      { breakpoint: 500, settings: { slidesToShow: 1 } },
      { breakpoint: 540, settings: { slidesToShow: 1.5 } },
      { breakpoint: 826, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1300, settings: { slidesToShow: 4 } },
    ],
  };
  return (
    <div id="nexchat" className="mt-10 sm:mt-20 md:mt-32 lg:mt-[195px] relative overflow-x-clip max-w-[1920px] mx-auto">
        <h2 className="font-Recharge font-bold text-2xl sm:text-3xl md:text-[40px] md:leading-[50px] text-[#02CDCF] text-center px-3 sm:px-0">NexAi does all this. And more.</h2>
        <p className=" font-Poppins font-normal text-sm sm:text-base leading-[25px] text-[#B7B7B7] text-center max-w-[912px] mx-auto mt-2 xs:mt-3 md:mt-4 px-3 sm:px-0"> Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
        <Slider className="pt-8 sm:pt-[50px] md:pt-[80px] nexAI" {...settings} autoplaySpeed={0}>
          {slides.map((slideContent) => (
            <div data-aos="fade-up" data-aos-duration="2000" className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px] px-3 hover:scale-95`} key={slideContent.id}>
              <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                <h2 className="text-lg font-bold leading-9 text-center text-white sm:text-xl lg:text-2xl font-Recharge">{slideContent.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
        <Slider className="nexAI" {...settings} slidesToShow={4.5} rtl={true}>
          {slides.map((slideContent) => (
            <div data-aos="fade-up" data-aos-duration="2000" className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px] px-3 hover:scale-95`} key={slideContent.id}>
              <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                <h2 className="text-lg font-bold leading-9 text-center text-white sm:text-xl lg:text-2xl font-Recharge">{slideContent.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
        <Slider className="nexAI" {...settings} slidesToShow={4.1} autoplaySpeed={0}>
          {slides.map((slideContent) => (
            <div data-aos="fade-up" data-aos-duration="2000" className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px] px-3 hover:scale-95`} key={slideContent.id}>
              <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                <h2 className="text-lg font-bold leading-9 text-center text-white sm:text-xl lg:text-2xl font-Recharge">{slideContent.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
        <Ellipse cName="-top-[10%] -right-[8%]"/>
    </div>
  );
};
