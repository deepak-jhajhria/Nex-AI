import { Route, Routes } from "react-router-dom";
import "./App.css";
import { usePreloader } from "./components/Hooks";
import { NavBar } from "./components/NavBar";
import Preloader from "./components/Preloader";
import { Index } from "./pages/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Marketplace } from "./pages/Marketplace";
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
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/about" element={<Marketplace />} />
            <Route path="/nexchat" element={<Marketplace />} />
            <Route path="/token" element={<Marketplace />} />
          </Routes>
          <ScrollToTop />
          <ProgressBar />
        </div>
      )}
    </>
  );
}

export default App;
