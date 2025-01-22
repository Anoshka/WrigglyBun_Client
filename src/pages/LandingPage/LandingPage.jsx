import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import Slide from "../../components/Slide/Slide";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";
import Insta from "../../components/Insta/Insta";

function LandingPage() {
  return (
    <div>
      <Slide />
      <About />
      <Gallery />
      {/* <Blog /> */}
      <Insta />
      <Testimonials />
    </div>
  );
}

export default LandingPage;
