import React, { useEffect } from "react";
import "./style404.css";
import logoDark from "../assets/logodark.svg";
import logoLight from "../assets/logolight.svg";
import errorDark from "../assets/404-error-dark.svg";
import errorLight from "../assets/404-error-light.svg";

export default function Page_404() {
  useEffect(() => {
    document.head.getElementsByTagName("title")[0].innerHTML =
      "404 - Not Found";

    const header = document.querySelector(".error404page-header");
    let navlist = document.querySelector(".navlist-item");

    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", window.scrollY > 80);
      navlist.classList.toggle("middle", window.scrollY > 80);
    });

    let menu = document.querySelector("#menu-icon");

    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navlist.classList.toggle("open");
    };

    window.onscroll = () => {
      menu.classList.remove("bx-x");
      navlist.classList.remove("open");
    };

    let year = new Date().getFullYear();
    document.querySelector(".year").innerText += year;

    let logod = document.querySelectorAll(".logo-dark");
    let logol = document.querySelectorAll(".logo-light");
    let img404d = document.querySelector(".img404-dark");
    let img404l = document.querySelector(".img404-light");

    var checkbox = document.querySelector("input[name=theme]");
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");

        for (var i = 0; i < logod.length; i++) {
          logod[i].classList.toggle("logo-dark-hide");
        }

        for (var i = 0; i < logol.length; i++) {
          logol[i].classList.toggle("logo-light-show");
        }

        img404d.classList.toggle("img404-dark-hide");
        img404l.classList.toggle("img404-light-show");
      } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");

        for (var i = 0; i < logod.length; i++) {
          logod[i].classList.toggle("logo-dark-hide");
        }

        for (var i = 0; i < logol.length; i++) {
          logol[i].classList.toggle("logo-light-show");
        }

        img404d.classList.toggle("img404-dark-hide");
        img404l.classList.toggle("img404-light-show");
      }
    });

    let trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 300);
    };
  }, []);
  return (
    <>
      <div id="body404page">
        <header className="error404page-header">
          <div className="navlist-logos">
            <a href="#" className="logo">
              <img className="logo-dark" src={logoDark} alt="logo" />
              <img className="logo-light" src={logoLight} alt="logo" />
            </a>
          </div>

          <ul className="navlist-item">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Our services</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>

          <div className="right-info">
            <div className="toggle-container">
              <input
                className="switch-dark-light-input"
                type="checkbox"
                id="switch"
                name="theme"
              />
              <label className="switch-dark-light-label" htmlFor="switch">
                Toggle
              </label>
            </div>
            <div className="bx bx-menu" id="menu-icon"></div>
          </div>
        </header>

        <section className="content-404">
          <img className="img404-light" src={errorDark} alt="404" />
          <img className="img404-dark" src={errorLight} alt="404" />
          <a href="/" className="GoToHomebtn">
            Go To Home
          </a>
          <a href="#" className="Contactbtn">
            Contact us
          </a>
        </section>

        <footer className="error404page-footer">
          <div className="error404page-container-footer">
            <div className="error404page-footer-social">
              <img className="logo-dark" src={logoDark} alt="logo" />
              <img className="logo-light" src={logoLight} alt="logo" />
              <div className="social-icon">
                <div className="social-icon-i">
                  <a href="#">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
                <div className="social-icon-i">
                  <a href="#">
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                </div>
                <div className="social-icon-i">
                  <a href="#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </div>
                <div className="social-icon-i">
                  <a href="#">
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="error404page-footer-info">
              <div className="error404page-footer-info-one">
                <img className="logo-dark" src={logoDark} alt="logo" />
                <img className="logo-light" src={logoLight} alt="logo" />
                <p>
                  About pages are perfect spaces to talk <br />
                  about where you started, how you've <br />
                  grown, and the ideals that have helped <br />
                  your organization mature
                </p>
              </div>

              <div className="error404page-footer-info-two">
                <h6>Address</h6>
                <a href="#">
                  <i className="bx bxs-map"></i>BP 73, Bureau de poste EL WIAM{" "}
                  <br />
                  Sidi Bel Abbés 22016, Algérie
                </a>
              </div>

              <div className="error404page-footer-info-three">
                <h6>Contact</h6>
                <div>
                  <a href="#">
                    <i className="bx bx-phone"></i>+213-48-74-94-52
                  </a>
                  <a href="#">
                    <i className="bx bx-envelope"></i>contact@esi-sba.dz
                  </a>
                </div>
              </div>

              <div className="error404page-footer-info-four">
                <h6>Office</h6>
                <p>Sunday - Thursday</p>
                <p>8AM- 5PM</p>
              </div>
            </div>

            <div className="error404page-footer-copyright">
              <p>
                © <span className="year"></span>
                <span className="logo-text">Finanworks</span> - All rights
                reserved.
              </p>
              <div className="error404page-footer-item">
                <a href="#">Privacy</a>
                <a href="#">Security</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
