import CommonBtn from "./CommonBtn"

export const GetStartedCard = () => {
  return (
    <div className="flex flex-col gap-5 sm:flex-row items-center justify-between container max-w-[1140px] mt-20 sm:mt-28 md:mt-40 lg:mt-[248px]">
        <h2 className="flex flex-col mr-2 font-bold font-Recharge text-2xl sm:text-3xl md:text-[40px] text-[#FCFCFC] md:leading-[52px] text-center">Ready to get started <span className="text-[#02CDCF]">Talk to us Today </span></h2>
        <CommonBtn text="Get Started"/>
    </div>
  )
}
