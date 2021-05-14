import React from "react";
import css from "./Footer.css";
import Zurag from "./images/logo4.png";
function Footer() {
  return (
    <footer id="footer" class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="full">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="#">
                    <img src={Zurag} alt="#" />
                  </a>
                </div>
                <p>Бидэнтэй холбогдох сошиал хаяг:</p>
                <ul class="social-icons style-4 pull-left">
                  <li>
                    <a class="facebook" href="www.facebook.com">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="twitter" href="#">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a class="youtube" href="#">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a class="instagram" href="#">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </li>
                  <li>
                    <a class="linkedin" href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <div class="full">
              <div class="footer-widget">
                <h3>Menu</h3>
                <ul class="footer-menu">
                  <li>
                    <a href="about.html">Сервер</a>
                  </li>
                  <li>
                    <a href="team.html">Ажилтан</a>
                  </li>
                  <li>
                    <a href="news.html">Тайлан</a>
                  </li>
                  <li>
                    <a href="matche.html">Ээлж</a>
                  </li>
                  <li>
                    <a href="blog.html">Салбар</a>
                  </li>
                  <li>
                    <a href="contact.html">Ангилал</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="full">
              <div class="footer-widget">
                <h3>Холбоо барих</h3>
                <ul class="address-list">
                  <li>
                    <i class="fa fa-map-marker"></i> Улаанбаатар хот, Хан-Уул
                    дүүрэг, 10 дугаар хороо, Буянт-Ухаа
                  </li>
                  <li>
                    <i class="fa fa-phone"></i> 71281659 71281160
                  </li>
                  <li>
                    <i
                      style={{ fontSize: "20px", top: "5px" }}
                      class="fa fa-envelope"
                    ></i>{" "}
                    cns_office@mcaa.gov.mn
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="full">
              <div class="contact-footer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120615.72236587871!2d73.07890527988283!3d19.
                  140910987164396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1527759905404"
                  width="600"
                  height="350"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>
            Холбоо, Навигаци, Ажиглалтын Алба © 2021 он. Зохиогчийн эрх хуулиар
            хамгаалагдсан..
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
