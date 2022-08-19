import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaLongArrowAltUp,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      {/* <!-- footer Start --> */}
      <footer class="footer section gray-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mr-auto col-sm-6">
              <div class="widget mb-5 mb-lg-0">
                <div class="logo mb-4">
                  <img src={logo} alt="logo" class="img-fluid" />
                </div>
                <p>
                  Tempora dolorem voluptatum nam vero assumenda voluptate,
                  facilis ad eos obcaecati tenetur veritatis eveniet distinctio
                  possimus.
                </p>

                <ul class="list-inline footer-socials mt-4">
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com/themefisher">
                      <FaFacebookF className="fontAwesome" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://twitter.com/themefisher">
                      <i class="icofont-twitter"></i>
                      <FaTwitter className="fontAwesome" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.pinterest.com/themefisher/">
                      <i class="icofont-linkedin"></i>
                      <FaLinkedin className="fontAwesome" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="widget mb-5 mb-lg-0" style={{ textAlign: "left" }}>
                <h4 class="text-capitalize mb-3">Department</h4>
                <div class="divider mb-4"></div>
                <ul class="list-unstyled footer-menu lh-35">
                  <li>
                    <a href="#!">Surgery </a>
                  </li>
                  <li>
                    <a href="#!">Wome's Health</a>
                  </li>
                  <li>
                    <a href="#!">Radiology</a>
                  </li>
                  <li>
                    <a href="#!">Cardioc</a>
                  </li>
                  <li>
                    <a href="#!">Medicine</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="widget mb-5 mb-lg-0" style={{ textAlign: "left" }}>
                <h4 class="text-capitalize mb-3">Support</h4>
                <div class="divider mb-4"></div>

                <ul class="list-unstyled footer-menu lh-35">
                  <li>
                    <a href="#!">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#!">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#!">Company Support </a>
                  </li>
                  <li>
                    <a href="#!">FAQuestions</a>
                  </li>
                  <li>
                    <a href="#!">Company Licence</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div
                class="widget widget-contact mb-5 mb-lg-0"
                style={{ textAlign: "left" }}
              >
                <h4 class="text-capitalize mb-3">Get in Touch</h4>
                <div class="divider mb-4"></div>

                <div class="footer-contact-block mb-4">
                  <div class="icon d-flex align-items-center">
                    <i class="icofont-email mr-3">
                      <AiOutlineMail />
                    </i>

                    <span class="h6 mb-0" style={{ marginLeft: "5px" }}>
                      Support Available for 24/7
                    </span>
                  </div>
                  <h4 class="mt-2">
                    <a href="mailto:support@email.com">Support@email.com</a>
                  </h4>
                </div>

                <div class="footer-contact-block">
                  <div class="icon d-flex align-items-center">
                    <i class="icofont-support mr-3">
                      <FaPhoneAlt />
                    </i>
                    <span class="h6 mb-0" style={{ marginLeft: "5px" }}>
                      Mon to Fri : 08:30 - 18:00
                    </span>
                  </div>
                  <h4 class="mt-2">
                    <a href="tel:+23-345-67890">+23-456-6588</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-btm py-4 mt-5">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-12">
                <div class="copyright" style={{ textAlign: "center" }}>
                  Copyright &copy; 2022, Designed &amp; Developed by{" "}
                  <a href="https://themefisher.com/">Themefisher</a>
                </div>
              </div>
              {/* <div class="col-lg-6">
                <div class="subscribe-form text-lg-right mt-5 mt-lg-0">
                  <form action="#" class="subscribe">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Email address"
                      required
                    />
                    <button type="submit" class="btn btn-main-2 btn-round-full">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div> */}
            </div>

            <div class="row">
              <div class="col-lg-4">
                <a class="backtop scroll-top-to reveal" href="#top">
                  {/* <i class="icofont-long-arrow-up"></i> */}
                  <FaLongArrowAltUp className="upArrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
