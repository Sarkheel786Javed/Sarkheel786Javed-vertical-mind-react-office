import { Link } from "react-router";
import "./ErrorPage.css";
function ErrorPage() {
  return (
    <div>
      <div className="bg-error-page">
        <div className="frame-1707480608-error-page">
          <img
            className="group-1707480432-error-page"
            src="assets/images/error-page.svg"
          />
          <div className="frame-1707480607-error-page">
            <div className="oops-the-page-you-re-looking-for-couldn-t-be-found-error-page">
              "Oops! The page you're looking for couldn't be found."
            </div>
            <div className="let-s-get-you-back-on-track-error-page">
              Let's get you back on track
            </div>
            <Link
              to={"/"}
              className="btn text-decoration-none rounded-pill frame-1-error-page"
            >
              <div className="go-home-error-page">Go Home</div>
            </Link>
          </div>
        </div>
        <img
          className="group-1707480453-error-page"
          src="assets/images/errorpage-bg-icons.svg"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
