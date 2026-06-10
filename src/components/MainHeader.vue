<template>
  <div class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="logo">
            <a class="navbar-brand">Imad Boussaid</a>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 navbar-nav-scroll"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item">
                <router-link to="/"
                  ><a class="nav-link" aria-current="page">Home</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/about"
                  ><a class="nav-link">About</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/services"
                  ><a class="nav-link">Services</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/contact"
                  ><a class="nav-link">Contact</a></router-link
                >
              </li>
            </ul>

            <div class="d-flex icons">
              <span class="icon icon-github">
                <a
                  href="https://github.com/Imad-Boussaid"
                  target="_blank"
                  title="Go to Github"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span class="icon icon-linkedin">
                <a
                  href="https://www.linkedin.com/in/imad-boussaid-9917123a5/"
                  target="_blank"
                  title="Go to LinkedIn"
                >
                  <i class="fa-brands fa-linkedin"></i
                ></a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>
<style scoped lang="scss">
.header {
  border-bottom: 1px solid #33333383;
  position: sticky;
  top: 0;
  z-index: 300;
  margin-bottom: 8px;
  background-color: #fff;
}
.navbar-brand {
  margin-right: 50px;
  color: #1f6f5f;
  font-size: 25px;
}
.icon i {
  color: #080616;
  font-size: 25px;
  margin-right: 10px;
  transition: 0.3s;
}
.icon:hover i {
  cursor: pointer;
  transform: scale(1.1);
}
li a {
  color: #080616;
  transition: 0.6s;
  position: relative;
}
li:hover a {
  color: #1f6f5f;
}
li a.router-link-exact-active a {
  color: #1f6f5f !important;
}
li a.router-link-exact-active a::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #1f6f5f;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (max-width: 992px) {
  div .d-flex {
    justify-content: center;
  }
}
</style>
