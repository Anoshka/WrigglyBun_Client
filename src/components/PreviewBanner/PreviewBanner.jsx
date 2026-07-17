import { Link } from "react-router-dom";
import { usePreview } from "../../cms/PreviewContext";
import "./PreviewBanner.scss";

export default function PreviewBanner() {
  const { isPreview } = usePreview();

  if (!isPreview) return null;

  return (
    <div className="preview-banner" role="status">
      <p className="preview-banner__text">
        Preview mode — you are seeing <strong>unpublished drafts</strong>. Visitors
        on the live site will not see this until you click{" "}
        <strong>Publish</strong> in Studio.
      </p>
      <Link to="/preview/disable" className="preview-banner__exit">
        Exit preview
      </Link>
    </div>
  );
}
