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

<style></style>
