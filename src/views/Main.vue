<template>
  <div class="home">
    <h1>MyCloaks</h1>
    <button v-if="!alreadyInstalled" v-on:click="installEvent">
      <h1>Install MyCloaks</h1>
    </button>
    <button v-else-if="alreadyInstalled" v-on:click="uninstallEvent">
      <h1>Uninstall MyCloaks</h1>
    </button>
  </div>
</template>

<script>
import fs from "fs";

export default {
  data() {
    return {
      areWeAdmin: null,
      alreadyInstalled: false,
    };
  },
  beforeMount() {
    const hostsFile = "C:\\Windows\\System32\\drivers\\etc\\hosts";

    fs.readFileSync(hostsFile, function (err, string) {
      if (err) throw err;
      if (string.includes("127.0.0.1 s.optifine.net")) {
        return (this.alreadyInstalled = true);
      }
    });
  },
  methods: {
    installEvent: function () {
      const hostsFile = "C:\\Windows\\System32\\drivers\\etc\\hosts";

      fs.appendFileSync(hostsFile, "\n127.0.0.1 s.optifine.net", "utf8");
    },
  },
};
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
}
</style>
