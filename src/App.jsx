import Contact from "./components/Contact.jsx";
import CtaBand from "./components/CtaBand.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-mist text-ink dark:bg-ink-950 dark:text-mist">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-bold focus:text-mist focus:shadow-lift focus:outline-none focus:ring-2 focus:ring-mint-400"
      >
        跳至主要內容
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Services />
        <CtaBand />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Newsletter />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
