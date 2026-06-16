import Navbar from "@/componenets/Layouts/Navbar";
import Footer from "@/componenets/Layouts/Footer";

import Hero from "@/componenets/Sections/Hero";
import AboutStats from "@/componenets/Sections/AboutStats";
import TrustedBrands from "@/componenets/Sections/TrustedBrands";
import Process from "@/componenets/Sections/Process";
import Industries from "@/componenets/Sections/Industries";
import Services from "@/componenets/Sections/Services";
import Portfolio from "@/componenets/Sections/Portfolio"; 
import Testimonials from "@/componenets/Sections/Testimonials"; 
import Contact from "@/componenets/Sections/Contact"; 


export default function Home() {
  return (
    <main className="bg-black text-white min-h.screen overflow-x-hidden">
      <Navbar />

      <Hero />
      <AboutStats />
      <TrustedBrands />
      <Process />
      <Industries />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />

      <Footer />

    </main>
  );
}
