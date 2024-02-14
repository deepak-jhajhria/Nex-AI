import { Link } from "react-router-dom";
import CommonBtn from "./CommonBtn";
import { useOverflowHidden } from "./Hooks";
import { Rotate as Hamburger } from 'hamburger-react'

export const NavBar = () => {
  const [isOpen, setOpen] = useOverflowHidden(false);
  const linkCName: string ="text-base font-normal text-white font-Poppins navLinks";
  const mobileCName: string ="max-lg:fixed duration-300 max-lg:w-full max-md:max-w-full max-lg:max-w-[400px] max-lg:flex-col max-lg:bg-[#00141B] top-0 max-md:text-black max-lg:items-center max-lg:justify-center max-lg:min-h-screen max-lg: !z-[100]";
  const navData: Array<{ id: number; title: string; path: string }> = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Marketplace", path: "/marketplace" },
    { id: 3, title: "About", path: "/about" },
    { id: 4, title: "NexChat", path: "/nexchat" },
    { id: 5, title: "Tokens", path: "/token" },
  ];
  return (
    <nav className="absolute top-[10px] w-full">
      <div className=" container max-w-[1200px] flex items-center justify-end py-5">
        <ul className={`${ isOpen ? "right-0" : "-right-full" } flex items-center gap-5 w-[56%] ${mobileCName}`}>
          {navData.map((items) => (
            <li key={items.id}>
              <Link onClick={() => setOpen(false)} className={linkCName} to={items.path}>
                {items.title}
              </Link>
            </li>
          ))}
        </ul>
        <CommonBtn text="Sign Up" />
        <div className="relative z-[110] mx-2 sm:mx-3 lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="sm" direction="right" duration={0.5} color="#02CDCF"/>
        </div>
      </div>
    </nav>
  );
};
