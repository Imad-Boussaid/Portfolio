<template>
  <div class="about-page">
    <div class="about">
      <div class="container">
        <div class="main-heading">
          <h2>About Me</h2>
          <p>
            Welcome to my story, where passion meets code. Discover my journey,
            expertise, and how I bring digital visions to life.
          </p>
        </div>
        <img src="../assets/images/about.jpg" alt="" />
      </div>
    </div>
    <div class="stats">
      <div class="container">
        <div class="box">
          <i class="fa-sharp-duotone fa-regular fa-user"></i>
          <div class="number">23</div>
          <p>Age</p>
        </div>
        <div class="box">
          <i class="fa-solid fa-flag"></i>
          <div class="number">Algeria</div>
          <p>Country</p>
        </div>
        <div class="box">
          <i class="fa-solid fa-folder"></i>
          <div class="number">+10</div>
          <p>Project</p>
        </div>
        <div class="box">
          <i class="fas fa-trophy"></i>
          <div class="number">+1 year</div>
          <p>Experience</p>
        </div>
      </div>
    </div>
    <div class="our-skills">
      <div class="container">
        <div class="testimonials">
          <h3>Testimonials</h3>
          <p>Some customer comments and reactions</p>
          <div class="content" v-for="test in testimonials" :key="test.id">
            <img :src="test.image" alt="" />
            <div class="text">
              {{ test.comment }}
              <p>{{ test.name }}</p>
            </div>
          </div>
          <ul class="bullets">
            <li></li>
            <li class="active"></li>
            <li></li>
          </ul>
        </div>
        <div class="skills">
          <h3>Skills</h3>
          <p>Skills and progress rate</p>
          <div class="prog-holder">
            <h4>Vue</h4>
            <div class="prog">
              <span
                style="width: 80%; background: #008f19"
                data-progress="80%"
              ></span>
            </div>
          </div>
          <div class="prog-holder">
            <h4>Html &amp; Css</h4>
            <div class="prog">
              <span
                style="
                  width: 95%;
                  background-image: linear-gradient(45deg, #dd6d0d, #0050c5);
                "
                data-progress="95%"
              ></span>
            </div>
          </div>
          <div class="prog-holder">
            <h4>JavaScript</h4>
            <div class="prog">
              <span
                style="width: 85%; background: #e9e914"
                data-progress="85%"
              ></span>
            </div>
          </div>
          <div class="prog-holder">
            <h4>Bootstrap & scss</h4>
            <div class="prog">
              <span
                style="
                  width: 85%;
                  background-image: linear-gradient(
                    45deg,
                    #592d81 40%,
                    #e970e6
                  );
                "
                data-progress="85%"
              ></span>
            </div>
          </div>
          <div class="prog-holder">
            <h4>Php & Larvavel & Sql</h4>
            <div class="prog">
              <span
                style="
                  width: 55%;
                  background-image: linear-gradient(
                    45deg,
                    #53355f 20%,
                    #c5421b
                  );
                "
                data-progress="55%"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-success" role="alert">
      I speak Arabic,
      <a href="#" class="alert-link">and my English level is around 35%</a>. I
      am continuing and will strive to learn more and facilitate working with
      the group
    </div>
  </div>
</template>
<script>
import img1 from "@/assets/images/skills-01.jpg";
import img2 from "@/assets/images/skills-02.jpg";
import img3 from "@/assets/images/skills-03.jpg";
import img4 from "@/assets/images/skills-04.jpg";
import img5 from "@/assets/images/skills-05.webp";
export default {
  data: function () {
    return {
      testimonials: [
        {
          id: 1,
          name: "Sherm",
          comment:
            "It would be nice  if you have build a useful project, for beginners its little difficult to glue them all together",
          image: img1,
        },
        {
          id: 2,
          name: "Thayne",
          comment: "May Allah Bless you bro. This is an amazing Website ....",
          image: img2,
        },
        {
          id: 3,
          name: "Poul",
          comment:
            "Everything is well made . You are super talented, and good luck",
          image: img3,
        },
        {
          id: 4,
          name: "Willey",
          comment:
            "thank you for this professional job ...... very important and helpful application graciass",
          image: img4,
        },
        {
          id: 5,
          name: "Mathe",
          comment:
            "This is a very nice portfolio, I appreciate your work. But guys, think... If u copy that code, does that mean you did it? If you are web developers, try to make your own site, It might took even 2 days to do it, but do it alone.. honestly.",
          image: img5,
        },
      ],
    };
  },

  name: "AboutView",
};
</script>

<style scoped lang="scss">
/* Start About */
.about {
  padding-top: 10px;
  overflow: hidden;
  text-align: center;
}
.about img {
  position: relative;
  bottom: -120px;
  margin-top: -120px;
  max-width: 100%;
}
@media (max-width: 767px) {
  .about img {
    bottom: -60px;
    margin-top: -60px;
  }
}
/* End About */
/* Start Stats */
.stats {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  background-image: url("../assets/images/shuffle-02.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}
.stats .container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.stats .container .box {
  color: white;
  padding: 50px;
  background-color: #fff;
  color: #169b80;
}
@media (max-width: 767px) {
  .stats .container .box {
    flex-basis: 100%;
  }
}
@media (min-width: 768px) {
  .stats .container .box {
    flex-basis: 50%;
  }
}
@media (min-width: 992px) {
  .stats .container .box {
    flex-basis: 25%;
  }
}
.stats .container .box i {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #169b80;
  margin: 0 auto 30px;
  color: #ffffff;
  font-size: 20px;
}
.stats .container .box .number {
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 20px;
}
.stats .container .box p {
  font-size: 18px;
  color: #080616;
}
/* End Stats */
/* Start Skills */
.our-skills {
  padding-top: 50px;
  padding-bottom: 10px;
  margin-top: 50px;
}
.our-skills .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (min-width: 992px) {
  .our-skills .container > div {
    flex-basis: 45%;
  }
}
.our-skills .container > div > h3 {
  margin: 0 0 30px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
}
.our-skills .container > div > p {
  color: #777;
  line-height: 2;
  text-align: center;
  margin-bottom: 60px;
}
.our-skills .testimonials .content {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.our-skills .testimonials .content img {
  width: 100px;
  border-radius: 50%;
  margin-right: 50px;
}
@media (max-width: 767px) {
  .our-skills .testimonials .content {
    flex-direction: column;
    text-align: center;
  }
  .our-skills .testimonials .content img {
    margin: 0 auto 20px;
  }
}
.our-skills .testimonials .text {
  line-height: 1.8;
  border-bottom: 1px solid #ccc;
}
.our-skills .testimonials .text p {
  color: #777;
  text-align: right;
  font-size: 14px;
  margin-bottom: 10px;
}
.our-skills .testimonials .bullets {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.our-skills .testimonials .bullets li {
  width: 14px;
  height: 14px;
  border: 1px solid #aaa;
  border-radius: 50%;
  margin-right: 10px;
}
.our-skills .testimonials .bullets li.active {
  background-color: #169b80;
  border-color: #777;
}
@media (max-width: 992px) {
  .our-skills .skills {
    width: 100%;
  }
}
.our-skills .skills .prog-holder {
  margin-bottom: 40px;
}
.our-skills .skills .prog-holder h4 {
  margin-bottom: 45px;
  font-weight: normal;
  text-transform: uppercase;
}
.our-skills .skills .prog-holder .prog {
  background-color: #dedadc;
  height: 30px;
}
.our-skills .skills .prog-holder .prog span {
  display: block;
  height: 100%;
  position: relative;
}
.our-skills .skills .prog-holder .prog span::before {
  content: attr(data-progress);
  position: absolute;
  background-color: black;
  color: white;
  top: -40px;
  right: -18px;
  padding: 4px 0;
  width: 40px;
  text-align: center;
  border-radius: 4px;
}
.our-skills .skills .prog-holder .prog span::after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 8px;
  border-color: black transparent transparent;
  right: -8px;
  top: -10px;
}
/* End Skills */
</style>
