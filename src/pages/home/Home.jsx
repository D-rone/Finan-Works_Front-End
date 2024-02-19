import "./swiper-bundle.min.css";

export default function Home() {
  return (
    <div>
      <div class="contact">
        <div>
          <a href="#">
            <i class="bx bx-phone"></i>+213-48-74-94-52
          </a>
          <a href="#">
            <i class="bx bx-envelope"></i>contact@esi-sba.dz
          </a>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <header>
        <div class="navlist-m">
          <a href="#" class="logo">
            <img class="logo-dark" src="img/logodark.svg" alt="logo" />
            <img class="logo-light" src="img/logolight.svg" alt="logo" />
          </a>

          <ul class="navlist">
            <li>
              <a href="#">Home</a>
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
        </div>

        <div class="right-info">
          <div class="toggle-container">
            <input type="checkbox" id="switch" name="theme" />
            <label for="switch">Toggle</label>
          </div>
          <div class="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>

      <section class="home" id="home">
        <div class="home-text">
          <h1>
            Attract, motivate and retain <br />
            your <span>employees</span> with the <br />
            advantages of a large <br />
            company
          </h1>
          <p>
            Welcome to the Automation of the <br />
            Management of Social Works website
          </p>
          <a href="/login" class="btn">
            Customer Area
          </a>
        </div>

        <div class="home-img">
          <img src="img/main.png" alt="main img" />
          <div class="circle">
            <div class="logo-cr"></div>
            <div class="text">
              <p>ESI SBA • FINANCE WORKS •</p>
            </div>
          </div>
          <img src="img/mainp.png" alt="mainp img" />
        </div>
      </section>

      <section class="hr-solution">
        <div class="head-text">
          <h6>WHY FINANWORKS ?</h6>
          <h1>Comprehensive and user-friendly solution</h1>
        </div>

        <div class="container">
          <div class="hr-solution-img">
            <img src="img/img1.png" alt="" />
          </div>
          <div class="hr-solution-text">
            <h2>Finanworks, the HR solution</h2>
            <ul>
              <li>
                <i class="bx bxs-caret-right-circle"></i>Progress of all
                commands
              </li>
              <li>
                <i class="bx bxs-caret-right-circle"></i>Online order
              </li>
              <li>
                <i class="bx bxs-caret-right-circle"></i>Learn at your own pace
              </li>
              <li>
                <i class="bx bxs-caret-right-circle"></i>Saving Money For The
                Future
              </li>
              <li>
                <i class="bx bxs-caret-right-circle"></i>Online Transection
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <div class="head-text">
          <h6>ABOUT US</h6>
          <h1>Social work management</h1>
        </div>

        <div class="container">
          <div class="about-img">
            <img src="img/img2.png" alt="" />
          </div>

          <div class="about-text">
            <p class="des">
              Welcome to the Management of Social Works website! We are a
              dedicated team passionate about the intersection of technology and
              social work management. Our mission is to empower social work
              professionals and organizations with the knowledge, resources, and
              tools needed to navigate the ever-evolving landscape of automation
              in social work. With a deep understanding of the challenges and
              opportunities faced by the social work community
            </p>

            <div class="three-div">
              <div>
                <div class="cr">01</div>
                <h6>Request</h6>
                <p>Place your order quickly and easily</p>
              </div>
              <div>
                <div class="cr">02</div>
                <h6>Order status</h6>
                <p>Track the status of your order</p>
              </div>
              <div>
                <div class="cr">03</div>
                <h6>Quick reply</h6>
                <p>Quick response to requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div class="head-text">
          <h6>OUR SERVICES</h6>
          <h1>We provide many services</h1>
        </div>

        <div class="boxs">
          <div class="box-text">
            <h1>
              Do you want to retain and <br />
              motivate your employees?
            </h1>
            <p>Offer them a full range of services!</p>
          </div>

          <div class="box box1">
            <div class="icon">
              <i class="bx bx-calendar-event"></i>
            </div>
            <p>The website can promote and organize events, conferences</p>
            <a href="#" class="btnReamMore">
              Read more
            </a>
          </div>
          <div class="box box2">
            <div class="icon">
              <i class="bx bx-info-circle"></i>
            </div>
            <p>The website can provide a comprehensive repository...</p>
            <a href="#" class="btnReamMore">
              Read more
            </a>
          </div>
          <div class="box box3">
            <div class="icon">
              <i class="bx bx-edit-alt"></i>
            </div>
            <p>The website can offer training programs and educational...</p>
            <a href="#" class="btnReamMore">
              Read more
            </a>
          </div>
          <div class="box box4">
            <div class="icon">
              <i class="bx bx-chat"></i>
            </div>
            <p>
              The website can provide consultancy services, where experienced...
            </p>
            <a href="#" class="btnReamMore">
              Read more
            </a>
          </div>
          <div class="box box5">
            <div class="icon">
              <i class="bx bxl-microsoft-teams"></i>
            </div>
            <p>
              The website can feature a curated selection of software and
              tools...
            </p>
            <a href="#" class="btnReamMore">
              Read more
            </a>
          </div>
          <div class="box box6">
            <div class="icon">
              <i class="bx bx-group"></i>
            </div>
            <p>The website can facilitate a community and networking...</p>
            <a href="#" class="btnReamMore">
              Read more
            </a>
          </div>
        </div>
      </section>

      <section class="testimonial" id="testimonial">
        <div class="head-text">
          <h6>TESTIMONIAL</h6>
          <h1>People Talk about us</h1>
        </div>
        <div class="container-t">
          <div class="testimonial-img">
            <div class="container-img">
              <div class="orbit orbit1">
                <div class="spins spins1">
                  <img class="img_emp1" src="img/emp1.jpg" alt="" />
                </div>
              </div>
              <div class="orbit orbit2">
                <div class="spins spins2">
                  <img class="img_emp2" src="img/emp2.jpg" alt="" />
                </div>
              </div>
              <div class="orbit orbit3">
                <div class="spins spins3">
                  <img class="img_emp3" src="img/emp3.jpg" alt="" />
                </div>
              </div>
              <div class="orbit orbit4">
                <div class="spins spins4">
                  <img class="img_emp4" src="img/emp4.jpg" alt="" />
                </div>
              </div>
              <div class="center"></div>
            </div>
          </div>

          <div class="testimonial-text">
            <div class="testimoniall mySwiper">
              <div class="testi-content swiper-wrapper">
                <div class="slide swiper-slide">
                  <div class="empl">
                    <img src="img/emp4.jpg" alt="" class="image" />
                    <div class="details">
                      <span class="name">BADSI HICHEM</span>
                      <span class="job">Teacher</span>
                    </div>
                  </div>

                  <p>
                    <i class="bx bxs-quote-alt-left"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, saepe provident dolorem a quaerat quo error facere
                    nihil deleniti eligendi ipsum adipisci, fugit,
                    <i class="bx bxs-quote-alt-right"></i>
                  </p>
                </div>

                <div class="slide swiper-slide">
                  <div class="empl">
                    <img src="img/emp1.jpg" alt="" class="image" />
                    <div class="details">
                      <span class="name">KHALDI BELKACEM</span>
                      <span class="job">Teacher</span>
                    </div>
                  </div>

                  <p>
                    <i class="bx bxs-quote-alt-left"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, saepe provident dolorem a quaerat quo error facere
                    nihil deleniti eligendi ipsum adipisci, fugit,
                    <i class="bx bxs-quote-alt-right"></i>
                  </p>
                </div>

                <div class="slide swiper-slide">
                  <div class="empl">
                    <img src="img/emp3.jpg" alt="" class="image" />
                    <div class="details">
                      <span class="name">AMAR BENSABER DJAMEL </span>
                      <span class="job">Teacher</span>
                    </div>
                  </div>

                  <p>
                    <i class="bx bxs-quote-alt-left"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, saepe provident dolorem a quaerat quo error facere
                    nihil deleniti eligendi ipsum adipisci, fugit,
                    <i class="bx bxs-quote-alt-right"></i>
                  </p>
                </div>

                <div class="slide swiper-slide">
                  <div class="empl">
                    <img src="img/emp2.jpg" alt="" class="image" />
                    <div class="details">
                      <span class="name">AZZA MOHAMMAD</span>
                      <span class="job">Teacher</span>
                    </div>
                  </div>

                  <p>
                    <i class="bx bxs-quote-alt-left"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, saepe provident dolorem a quaerat quo error facere
                    nihil deleniti eligendi ipsum adipisci, fugit,
                    <i class="bx bxs-quote-alt-right"></i>
                  </p>
                </div>
              </div>

              <div class="swiper-button-next nav-btn"></div>
              <div class="swiper-button-prev nav-btn"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="more-info">
        <div class="head-text">
          <h6>MORE INFO</h6>
          <h1>Common questions</h1>
        </div>

        <div class="containerd">
          <div class="container-m">
            <div class="box box1">
              <h4 class="question">
                What is the Management of Social Works website?
              </h4>
              <button class="toggle-btn">
                <i class="bx bx-plus"></i>
              </button>
              <div class="answer">
                <p>
                  The Automation of the Management of Social Works website is a
                  platform dedicated to exploring the role of automation in the
                  field of social work management. It provides information,
                  resources, and insights into how automation technologies are
                  transforming administrative processes, improving
                  collaboration, and enhancing decision-making in social work
                  organizations.
                </p>
              </div>
            </div>
            <div class="box box2">
              <h4 class="question">
                How can automation benefit social work management?
              </h4>
              <button class="toggle-btn">
                <i class="bx bx-plus"></i>
              </button>
              <div class="answer">
                <p>
                  Automation offers several benefits to social work management.
                  It streamlines administrative tasks, allowing social workers
                  to focus more on direct client engagement and delivering
                  essential services. It enhances collaboration and coordination
                  among social work teams, facilitating seamless communication
                  and task assignment. Automation also enables data collection,
                  analysis, and evidence-based decision-making, leading to more
                  effective interventions and improved service delivery.
                </p>
              </div>
            </div>
            <div class="box box3">
              <h4 class="question">
                What are some common automation technologies used in social work
                management?
              </h4>
              <button class="toggle-btn">
                <i class="bx bx-plus"></i>
              </button>
              <div class="answer">
                <p>
                  Some common automation technologies used in social work
                  management include case management software, appointment
                  scheduling systems, electronic documentation tools, and data
                  analytics platforms. These technologies automate tasks such as
                  client intake, data entry, documentation, and information
                  sharing, freeing up valuable time for social workers and
                  improving overall efficiency
                </p>
              </div>
            </div>
            <div class="box box4">
              <h4 class="question">
                How can social work organizations ensure ethical considerations
                while implementing automation?
              </h4>
              <button class="toggle-btn">
                <i class="bx bx-plus"></i>
              </button>
              <div class="answer">
                <p>
                  Ethical considerations are crucial when implementing
                  automation in social work. Organizations should prioritize
                  data privacy and security, ensuring that sensitive client
                  information is protected. They should also strike a balance
                  between automation and the human element of social work,
                  recognizing that technology should support, not replace, the
                  vital role of social workers in providing empathy, intuition,
                  and personal connection.
                </p>
              </div>
            </div>
            <div class="box box5">
              <h4 class="question">
                What resources are available on the website for professionals in
                the field?
              </h4>
              <button class="toggle-btn">
                <i class="bx bx-plus"></i>
              </button>
              <div class="answer">
                <p>
                  The Automation of the Management of Social Works website
                  provides a range of resources for professionals in the field.
                  These may include articles, case studies, whitepapers, and
                  guidelines on implementing automation technologies. The
                  website may also offer webinars, training materials, and links
                  to relevant tools and software that can support social work
                  management processes.
                </p>
              </div>
            </div>
            <div class="box box6">
              <h4 class="question">
                How can I stay updated with the latest developments in
                automation for social work management?
              </h4>
              <button class="toggle-btn">
                <i class="bx bx-plus"></i>
              </button>
              <div class="answer">
                <p>
                  The website may feature a newsletter or blog section that
                  provides regular updates on the latest developments in
                  automation for social work management. By subscribing to the
                  newsletter or following the blog, you can stay informed about
                  new technologies, best practices, and emerging trends in the
                  field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container-f">
          <div class="social">
            <img class="logo-dark" src="img/logodark.svg" alt="logo" />
            <img class="logo-light" src="img/logolight.svg" alt="logo" />
            <div class="social-icon">
              <div class="social-icon-i">
                <a href="#">
                  <i class="bx bxl-instagram"></i>
                </a>
              </div>
              <div class="social-icon-i">
                <a href="#">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
              <div class="social-icon-i">
                <a href="#">
                  <i class="bx bxl-twitter"></i>
                </a>
              </div>
              <div class="social-icon-i">
                <a href="#">
                  <i class="bx bxl-linkedin-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="info">
            <div class="one">
              <img class="logo-dark" src="img/logodark.svg" alt="logo" />
              <img class="logo-light" src="img/logolight.svg" alt="logo" />
              <p>
                About pages are perfect spaces to talk <br />
                about where you started, how you've <br />
                grown, and the ideals that have helped <br />
                your organization mature
              </p>
            </div>

            <div class="two">
              <h6>Address</h6>
              <a href="#">
                <i class="bx bxs-map"></i>BP 73, Bureau de poste EL WIAM <br />
                Sidi Bel Abbés 22016, Algérie
              </a>
            </div>

            <div class="three">
              <h6>Contact</h6>
              <div>
                <a href="#">
                  <i class="bx bx-phone"></i>+213-48-74-94-52
                </a>
                <a href="#">
                  <i class="bx bx-envelope"></i>contact@esi-sba.dz
                </a>
              </div>
            </div>

            <div class="four">
              <h6>Office</h6>
              <p>Sunday - Thursday</p>
              <p>8AM- 5PM</p>
            </div>
          </div>

          <div class="copyr">
            <p>
              © <span class="year"></span>
              <span class="logo-text">Finanworks</span> - All rights reserved.
            </p>
            <div class="f-item">
              <a href="#">Privacy</a>
              <a href="#">Security</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" class="scroll">
        <div class="circle2">
          <div class="logo-cr2">
            <i class="bx bx-up-arrow-alt"></i>
          </div>
          <div class="text2">
            <p>SCROLL TO TOP • SCROLL TO TOP •</p>
          </div>
        </div>
      </a>
      <script src="./js/script.js" type="text/babel"></script>

      <script src="./js/mainScript.js"></script>

      <script src="https://unpkg.com/scrollreveal"></script>

      <script src="js/swiper-bundle.min.js"></script>

      <script src="./js/tilt.js"></script>
    </div>
  );
}
