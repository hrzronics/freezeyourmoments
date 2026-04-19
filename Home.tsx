import About from '../components/About';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Reel from '../components/Reel';
import GetYourQuote from '../components/GetYourQuote';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Reel />
      <GetYourQuote />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
