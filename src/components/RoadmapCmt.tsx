
export const RoadmapCmt = (props: { title: string; para:string;cName:string }) => {
  return (
    <div className={`relative flex flex-col gap-3 sm:gap-4 pl-12 sm:pl-20 before:absolute before:bg-white before:w-6 before:h-6 before:rounded-full before:top-1/2 before:left-0 before:-translate-y-1/2 mt-10 md:mt-12 lg:mt-[60px] ${props.cName}`}>
        <p className="text-lg sm:text-xl lg:text-2xl font-bold font-Recharge leading-[31px] text-white">{props.title}</p>
        <p className="text-sm font-normal text-white sm:text-base font-Poppins opacity-70">{props.para}</p>
    </div>
  )
}
