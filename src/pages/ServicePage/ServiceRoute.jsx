import ServicePage from "./ServicePage";
import { useService } from "../../cms/useService";
import { serviceDataBySlug } from "./serviceData";

// eslint-disable-next-line react/prop-types -- slug comes from App route
const ServiceRoute = ({ slug }) => {
  const { data: cmsData, loading } = useService(slug);
  const fallback = serviceDataBySlug[slug];

  // Use Sanity if we have it; otherwise fall back to local data (safe before all slugs exist)
  const data = cmsData ?? fallback;

  if (loading && !fallback) return null;
  if (!data) return null;
  return <ServicePage data={data} />;
};

export default ServiceRoute;
