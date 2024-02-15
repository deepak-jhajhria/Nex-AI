import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {dots:false,infinite:true,speed:3000,slidesToShow:4,slidesToScroll:1,autoplay:true,pauseOnHover:true,arrows:false,cssEase:'ease'};
  return (
    <div className="mt-[200px]">
        <h2 className="font-Recharge font-bold text-[40px] leading-[50px] text-[#02CDCF] text-center">NexAi does all this. And more.</h2>
        <p className=" font-Poppins font-normal text-[16px] leading-[25px] text-[#B7B7B7] text-center max-w-[912px] mx-auto mt-4"> Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
        <Slider className="pt-[70px] nexAI" {...settings} autoplaySpeed={0}>
          {slides.map((slideContent) => (
            <div className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px]`} key={slideContent.id}>
              <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                <h2 className="text-2xl font-bold leading-9 text-center text-white font-Recharge">{slideContent.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
        <Slider className="nexAI" {...settings} slidesToShow={4.5} autoplaySpeed={0}>
          {slides.map((slideContent) => (
            <div className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px]`} key={slideContent.id}>
              <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                <h2 className="text-2xl font-bold leading-9 text-center text-white font-Recharge">{slideContent.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
        <Slider className="nexAI" {...settings} slidesToShow={4.1} autoplaySpeed={0}>
          {slides.map((slideContent) => (
            <div className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px]`} key={slideContent.id}>
              <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                <h2 className="text-2xl font-bold leading-9 text-center text-white font-Recharge">{slideContent.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};
