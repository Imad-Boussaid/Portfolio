<template>
  <div class="card" v-for="skill in skills" :key="skill.id">
    <img :src="skill.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ skill.title }}</h5>
      <p class="card-text">{{ skill.content }}</p>
    </div>
  </div>
</template>
<script>
import img1 from "@/assets/Skills/html.png";
import img2 from "@/assets/Skills/css.jpg";
import img3 from "@/assets/Skills/js.png";
import img4 from "@/assets/Skills/vue.png";
import img5 from "@/assets/Skills/bootstrap.jpg";
import img6 from "@/assets/Skills/scss.webp";
export default {
  data: function () {
    return {
      skills: [
        {
          id: 1,
          image: img1,
          title: "Html",
          content:
            "Crafting clean, semantic, and well-structured web pages. I focus on modern SEO practices and accessibility standards to ensure websites are easily discoverable and usable for everyone.",
        },
        {
          id: 2,
          image: img2,
          title: "Css",
          content:
            "Bringing web layouts to life with precise styling, layouts, and animations. I specialize in typography, color theory, and creating visually appealing designs that match original mockups perfectly.",
        },
        {
          id: 3,
          image: img3,
          title: "JavaScript",
          content:
            "Adding life and interactivity to static web pages. I excel at handling user events, manipulating the DOM, and implementing complex logic to create engaging and intuitive user interfaces.",
        },
        {
          id: 4,
          image: img4,
          title: "Vue",
          content:
            "Building dynamic and high-performance Single Page Applications (SPAs). I leverage Vue's reactive data binding and component-based architecture to deliver fast, seamless, and modern user experiences.",
        },
        {
          id: 5,
          image: img5,
          title: "Bootstrap",
          content:
            "Speeding up development time using Bootstrap powerful grid system and ready-made components. I ensure websites are fully responsive and look seamless on mobiles, tablets, and desktops.",
        },

        {
          id: 6,
          image: img6,
          title: "Scss",
          content:
            "Writing scalable and maintainable styles for large-scale projects. I utilize advanced features like variables, nesting, and mixins to keep the codebase clean, organized, and easy to update.",
        },
      ],
    };
  },
  name: "SkillsCard",
  props: ["imageurl", "name", "description"],
};
</script>
<style scoped lang="scss">
.card {
  width: 20rem;
  padding: 0;
  img {
    height: 250px;
  }
  h5 {
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
