import image from '../assets/png/utility-Img.webp'
export const Roadmap = () => {
  return (
    <div className="mt-[160px]">
       <div className="container max-w-[1340px]">
           <h2 className="font-Recharge font-bold text-[40px] leading-[50px] text-[#02CDCF] text-center">NexAI Token & utility</h2>
           <div className="grid grid-cols-2 mt-[86px]">
                <div className='relative before:absolute before:animate-pulse before:mix-blend-color before:z-20 after:animate-pulse  before:top-0 before:left-[55px]   before:w-[511px] before:h-[511px] before:bg-[#02CDCF] after:absolute after:mix-blend-hue  after:top-0 after:left-[55px] after:z-[1] after:w-[511px] after:h-[511px] after:bg-[#02CDCF]'><img src={image} alt="image" /></div>
                <div className='h-[512px] flex flex-col overflow-y-scroll'>
                    <div className='pt-[60px] px-[30px]'>

                    </div>
                </div>
           </div>
       </div>
    </div>
  )
}
