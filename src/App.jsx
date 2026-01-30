import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import GalleryPage from "./pages/GalleryPage/GalleryPage.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import BlogPostPage from "./pages/BlogPage/BlogPostPage.jsx";
import FAQPage from "./pages/FAQPage/FAQPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { useEffect } from "react";
import { initGA, trackPageView } from "./services/analytics";
import ServiceRoute from "./pages/ServicePage/ServiceRoute.jsx";
import EventsPage from "./pages/EventsPage/EventsPage.jsx";
import EventDetailPage from "./pages/EventsPage/EventDetailPage.jsx";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 when the app loads
    initGA();
  }, []);

  useEffect(() => {
    // Track page views whenever the route changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery/:id" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:slug" element={<EventDetailPage />} />
        <Route path="/newborn" element={<ServiceRoute slug="newborn" />} />
        <Route path="/maternity" element={<ServiceRoute slug="maternity" />} />
        <Route path="/6months" element={<ServiceRoute slug="6months" />} />
        <Route path="/family" element={<ServiceRoute slug="family" />} />
        <Route
          path="/special-events"
          element={<ServiceRoute slug="special-events" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
