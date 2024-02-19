const UniqueSecCard = (props: { svg: any; title: string; para: string }) => {
  return (
    <div className="bg-white rounded-2xl lg:min-h-[400px] w-full sm:max-w-[357px]">
      <div className="flex flex-col px-5 md:px-6 py-6 md:py-[30px]">
        <span>{props.svg}</span>
        <h2 className="text-lg lg:text-xl font-bold font-Recharge text-[#0B0A0A] md:leading-8 mt-5 md:mt-[30px]">
          {props.title}
        </h2>
        <p className="text-sm lg:text-base font-normal text-[#0B0A0A] font-Poppins opacity-70 mt-[10px] max-lg:pb-5">
          {props.para}
        </p>
      </div>
    </div>
  );
};
export default UniqueSecCard;
