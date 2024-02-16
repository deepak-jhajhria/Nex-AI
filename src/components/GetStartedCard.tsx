import CommonBtn from "./CommonBtn"

export const GetStartedCard = () => {
  return (
    <div className="flex items-center justify-between container max-w-[1140px] mt-[248px]">
        <h2 className="flex flex-col mr-2 font-bold font-Recharge text-[40px] text-[#FCFCFC] leading-[52px]">Ready to get started <span className="text-[#02CDCF]">Talk to us Today </span></h2>
        <CommonBtn text="Get Started"/>
    </div>
  )
}
