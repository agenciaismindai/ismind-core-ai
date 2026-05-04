import { useEffect, useState } from "react";
import { useGlobalScrollReveal } from "@/hooks/use-scroll-reveal";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Concept } from "@/components/site/Concept";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Services } from "@/components/site/Services";
import { Benefits } from "@/components/site/Benefits";
import { UseCases } from "@/components/site/UseCases";
import { SocialProof } from "@/components/site/SocialProof";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { Privacy } from "@/components/site/Privacy";
import { Cookies } from "@/components/site/Cookies";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CookieBanner } from "@/components/site/CookieBanner";

function usePathname() {
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/",
  );
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return path;
}

export default function App() {
  const path = usePathname();
  useGlobalScrollReveal(path);
  if (path === "/privacidad" || path === "/privacy") {
    return (
      <>
        <Privacy />
        <WhatsAppButton />
        <CookieBanner />
      </>
    );
  }

  if (path === "/cookies") {
    return (
      <>
        <Cookies />
        <WhatsAppButton />
        <CookieBanner />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Problem />
        <Solution />
        <HowItWorks />
        <Services />
        <Benefits />
        <UseCases />
        <SocialProof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
