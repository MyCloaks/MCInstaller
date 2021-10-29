<template>
  <ul class="nav">
    <li>
      <a href="#">MyCloaks<span class="versionSpan">V.1.0.0</span></a>
    </li>
  </ul>

  <button @click="installEvent()">Install <strong>MyCloaks</strong></button>
  <button>Uninstall <strong>MyCloaks</strong></button>
</template>

<script>
import fs from "fs";

export default {
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

      if (this.alreadyInstalled) {
        return;
      } else {
        fs.appendFileSync(hostsFile, "\n127.0.0.1 s.optifine.net", "utf8");
        this.alreadyInstalled = true; // TODO: Save this in some other state or check if the string above exists already, this will reset on restart :(
        return;
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
