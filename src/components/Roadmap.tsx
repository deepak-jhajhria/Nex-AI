import image from '../assets/png/utility-Img.webp'
import { RoadmapCmt } from './RoadmapCmt'
export const Roadmap = () => {
  return (
    <div className="mt-[160px]">
       <div className="container max-w-[1340px]">
           <h2 className="font-Recharge font-bold text-[40px] leading-[50px] text-[#02CDCF] text-center">NexAI Token & utility</h2>
           <div className="grid grid-cols-2 mt-[86px]">
                <div className='relative before:absolute before:animate-pulse before:mix-blend-color before:z-20 after:animate-pulse  before:top-0 before:left-[55px]   before:w-[511px] before:h-[511px] before:bg-[#02CDCF] after:absolute after:mix-blend-hue  after:top-0 after:left-[55px] after:z-[1] after:w-[511px] after:h-[511px] after:bg-[#02CDCF]'><img src={image} alt="image" /></div>
                <div className='h-[512px] flex flex-col overflow-y-scroll'>
                    <div className='mx-[30px] flex flex-col relative before:absolute before:w-2 before:h-[96%] before:bg-[#02CDCF] before:top-[60px] before:left-2 before:rounded-full'>
                        <RoadmapCmt title='Purchasing Nexai Products' para={`Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.`}/>
                        <RoadmapCmt title='Accessing Exclusive Content' para={`By holding Nex AI tokens, users will gain privileged access to exclusive content within the Nexai platform. These tokens will unlock premium features, advanced functionalities, and specialized services, enabling users to fully explore and enjoy the enhanced capabilities of Nexai's ecosystem.`}/>
                        <RoadmapCmt title='Loyalty and Rewards' para={`The Nexai ecosystem will feature a robust loyalty program, rewarding users with Nex AI tokens for their active engagement, ongoing participation, and dedicated usage of Nexai's products and services. Token holders will have the opportunity to redeem their accumulated rewards for discounts, incentives, or exclusive offers, fostering a strong sense of loyalty and encouraging continued involvement.`}/>
                        <RoadmapCmt title='Participating in Governance' para={`Nex AI token holders will play a vital role in the governance of the Nexai ecosystem. Through voting mechanisms, token holders will have a direct say in the decision-making process. They can express their opinions, vote on proposed changes or improvements, and actively contribute to shaping the future development and direction of the Nexai ecosystem.`}/>
                        <RoadmapCmt title='Peer-to-Peer Transactions' para={`Nex AI tokens will enable seamless peer-to-peer transactions within the Nexai community. Users will have the ability to exchange tokens with others for various purposes, such as purchasing pre-owned Nexai devices, engaging in token trading activities, or conducting value exchanges directly within the ecosystem, all with the utmost security and convenience.`}/>
                        <RoadmapCmt title='Token Staking and Rewards' para={`Nex AI tokens will support staking mechanisms, allowing users to lock up their tokens for a specified period. By staking their tokens, users will earn additional rewards, such as interest, dividends, or other incentives, further incentivizing token holding and fostering long-term engagement and loyalty.`}/>
                    </div>
                </div>
           </div>
       </div>
    </div>
  )
}
