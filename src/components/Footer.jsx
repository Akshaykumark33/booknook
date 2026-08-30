import { Link } from "react-router-dom";

import {
  FaBookOpen,

} from "react-icons/fa";

function Footer() {
  return (
    <footer className="booknook-footer">

      <div className="container py-5">

        <div className="row g-4">

          {/* ================= BRAND ================= */}
          <div className="col-lg-4 col-md-6">

           {/* ================= LOGO ================= */}
          <Link to="/" className="booknook-logo">

            <div className="logo-icon">
              <FaBookOpen />
            </div>

            <div className="logo-text">
              <span>BOOK</span>
              <span>NOOK</span>
            </div>

          </Link>


            <p className="footer-description">
              Your cozy corner for books, knowledge,
              and imagination.
            </p>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div className="col-lg-4 col-md-6">

            <h5 className="footer-heading">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products">
                  Books
                </Link>
              </li>

              <li>
                <Link to="/stationery">
                  Stationery
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= SOCIAL MEDIA ================= */}
          <div className="col-lg-4 col-md-6">

            <h5 className="footer-heading">
              Follow Us
            </h5>

            <div className="social-links">

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>

            </div>

          </div>

        </div>


        <hr className="footer-divider" />


        {/* ================= COPYRIGHT ================= */}

        <div className="footer-bottom">

          <p>
            © 2026 BookNook. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;