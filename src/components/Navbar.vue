<template>
  <div class="nav-top">
    <div class="nav-text">
      <router-link
        v-for="(name, i) in routes"
        @click="current = i"
        :class="{ active: i == current }"
        :key="name"
        :to="name"
        >{{ name }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      routes: ["Home", "FAQ"],
    };
  },
  name: "Navbar",
};
</script>

<style></style>
