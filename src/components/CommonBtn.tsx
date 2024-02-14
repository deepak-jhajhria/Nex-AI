const CommonBtn = (props: { text: string }) => {
  return (
    <button className="font-Recharge font-bold text-[#0B0A0A] py-[18px] px-8 rounded-xl bg-[#02CDCF]">
      {props.text}
    </button>
  );
};
export default CommonBtn;
