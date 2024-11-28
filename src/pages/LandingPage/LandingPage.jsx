import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import Slide from "../../components/Slide/Slide";
import Testimonials from "../../components/Testimonials/Testimonials";

function LandingPage() {
  return (
    <div>
      <Slide />
      <About />
      <Gallery />
      <Testimonials />
    </div>
  );
}

export default LandingPage;
