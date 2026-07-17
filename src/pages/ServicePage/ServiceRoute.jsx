import ServicePage from "./ServicePage";
import { useService } from "../../cms/useService";
import { serviceDataBySlug } from "./serviceData";

function mergeService(cms, fallback) {
  if (!cms && !fallback) return null;
  if (!cms) return fallback;
  if (!fallback) return cms;

  // Prefer CMS text/pricing; keep local images if CMS gallery/hero is still empty
  const cmsCarousel = (cms.carousel || []).filter((img) => img?.src);
  const cmsHeroSrc = cms.hero?.src;

  return {
    ...fallback,
    ...cms,
    hero: cmsHeroSrc
      ? cms.hero
      : fallback.hero,
    carousel: cmsCarousel.length > 0 ? cmsCarousel : fallback.carousel,
    pricingPlans: cms.pricingPlans?.length ? cms.pricingPlans : fallback.pricingPlans,
    notesSections: cms.notesSections?.length ? cms.notesSections : fallback.notesSections,
    faqs: cms.faqs?.length ? cms.faqs : fallback.faqs,
  };
}

// eslint-disable-next-line react/prop-types -- slug comes from App route
const ServiceRoute = ({ slug }) => {
  const { data: cmsData, loading } = useService(slug);
  const fallback = serviceDataBySlug[slug];
  const data = mergeService(cmsData, fallback);

  if (loading && !fallback) return null;
  if (!data) return null;
  return <ServicePage data={data} />;
};

export default ServiceRoute;
