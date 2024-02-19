import { useEffect, useRef } from "react";

export const ProgressBar = () => {
  const progressBarScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (progressBarRef.current) {
      const progress = (scrollPosition / (docHeight - windowSize)) * 100;
      progressBarRef.current.style.width = `${progress}%`;
    }
  };
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", progressBarScroll);

    return () => {
      window.removeEventListener("scroll", progressBarScroll);
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <span ref={progressBarRef} className="fixed top-0 -left-[2px] flex bg-[#02CDCF] h-1 md:h-[6px] rounded-full"></span>
    </div>
  );
};
