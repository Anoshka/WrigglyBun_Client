import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import Slide from "../../components/Slide/Slide";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";

function LandingPage() {
  return (
    <div>
      <Slide />
      <About />
      <Gallery />
      {/* <Blog /> */}
      <Testimonials />
    </div>
  );
}

export default LandingPage;
