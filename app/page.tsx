import Image from "next/image";
import Hero from "@/components/landingPage/Hero";
import Services from "@/components/landingPage/Services";
import Highlights from "@/components/landingPage/Highlights";
import ContactForm from "@/components/landingPage/ContactForm";
import Portfolio from "@/components/landingPage/Portfolio";

export default function Home() {
  return (
    <div>

      <Hero />
      <Services />
      <Highlights />
      <Portfolio />
      <ContactForm />

    </div>
  );
}
