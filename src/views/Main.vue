<template>
  <div class="home-page-hide hide-page-anim">
    <Button v-if="!installState" @click="installButton()">{{
      installText.toUpperCase()
    }}</Button>
    <Button v-if="installState" :isActive="true">{{
      installText.toUpperCase()
    }}</Button>

    <div class="cont_principal2">
      <div class="cont_centrar2" onclick=" btn_active2()">
        <p class="texto_centro2">UNINSTALL</p>
        <svg
          version="1.1"
          id="svg41742"
          viewBox="0 0 300 100"
          height="100"
          width="300"
        >
          <g transform="translate(0,-952.36216)" id="layer12">
            <rect
              y="955.21716"
              x="2.8549886"
              height="94.290024"
              width="294.29001"
              id="rect41472"
              style="
                opacity: 1;
                fill: none;
                fill-opacity: 1;
                stroke: #c33b233b;
                stroke-width: 5.70997715;
                stroke-miterlimit: 4;
                stroke-opacity: 1;
              "
            />
          </g>
        </svg>
        <svg
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="svg22"
          viewBox="0 0 20 20.000001"
          height="32"
          width="32"
        >
          <g transform="translate(0,-1032.3622)" id="layer12">
            <path
              id="path41382"
              d="m 0.89488966,1042.5048 5.36642974,5.4927 12.8794496,-11.9324"
              style="
                fill: none;
                fill-rule: evenodd;
                stroke: #c33b233b;
                stroke-width: 2;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                stroke-opacity: 1;
              "
            />
          </g>
        </svg>
      </div>
    </div>

    <div class="changelogs-title" id="changelogs-title">
      <h1>CHANGELOGS</h1>
    </div>
    <div class="change-logs-top" id="change-logs-top">
      <div class="change-logs-back" id="change-logs-back">
        <div class="change-logs-pic" id="change-logs-pic">
          <!-- <img src="/src/icon/TechoChan.png" alt="Change Logs Image"> -->
        </div>
      </div>
      <div class="change-logs-title" id="change-logs-title">
        <p>Temporary Title Text</p>
        <div class="change-logs-button" id="change-logs-button">
          <button class="changelogsBtn">
            <a>READ MORE</a>
          </button>
        </div>
      </div>
    </div>

    <div class="news-top-title" id="news-top-title">
      <h1>NEWS</h1>
    </div>
    <div class="news-top" id="news-top">
      <div class="news-back" id="news-back">
        <div class="news-pic" id="news-pic">
          <!-- <img src="/src/icon/TechoChan.png" alt="Change Logs Image"> -->
        </div>
      </div>
      <div class="news-title" id="news-title">
        <p>Temporary Title Text</p>
        <div class="news-button" id="news-button">
          <button class="newsBtn"><a>READ MORE</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
// import Checkmark from "../components/Icons/Checkmark.vue"
import fs from "fs";
const hostsFile = "C:\\Windows\\System32\\drivers\\etc\\hosts";

export default {
  components: {
    Button,
  },
  beforeMount() {
    fs.readFileSync(hostsFile, function (err, string) {
      if (err) throw err;
      if (string.includes("127.0.0.1 s.optifine.net")) {
        return (this.alreadyInstalled = true);
      }
    });
  },
  data() {
    return {
      installState: false,
      isFinished: false,
      installText: "Install",
      uninstallText: "Uninstall",
    };
  },
  mounted() {
    const button = document.querySelector(".changelogsBtn");
    button.addEventListener("mousemove", (e) => {
      const { x, y } = button.getBoundingClientRect();
      button.style.setProperty("--x", e.clientX - x);
      button.style.setProperty("--y", e.clientY - y);
    });

    const button2 = document.querySelector(".newsBtn");
    button2.addEventListener("mousemove", (e) => {
      const { x, y } = button2.getBoundingClientRect();
      button2.style.setProperty("--x", e.clientX - x);
      button2.style.setProperty("--y", e.clientY - y);
    });
  },
  methods: {
    installButton: function () {
      this.installState = true;
      this.installText = "INSTALLING...";

      if (this.alreadyInstalled) {
        return;
      } else {
        fs.appendFileSync(
          hostsFile,
          "\n127.0.0.1 s.optifine.net # Added by MyCloaks",
          "utf8"
        );
        this.alreadyInstalled = true; // TODO: Save this in some other state or check if the string above exists already, this will reset on restart :(
        return;
      }
    },
    uninstallButton: function () {
      fs.readFileSync(hostsFile, function (err, data) {
        if (err) throw err;
        var newValue = data.replace(
          "\n127.0.0.1 s.optifine.net # Added by MyCloaks",
          ""
        );

        fs.writeFile(hostsFile, newValue, "utf-8", function (err) {
          if (err) throw err;
        });
      });
    },
  },
};
</script>

<style></style>
