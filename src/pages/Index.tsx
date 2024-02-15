import { AiAssistant } from "../components/AiAssistant";
import { BlockChainSec } from "../components/BlockChainSec";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { UniqueSec } from "../components/Unique";

export const Index = () => {
  return (
    <>
      <Header />
      <AiAssistant />
      <UniqueSec />
      <BlockChainSec />
      <Footer />
    </>
  );
};
