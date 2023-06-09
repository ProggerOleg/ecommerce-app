import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="py-4">
          <div className="container-xxl">
            <div className="row">
              <div className="col-4">
                <h4 className="text-white mb-4">Contact us</h4>
                <div>
                  <address className="text-white fs-6">
                    Hno: 277 Near Vill chopal,Haryana <br /> Sopipat, Haryana{" "}
                    <br />
                    PicCode: 131103
                  </address>
                  <a
                    href="tel:+380 992506701"
                    className="mt-3 d-block mb-2 text-white"
                  >
                    +380 992506701
                  </a>
                  <a
                    href="mailto:olegtar25@gmail.com"
                    className="mt-2 d-block mb-2 text-white"
                  >
                    olegtar25@gmail.com
                  </a>
                  <div className="social-icons d-flex align-items-center gap-30 mt-4">
                    <a
                      href="https://www.linkedin.com/in/oleg-tarnavchuk-161770201/"
                      className="text-white"
                    >
                      <BsLinkedin className="fs-4" />
                    </a>
                    <a href="https://www.instagram.com/" className="text-white">
                      <BsInstagram className="fs-4" />
                    </a>
                    <a
                      href="https://github.com/ProggerOleg"
                      className="text-white"
                    >
                      <BsGithub className="fs-4" />
                    </a>
                    <a href="https://www.youtube.com/" className="text-white">
                      <BsYoutube className="fs-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Information</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                  <Link className="text-white py-2 mb-1" to="refund-policy">
                    Refund Policy
                  </Link>
                  <Link className="text-white py-2 mb-1" to="shipping-policy">
                    Shipping Policy
                  </Link>
                  <Link
                    className="text-white py-2 mb-1"
                    to="terms-and-conditions"
                  >
                    Terms & Conditions
                  </Link>
                  <Link className="text-white py-2 mb-1" to="blog">
                    Blogs
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Account</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">About Us</Link>
                  <Link className="text-white py-2 mb-1">FAQ</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                </div>
              </div>
              <div className="col-2">
                <h4 className="text-white mb-4">Quick Links</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Laptops</Link>
                  <Link className="text-white py-2 mb-1">Headphones</Link>
                  <Link className="text-white py-2 mb-1">Tablet</Link>
                  <Link className="text-white py-2 mb-1">Watch</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center bb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
