const CommonBtn = (props: { text: string }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <button className="font-Recharge Btn font-bold text-[#0B0A0A] py-3 sm:py-[18px] px-6 sm:px-8 rounded-xl bg-[#02CDCF] text-base sm:text-lg duration-300 hover:shadow-[0_0_20px_1px_#4FEBF6] hover:text-white text-nowrap">
        {props.text}
      </button>
    </div>
  );
};
export default CommonBtn;
