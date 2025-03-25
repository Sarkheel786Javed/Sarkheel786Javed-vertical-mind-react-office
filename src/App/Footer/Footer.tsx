// import { Link, useLocation } from "react-router";
import "../../styles/Footer.css";
function Footer() {
  // const locations = useLocation();
  return (
    <div className="footer">
      <div className="frame-1707480648">
        <div className="footer-left">
          All content of this website are © 2025 Vertical Minds
        </div>
      </div>


      {/* <div className="contents">
        <div className="columns">
          <div className="column-1">
            <div className="info">
              <div className="updated-logo-vertical-minds-horizontal-logo-in-2-colora-2">
                <img
                  className="group"
                  src="assets\images\footer\Footer_LogoVertical_Minds_Logo.svg"
                />
              </div>
              <div className="frame-1707480106">
                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="social">
              <div className="d-flex justify-content-between">
                <img className="" src="assets\images\footer\1.svg" />
                <img className="" src="assets\images\footer\2.svg" />
                <img className="" src="assets\images\footer\3.svg" />
                <img className="" src="assets\images\footer\4.svg" />
              </div>
            </div>
            <div className="items">
              <Link
                to="/about-us"
                className={`text-decoration-none Link-Items  ${
                  locations.pathname === "/about-us"
                    ? "Link-Items-active"
                    : "Link-Items-unactive"
                }`}
              >
                About us
              </Link>
              <Link
                to="/contact-us"
                className={`text-decoration-none Link-Items  ${
                  locations.pathname === "/contact-us"
                    ? "Link-Items-active"
                    : "Link-Items-unactive"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/privacy-policy"
                className={`text-decoration-none Link-Items  ${
                  locations.pathname === "/privacy-policy"
                    ? "Link-Items-active"
                    : "Link-Items-unactive"
                }`}
              >
                Privacy policy
              </Link>
              <Link
                to="/sitemap"
                className={`text-decoration-none Link-Items  ${
                  locations.pathname === "/sitemap"
                    ? "Link-Items-active"
                    : "Link-Items-unactive"
                }`}
              >
                Sitemap
              </Link>
              <Link
                to="/terms-of-use"
                className={`text-decoration-none Link-Items  ${
                  locations.pathname === "/terms-of-use"
                    ? "Link-Items-active"
                    : "Link-Items-unactive"
                }`}
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Footer;
