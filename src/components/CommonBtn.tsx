const CommonBtn = (props: { text: string }) => {
  return (
    <button data-aos="fade-up" data-aos-duration="2000" className="font-Recharge Btn font-bold text-[#0B0A0A] py-3 sm:py-[18px] px-6 sm:px-8 rounded-xl bg-[#02CDCF] text-base sm:text-lg">{props.text}</button>
  );
};
export default CommonBtn;
