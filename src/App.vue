<template>
  <div class="dragTop" id="dragTop"></div>

  <div class="close-button" @click="closeApp()">
    <h1 class="closeBtn"><i class="fas fa-times"></i></h1>
  </div>

  <Navbar />

  <div class="logo-top" id="logo-top">
    <div class="logo-img" id="logo-img">
      <img
        src="https://cdn.discordapp.com/attachments/896367192839434251/902995187410804766/MCLogoGRCropped.png"
        alt="MyCloaks logo"
      />
      <div class="logo-text" id="logo-text">
        <h1>MyCloaks</h1>
        <h2>©️ Free Cosme<span>t</span>i<span>c</span>s</h2>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script lang="js">
import Navbar from "./components/Navbar.vue"
var homeBtn = document.getElementById("home");
var storeBtn = document.getElementById("faq");

const remote = require("electron").remote;

export default {
  name: "Home",
  components: {
    Navbar
  },
  data() {
    return {
      window: remote.getCurrentWindow(),
    };
  },
  methods: {
    closeApp() {
      this.window.close();
    },
  },
};
</script>
