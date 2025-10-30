import React from "react";
import ServicePage from "./ServicePage";
import { serviceDataBySlug } from "./serviceData";

const ServiceRoute = ({ slug }) => {
  const data = serviceDataBySlug[slug];
  if (!data) return null;
  return <ServicePage data={data} />;
};

export default ServiceRoute;
