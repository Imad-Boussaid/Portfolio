<template>
  <div class="home-page">
    <div class="landing">
      <div class="overlay"></div>
      <div class="text">
        <div class="content">
          <h2>
            Vue.js World !<br />
            I'm a <b>Front-End </b> Web Application Developer.
          </h2>
          <p>
            - I build scalable, interactive web applications using modern web
            technologies.s <br />
            - I design and develop beautiful, high-efficiency user interfaces.
            <br />
            - From design to execution, delivering tailored web solutions that
            meet users' needs.
          </p>
        </div>
      </div>
      <i class="fas fa-angle-left change-background fa-2x"></i>
      <i class="fas fa-angle-right change-background fa-2x"></i>
      <ul class="bullets">
        <li></li>
        <li class="active"></li>
        <li></li>
      </ul>
    </div>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>I have used most of my information</strong>
      in this simple profile, I hope you like my work, and I am honored to
      become a member of the team
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div class="video">
      <video autoplay muted loop>
        <source src="../assets/images/programming.mp4" type="video/mp4" />
      </video>
      <div class="text">
        <h2>turn your idea into reality</h2>
        <p>Its All You Need</p>
        <a href="/services">See More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped lang="scss">
// Start Landing
.landing {
  min-height: 100vh;
  background-color: #1f2021;
  background-image: url("../assets/images/homecover.png");
  background-size: cover;
  position: relative;
  margin-bottom: 20px;
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 60%);
  }
  .text {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    padding: 50px;
    background-color: #1f6f5f;
    color: white;
    display: flex;
    justify-content: flex-end;
  }
  .text .content {
    max-width: 600px;
    text-align: left;
  }
}
@media (max-width: 767px) {
  .landing {
    background-image: url("../assets/images/mobilecover.png");
  }
  .landing .text {
    width: 100%;
    background-color: #1f6f5f77;
  }
  .landing .text .content {
    max-width: 100%;
  }
}
.landing .text .content h2 {
  font-size: 32px;
  font-weight: normal;
  line-height: 1.5;
  margin-bottom: 20px;
}
.landing .text .content p {
  font-size: 17px;
  line-height: 2;
}
.landing .change-background {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #ddd;
}
@media (max-width: 767px) {
  .landing .change-background {
    display: none;
  }
}
.landing .fa-angle-left {
  left: 30px;
}
.landing .fa-angle-right {
  right: 30px;
}
.landing .bullets {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  display: flex;
}
.landing .bullets li {
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 50%;
  margin-right: 10px;
}
.landing .bullets li.active {
  background-color: #1f6f5f;
  border-color: #080616;
}
// End Landing
// ---------------------------
// Start Video
.video {
  position: relative;
}
.video::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 40%);
}
.video video {
  width: 100%;
}
.video .text {
  width: 100%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 50px;
  background-color: #1f6f5fd8;
  color: white;
  text-align: center;
}
.video .text h2 {
  margin: 0 0 30px;
  text-transform: uppercase;
  font-weight: normal;
}
.video .text p {
  margin-bottom: 30px;
}
.video .text a {
  background-color: #fff;
  color: #080616;
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .video .text {
    background-color: transparent;
  }
}
// End Video
</style>
