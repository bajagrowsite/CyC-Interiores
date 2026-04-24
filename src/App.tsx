/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Process />
      <Portfolio />
      <CTA />
      <ContactInfo />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

