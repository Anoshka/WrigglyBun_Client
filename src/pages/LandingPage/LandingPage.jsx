import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import Slide from "../../components/Slide/Slide";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";
import Insta from "../../components/Insta/Insta";
import Services from "../../components/Services/Services";
import GreyServices from "../../components/GreyServices/GreyServices";
import FAQs from "../FAQPage/FAQPage";

function LandingPage() {
  return (
    <div>
      <Services />
      <About />
      {/* <Blog /> */}
      <GreyServices />
      <Insta />
      <Testimonials />
      <FAQs />
    </div>
  );
}

export default LandingPage;
