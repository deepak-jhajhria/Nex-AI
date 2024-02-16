
export const RoadmapCmt = (props: { title: string; para:string }) => {
  return (
    <div className="relative flex flex-col gap-4 pl-20 before:absolute before:bg-white before:w-6 before:h-6 before:rounded-full before:top-1/2 before:left-0 before:-translate-y-1/2 mt-[60px]">
        <p className="text-2xl font-bold font-Recharge leading-[31px] text-white">{props.title}</p>
        <p className="text-base font-normal text-white font-Poppins opacity-70">{props.para}</p>
    </div>
  )
}
