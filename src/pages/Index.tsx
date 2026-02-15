import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import ProofMoment from "@/components/ProofMoment";
import Features from "@/components/Features";
import DemoWidget from "@/components/DemoWidget";
import ForPublishers from "@/components/ForPublishers";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <ProofMoment />
        <Features />
        <DemoWidget />
        <ForPublishers />
        <Pricing />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
