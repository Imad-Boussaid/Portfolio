<template>
  <div class="services">
    <div class="main-heading">
      <h2>Services</h2>
      <p>
        Welcome to our services page, where we turn your ideas into powerful
        digital realities. Explore how we help you grow.
      </p>
    </div>
    <div class="design">
      <div class="image">
        <img src="../assets/images/mobile.png" alt="Mobile" />
      </div>
      <div class="text">
        <h2>Our Design Comes With ...</h2>
        <ul>
          <li><i class="fa-solid fa-mobile"></i>Responsive Design</li>
          <li>
            <i class="fa-solid fa-wand-magic-sparkles"></i>Modern And Clean
            Design
          </li>
          <li><i class="fa-solid fa-pen-nib"></i>Clean Code</li>
          <li>
            <i class="fa-brands fa-internet-explorer"></i>Browser Friendly
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="services-container">
        <div class="srv-box">
          <i class="fa-solid fa-mobile"></i>
          <div class="text">
            <h3>Responsive Design</h3>
            <p>
              I craft flexible digital interfaces ensuring seamless user
              experiences across all screens, making websites look stunning and
              professional whether accessed via smartphones, tablets, or
              desktops
            </p>
          </div>
        </div>
        <div class="srv-box">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <div class="text">
            <h3>Modern And Clean Design</h3>
            <p>
              design contemporary visual identities blending simplicity with
              digital elegance, utilizing latest UI trends to deliver
              comfortable, innovative, and completely clutter-free user
              experiences.
            </p>
          </div>
        </div>
        <div class="srv-box">
          <i class="fa-solid fa-pen-nib"></i>
          <div class="text">
            <h3>Clean Code</h3>
            <p>
              I write smart, organized code following highest global standards,
              guaranteeing error-free software architecture that is highly
              scalable for future development and exceptionally fast.
            </p>
          </div>
        </div>
        <div class="srv-box">
          <i class="fa-brands fa-internet-explorer"></i>
          <div class="text">
            <h3>Browser Friendly</h3>
            <p>
              I ensure absolute operational efficiency and complete website
              compatibility across all major internet browsers, granting every
              single visitor a stable, integrated, and flawless browsing
              experience.
            </p>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="row flex-wrap text-center">
          <SkillsCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SkillsCard from "@/components/SkillsCard.vue";
export default {
  components: {
    SkillsCard,
  },
  name: "ServicesView",
};
</script>

<style>
/* Start Design */
.design {
  padding-top: 50px;
  padding-bottom: 50px;
  height: 600px;
  position: relative;
  background-image: url("../assets/images/design-features.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 100px;
}
.design::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 60%);
}
.design .image,
.design .text {
  position: relative;
  z-index: 2;
  flex: 1;
}
.design .image {
  text-align: center;
}
@media (max-width: 767px) {
  .design .image {
    display: none;
  }
}
.design .image img {
  position: relative;
  bottom: -150px;
}
.design .text {
  color: white;
  padding: 50px;
  background-color: #169b80a1;
  text-align: left;
}
.design .text h2 {
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.design .text ul li {
  padding: 15px 0;
  font-size: 25px;
}
.design .text ul li i {
  margin-right: 10px;
}
/* End Design */
/* Start Services */
@media (min-width: 768px) {
  .services .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-column-gap: 40px;
    grid-row-gap: 60px;
    margin-bottom: 30px;
  }
}
.services .srv-box {
  display: flex;
}
.services .srv-box i {
  margin-right: 50px;
  font-size: 35px;
  color: #169b80;
}
.services .srv-box .text {
  text-align: left;
}
@media (max-width: 767px) {
  .services .srv-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  .services .srv-box .text {
    text-align: center;
  }

  .services .srv-box i {
    margin: 0 0 30px;
  }
}
.services .srv-box h3 {
  margin-bottom: 30px;
  color: #169b80;
}
.services .srv-box p {
  line-height: 2;
  color: #080616;
}
/* End Services */
/* Start Card  */
.cards {
  margin: 50px auto;
}
.row {
  justify-content: center;
  gap: 45px;
}
/* End Card  */
</style>
