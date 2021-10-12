<template>
  <Titlebar />
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";

export default {
  components: { Titlebar },
};
</script>

<style>
body {
  border: 1px solid #48545c;
  overflow-y: hidden;
}

.main {
  height: calc(100% - 32px);
  padding: 20px;
  overflow-y: auto;
}
</style>
