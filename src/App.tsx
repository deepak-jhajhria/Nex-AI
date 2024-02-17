import "./App.css";
import { usePreloader } from "./components/Hooks";
import { NavBar } from "./components/NavBar";
import Preloader from "./components/Preloader";
import { Index } from "./pages/Index";

function App() {
  const isLoading = usePreloader();
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="bg-[#040404]">
          <NavBar />
          <Index />
        </div>
      )}
    </>
  );
}

export default App;
