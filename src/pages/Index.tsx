import { AiAssistant } from "../components/AiAssistant";
import { BlockChainSec } from "../components/BlockChainSec";
import { Footer } from "../components/Footer";
import { GetStartedCard } from "../components/GetStartedCard";
import { Header } from "../components/Header";
import { NexAI } from "../components/NexAI";
import NexAiCard from "../components/NexAiCardSec";
import { Roadmap } from "../components/Roadmap";
import { UniqueSec } from "../components/Unique";

export const Index = () => {
  return (
    <>
      <Header />
      <AiAssistant />
      <UniqueSec />
      <BlockChainSec />
      <NexAI />
      <NexAiCard />
      <Roadmap />
      <GetStartedCard />
      <Footer />
    </>
  );
};
