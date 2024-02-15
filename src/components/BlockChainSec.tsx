import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BlockChainSec = () => {
  const slides: Array<{ id: number; title: string }> = [
    { id: 1, title: "Security and Privacy" },
    { id: 2, title: "Transparent and Reliable Data Management" },
    { id: 3, title: "Self-learning and Personalization" },
    { id: 4, title: "Automated and Transparent Transactions" },
    { id: 5, title: "Security and Privacy" },
    { id: 6, title: "Automated and Transparent Transactions" },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className="mt-[160px] overflow-hidden">
      <h2 className="font-Recharge font-bold text-[40px] leading-[50px] text-[#02CDCF] text-center">Blockchain & AI technology</h2>
      <p className=" font-Poppins font-normal text-[16px] leading-[25px] text-[#B7B7B7] text-center max-w-[997px] mx-auto mt-4">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
      <h2 className=" font-Recharge font-bold text-xl leading-8 text-white max-w-[684px] text-center mx-auto mt-[96px]">By building the software on blockchain, Nexai provides the followingadvantages</h2>
        <Slider className="container pt-[60px] max-w-[1140px]" {...settings}>
          {slides.map((slideContent, index) => (
            <div className={`w-full max-w-[367px] min-h-[367px] bg-[url(./assets/png/poliganblockchain.png)] duration-300 hover:scale-90 ${index % 2 === 0 ? "" : "mt-20"}`} key={slideContent.id}>
              <div className="max-w-[212px] w-full flex justify-center mx-auto mt-[70px] flex-col items-center">
                <span className="shadow-[0_4px_16px_0_#02CDCF99_inset] w-[58px] h-[58px] flex justify-center items-center rounded-full text-white font-bold font-Recharge leading-[51px] text-[32px]">
                  {slideContent.id}
                </span>
                <h2 className="text-xl font-bold leading-8 text-center text-white font-Recharge mt-[30px]">
                  {slideContent.title}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};
