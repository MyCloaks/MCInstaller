<template>
  <div class="dragTop" id="dragTop"></div>

  <div class="close-button" @click="closeApp()">
    <h1 class="closeBtn"><i class="fas fa-times"></i></h1>
  </div>

  <div class="nav-top">
    <div class="nav-text">
      <router-link to="/" v-if="(this.$router.path = `/`)" class="home active"
        >Home</router-link
      >
      <router-link to="/" v-else-if="(this.$router.name = `/faq`)" class="home"
        >Home</router-link
      >
      <router-link
        to="/faq"
        v-if="(this.$route.path = `/faq`)"
        class="faq active"
        id="faq"
        >FAQ</router-link
      >
    </div>
  </div>

  <div class="logo-top" id="logo-top">
    <div class="logo-img" id="logo-img">
      <img
        src="https://cdn.discordapp.com/attachments/896367192839434251/902995187410804766/MCLogoGRCropped.png"
        alt="MyCloaks logo"
      />
      <div class="logo-text" id="logo-text">
        <h1>MyCloaks</h1>
        <h2>Free Cosme<span>t</span>i<span>c</span>s</h2>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script lang="js">
const remote = require("electron").remote;

export default {
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
