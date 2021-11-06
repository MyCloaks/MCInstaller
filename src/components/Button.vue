<template>
  <div
    class="cont_principal"
    id="cont_principal"
    v-on:click="finishTransition()"
  >
    <div class="cont_centrar" :class="{ activebtn: isActive }">
      <p class="texto_centro" :class="{ active_txt: isActive }">
        <slot></slot>
      </p>
      <svg
        version="1.1"
        id="svg4174"
        viewBox="0 0 300 100"
        height="100"
        width="300"
      >
        <g transform="translate(0,-952.36216)" id="layer1">
          <rect
            y="955.21716"
            x="2.8549886"
            height="94.290024"
            width="294.29001"
            id="rect4147"
            style="
              opacity: 1;
              fill: none;
              fill-opacity: 1;
              stroke: #c33b23;
              stroke-width: 5.70997715;
              stroke-miterlimit: 4;
              stroke-opacity: 1;
            "
          />
        </g>
      </svg>
      <Checkmark v-if="isActive" />
    </div>
  </div>
</template>

<script>
import Checkmark from "./Icons/Checkmark.vue";

export default {
  name: "Button",
  props: ["isActive", "finished"],
  components: {
    Checkmark,
  },
  methods: {
    finishTransition: function () {
      setTimeout(function () {
        document.querySelector(".cont_centrar").className =
          "cont_centrar activebtn_fin";
        document.querySelector(".texto_centro").className = "texto_centro op_0";
      }, 15000);
    },
  },
};
</script>
