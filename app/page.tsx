import Image from "next/image";
import Hero from "@/components/landingPage/Hero";
import Services from "@/components/landingPage/Services";
import Highlights from "@/components/landingPage/Highlights";
import ContactForm from "@/components/landingPage/ContactForm";
import Portfolio from "@/components/landingPage/Portfolio";
import Packages from "@/components/landingPage/Packages";
import Dev from "@/components/landingPage/Dev";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Packages />
      <Dev />
      <Highlights />
      <Portfolio />
      <ContactForm />
    </div>
  );
}
