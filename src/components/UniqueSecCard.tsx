const UniqueSecCard = (props: { svg: any; title: string; para: string }) => {
  return (
    <div className="bg-white rounded-2xl min-h-[400px] w-full max-w-[357px]">
      <div className="flex flex-col px-6 py-[30px]">
        <span>{props.svg}</span>
        <h2 className="text-xl font-bold font-Recharge text-[#0B0A0A] leading-8 mt-[30px]">
          {props.title}
        </h2>
        <p className="text-base font-normal text-[#0B0A0A] font-Poppins opacity-70 mt-[10px]">
          {props.para}
        </p>
      </div>
    </div>
  );
};
export default UniqueSecCard;
