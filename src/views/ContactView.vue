<template>
  <div class="contact-page">
    <div class="contact">
      <div class="container">
        <div class="main-heading">
          <h2>Contact Us</h2>
          <p>
            There is some other information about us and all our social media
            sites, which facilitates the process of communicating with us
            directly
          </p>
        </div>
        <div class="content">
          <form @submit.prevent="sendEmail">
            <input
              type="text"
              v-model="name"
              class="main-input"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              v-model="email"
              class="main-input"
              placeholder="Your Email"
              required
            />

            <textarea
              v-model="message"
              class="main-input"
              placeholder="Your Message"
              required
            ></textarea>

            <input type="submit" value="Send Message" />
          </form>
          <div class="info">
            <h4>Get In Touch</h4>
            <span class="phone">+213 551223023</span>
            <h4>Where We Are</h4>
            <address>Ain El-Beida Ahriche<br />Mila, 43<br />Algeria</address>
          </div>
        </div>
      </div>
      <div class="imgs-container ">
        <div class="box">
          <a
            href="https://discord.com/channels/imaaaad.16_66637"
            target="_blank"
            title="Go to Discord"
          >
            <img src="../assets/social_media/discord.jpg" alt="" />
            <div class="caption">
              <h4>Discord</h4>
              <p>imaaaad.16_66637</p>
            </div>
          </a>
        </div>
        <div class="box">
          <a
            href="https://web.facebook.com/waaaaa.il"
            target="_blank"
            title="Go to Facebook"
          >
            <img src="../assets/social_media/facebook.jpg" alt="" />
            <div class="caption">
              <h4>Facebook</h4>
              <p>Imad Bousaied</p>
            </div>
          </a>
        </div>
        <div class="box">
          <a
            href="https://github.com/Imad-Boussaid"
            target="_blank"
            title="Go to Github"
          >
            <img src="../assets/social_media/github.jpg" alt="" />
            <div class="caption">
              <h4>Github</h4>
              <p>Imad Boussaid</p>
            </div>
          </a>
        </div>
        <div class="box">
          <a
            href="https://www.linkedin.com/in/imad-boussaid-9917123a5/"
            target="_blank"
            title="Go to LinkedIn"
          >
            <img src="../assets/social_media/linkedin.jpg" alt="" />
            <div class="caption">
              <h4>LinkedIn</h4>
              <p>IMAD BOUSSAID</p>
            </div>
          </a>
        </div>
      </div>
      <div class="pricing">
        <div class="container">
          <div class="main-heading">
            <h2>Pricing</h2>
            <p>
              Some prices for our services initially, you can contact us to
              negotiate
            </p>
          </div>
          <div class="plans">
            <div class="plan">
              <div class="head">
                <h3>Basic</h3>
                <span>5</span>
              </div>
              <ul>
                <li>HTML/CSS/JS Bug Fixing</li>
                <li>Minor Layout Adjustments</li>
                <li>Responsive Design Fix <br />&<br />Email Support</li>
                <li>1 Page Max</li>
              </ul>
              <div class="foot">
                <a href="#">Buy Now</a>
              </div>
            </div>
            <div class="plan">
              <div class="head">
                <h3>Premium</h3>
                <span>15</span>
              </div>
              <ul>
                <li>Custom Landing Page Design</li>
                <li>Component-Based Dev (Vue.js)</li>
                <li>Fully Responsive Layout</li>
                <li>Contact Form Integration</li>
              </ul>
              <div class="foot">
                <a href="#">Buy Now</a>
              </div>
            </div>
            <div class="plan">
              <div class="head">
                <h3>Pro</h3>
                <span>25</span>
              </div>
              <ul>
                <li>Multi-Page Web Application</li>
                <li>API & Dynamic Data Integration</li>
                <li>Clean & Documented Code</li>
                <li>SEO & Speed Optimization & 1 Week Free Support</li>
              </ul>
              <div class="foot">
                <a href="#">Buy Now</a>
              </div>
            </div>
            <div class="plan">
              <div class="head">
                <h3>Platinum</h3>
                <span>35</span>
              </div>
              <ul>
                <li>Full-Scale Single Page App</li>
                <li>Custom Admin Dashboard Integration</li>
                <li>Premium Animation & UI Effects</li>
                <li>Priority 24/7 Support</li>
              </ul>
              <div class="foot">
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
          <p class="contact-text">Contact us if you have special request</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "ContactView",
  // Add Email Js For Messages
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  mounted() {
    emailjs.init("fPbD33fceQm-ijVg0");
  },
  methods: {
    sendEmail() {
      emailjs
        .send("service_lvppkxb", "template_kd0dpxo", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then(() => {
          alert("Message sent successfully");

          this.name = "";
          this.email = "";
          this.message = "";
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred during transmission.");
        });
    },
  },
};
</script>

