import "./App.css";
import { usePreloader } from "./components/Hooks";
import { NavBar } from "./components/NavBar";
import Preloader from "./components/Preloader";
import { Index } from "./pages/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { ProgressBar } from "./components/ProgressBar";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const isLoading = usePreloader();
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="bg-[#040404]">
          <NavBar />
          <Index />
          <ScrollToTop />
          <ProgressBar />
        </div>
      )}
    </>
  );
}

export default App;
