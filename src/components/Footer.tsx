import { FacebookIcon, TwitterIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer className="w-full min-h-[492px] bg-[url(./assets/png/footerbg.png)] bg-center bg-cover bg-no-repeat">
      <div className="container max-w-[1140px]">
        <div className="grid grid-cols-3 pt-[150px]">
          <div className="flex flex-col col-span-2 max-w-[356px]">
            <p className="text-base font-bold text-white font-Recharge opacity-70">
              Nullam viverra natoque amet et sed scelerisque viverra fringilla
              platea. Ullamcorper.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FacebookIcon />
                </span>
              </a>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <TwitterIcon />
                </span>
              </a>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FacebookIcon />
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-between -mt-9">
            <ul className="flex flex-col gap-5">
              <li className="text-lg font-bold text-white font-Recharge">
                Quick links
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  Tokens
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  NexChat
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li className="text-lg font-bold text-white font-Recharge">
                Information's
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  Phone
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  terms
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-white font-Recharge opacity-70"
                  href="/"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      <p className="py-5 text-base font-bold text-white font-Recharge opacity-70 mt-[30px] text-center border-t-[#6A6F6F] border-t-[2px]">
        @Copyright.nexai
      </p>
      </div>
    </footer>
  );
};
