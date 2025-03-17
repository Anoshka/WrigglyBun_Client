import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

function NotFoundPage() {
  return (
    <div className="comingsoon">
      <h1 className="comingsoon__title">Coming Soon!</h1>
      <Link className="comingsoon__link" to="/">
        Back to home page
      </Link>
    </div>
  );
}

export default NotFoundPage;
