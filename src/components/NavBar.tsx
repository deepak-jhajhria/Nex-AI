import CommonBtn from "./CommonBtn";
import { useOverflowHidden } from "./Hooks";
import {  Divide as Hamburger } from 'hamburger-react'
import { Ellipse } from "./Icons";
import ellipsedoted from '../assets/images/dotedellipse.webp'
export const NavBar = () => {
  const [isOpen, setOpen] = useOverflowHidden(false);
  const linkCName: string ="text-base font-normal text-white font-Poppins navLinks";
  const mobileCName: string ="max-lg:fixed duration-300 max-lg:w-full max-md:max-w-full max-lg:max-w-[400px] max-lg:flex-col max-lg:bg-[#00141B] top-0 max-md:text-black max-lg:items-center max-lg:justify-center max-lg:min-h-screen max-lg: !z-[100]";
  const navData: Array<{ id: number; title: string; path: string }> = [
    { id: 1, title: "Home", path: "#home" },
    { id: 2, title: "Marketplace", path: "#marketplace" },
    { id: 3, title: "About", path: "#about" },
    { id: 4, title: "NexChat", path: "#nexchat" },
    { id: 5, title: "Tokens", path: "#token" },
  ];

  return (
    <div className="md:absolute top-[10px] w-full overflow-hidden">
      <div className="container max-w-[1200px] flex items-center justify-end py-5">
        <ul className={`${ isOpen ? "right-0":"-right-full"} flex items-center gap-5 w-[56%] ${mobileCName}`}>
          {navData.map((items) => (
            <li key={items.id}><a onClick={() => setOpen(false)} className={linkCName} href={`${items.path}`}>{items.title}</a></li>
          ))}
        </ul>
        <CommonBtn text="Sign Up" />
        <div className="relative z-[110] mx-2 sm:mx-3 lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="sm" direction="right" duration={0.5} color="#02CDCF"/>
        </div>
      </div>
      {isOpen && <div className="relative min-h-screen">
        <Ellipse cName="top-[40%] right-[10%] !z-[110]"/>
        <Ellipse cName="top-[10%] -right-[13%] !z-[110]"/>
        <img className="absolute top-0 right-0 max-sm:w-[13%] !z-[110]" src={ellipsedoted} alt="ellipse" />
        </div>}
        {isOpen && (
                <div onClick={() => setOpen(false)} className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-30'>
                </div>
            )}
    </div>
  );
};
