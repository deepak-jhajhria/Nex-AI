import "./App.css";
import { NavBar } from "./components/NavBar";
import { Index } from "./pages/Index";

function App() {
  return (
    <div className="bg-[#040404]">
      <NavBar />
      <Index />
    </div>
  );
}

export default App;