<style scoped>
/* Start Contact */
.contact {
  padding-top: 40px;
  padding-bottom: 40px;
}
.contact .content {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .contact .content {
    flex-direction: column;
  }
}
.contact .content form {
  flex-basis: 70%;
}
.contact .content form .main-input {
  padding: 20px;
  display: block;
  border: 1px solid #ccc;
  margin-bottom: 30px;
  width: 100%;
}
.contact .content form .main-input:focus {
  outline: none;
}
.contact .content form textarea.main-input {
  height: 200px;
}
.contact .content form input[type="submit"] {
  background-color: #169b80;
  color: white;
  padding: 20px;
  border: none;
  display: flex;
  margin-left: auto;
  text-transform: uppercase;
  cursor: pointer;
}
.contact .content .info {
  flex-basis: 25%;
}
@media (max-width: 767px) {
  .contact .content .info {
    order: -1;
    text-align: center;
  }
}
.contact .content .info h4 {
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 18px;
}
.contact .content .info .phone {
  display: block;
  color: #777;
  margin-bottom: 10px;
}
.contact .content .info h4:nth-of-type(2) {
  margin-top: 90px;
}
@media (max-width: 767px) {
  .contact .content .info h4:nth-of-type(2) {
    margin-top: 30px;
  }
}
.contact .content .info address {
  color: #777;
  line-height: 2;
}
@media (max-width: 767px) {
  .contact .content .info address {
    margin-bottom: 40px;
  }
}
/* End Contact */
/* Start Social Media  */
.imgs-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
}
.imgs-container .box {
  overflow: hidden;
  position: relative;
  width: 25%;
  background-color: #777;
}
.imgs-container .box:hover .caption {
  bottom: 0;
}
.imgs-container .box:hover img {
  transform: rotate(3deg) scale(1.1);
}
@media (max-width: 767px) {
  .imgs-container .box {
    flex-basis: 100%;
  }
}
@media (min-width: 768px) {
  .imgs-container .box {
    flex-basis: 50%;
  }
}
@media (min-width: 1199px) {
  .imgs-container .box {
    flex-basis: 25%;
  }
}
.imgs-container .box img {
  width: 100%;
  height: 300px;
  transition: 0.3s;
}
.imgs-container .box .caption {
  position: absolute;
  left: 0;
  padding: 20px;
  background-color: white;
  width: 100%;
  transition: 0.3s;
  bottom: -100%;
}
.imgs-container .box .caption h4 {
  font-weight: normal;
  margin-bottom: 10px;
}
.imgs-container .box .caption p {
  color: #169b80;
}
/* End Social Media  */
/* Start Pricing */
.pricing {
  padding-top: 40px;
  padding-bottom: 40px;
}
.pricing .plans {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}
.pricing .plans .plan {
  background-color: #fcfcfc;
  text-align: center;
}
.pricing .plans .plan .head {
  padding: 40px 20px;
  border-top: 1px solid #169b80;
  border-bottom: 1px solid #169b80;
}
.pricing .plans .plan .head h3 {
  font-weight: normal;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.pricing .plans .plan .head span {
  font-size: 60px;
  font-weight: bold;
}
.pricing .plans .plan .head span::before {
  content: "$";
  font-size: 25px;
  position: relative;
  top: -40px;
  margin-right: 15px;
  font-weight: normal;
}
.pricing .plans .plan .head span::after {
  content: "/hour";
  font-size: 20px;
  position: relative;
  right: -15px;
}
.pricing .plans .plan ul {
  border-bottom: 1px solid #169b80;
}
.pricing .plans .plan ul li {
  padding: 20px;
  position: relative;
}
.pricing .plans .plan ul li:not(:last-child)::after {
  content: "";
  width: 140px;
  height: 1px;
  background-color: #169b80;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
}
.pricing .plans .plan .foot a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
  border: 1px solid #169b80;
  color: #169b80;
  width: fit-content;
  margin: 30px auto;
}
.pricing .contact-text {
  text-align: center;
  margin: 50px auto 20px;
  font-size: 20px;
}
.pricing .contact-link {
  display: block;
  width: fit-content;
  margin: 20px auto;
  background-color: #169b80;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
}
/* End Pricing */
</style>
