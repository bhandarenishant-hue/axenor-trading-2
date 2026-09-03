import { Hero } from "@/components/Hero";
import { GlobalTradeNetwork } from "@/components/GlobalTradeNetwork";
import { SourcingMarkets } from "@/components/SourcingMarkets";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyAxenor } from "@/components/WhyAxenor";
import { Markets } from "@/components/Markets";
import { WhoWeServe } from "@/components/WhoWeServe";
import { PartnershipCTA } from "@/components/PartnershipCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GlobalTradeNetwork />
      <SourcingMarkets />
      <HowWeWork />
      <WhyAxenor />
      <Markets />
      <WhoWeServe />
      <PartnershipCTA />
    </>
  );
}
