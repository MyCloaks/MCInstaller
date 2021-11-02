<template>
  <div class="main">
    <span class="openbtn" title="Open Settings"
      ><i class="fas fa-cogs"></i
    ></span>

    <div class="user-count">
      <p><i class="fas fa-download"></i> 1,123,456</p>
    </div>
    <span id="closeBtn" class="close-btn" title="Close MyCloaks"
      ><i class="fas fa-window-close"></i
    ></span>
    <div class="container">
      <router-view />
      <div class="disclaimer">
        <span>DISCLAIMER</span>
        <strong
          >: MyCloaks is a "Use At Your Own Risk" application for any 3rd party
          Minecraft Client. We are not held accountable for anything happening
          to your account(s), computer(s), server(s) nor client(s).</strong
        >
      </div>
    </div>

    <div class="wrapper">
      <div class="icon-holder">
        <div class="icon discord">
          <div class="tooltip">MyCloaks Discord</div>
          <a
            ><span><i class="fab fa-discord"></i></span
          ></a>
        </div>
        <div class="icon twitter">
          <div class="tooltip">MyCloaks Twitter</div>
          <a
            ><span><i class="fab fa-twitter"></i></span
          ></a>
        </div>
        <div class="icon tiktok">
          <div class="tooltip">MyCloaks Tiktok</div>
          <a
            ><span><i class="fab fa-tiktok"></i></span
          ></a>
        </div>
        <div class="icon github">
          <div class="tooltip">MyCloaks Github</div>
          <a
            ><span><i class="fab fa-github"></i></span
          ></a>
        </div>
        <div class="icon youtube">
          <div class="tooltip">MyCloaks Youtube</div>
          <a
            ><span><i class="fab fa-youtube"></i></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  mounted() {
    // TODO(greek): Remove this and use something better. It doesn't work half the time :^)
    this.$nextTick(function () {
      document
        .getElementById("closeBtn")
        .addEventListener("click", function () {
          ipcRenderer.send("closeApp");
        });
    });
  },

  methods: {
    closeButton: function () {
      ipcRenderer.send("closeApp");
    },
  },
};
</script>

<style></style>
