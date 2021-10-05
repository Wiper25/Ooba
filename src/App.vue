<template>
  <div id="app">
    <topBlock :class="{ bgTop: !status }" @menuStatusTop="menuStatusApp" />
    <mobileMenu
      @exitMenu="exitMenu"
      :class="{ displayNone: status }"
      class="mobileMenu"
    />
    <aboutBlock :style="status ? '' : 'filter: blur(50px)'" />
    <exportBlock :style="status ? '' : 'filter: blur(50px)'" />
    <missionBlock :style="status ? '' : 'filter: blur(50px)'" />
    <logisticsBlock :style="status ? '' : 'filter: blur(50px)'" />
    <bottomBlock :style="status ? '' : 'filter: blur(50px)'" />
  </div>
</template>

<script>
import topBlock from "./components/topBlock.vue";
import mobileMenu from "./components/mobileMenu.vue";
import aboutBlock from "./components/aboutBlock.vue";
import exportBlock from "./components/exportBlock.vue";
import missionBlock from "./components/missionBlock.vue";
import logisticsBlock from "./components/logisticsBlock.vue";
import bottomBlock from "./components/bottomBlock.vue";

export default {
  name: "App",
  components: {
    topBlock,
    mobileMenu,
    aboutBlock,
    exportBlock,
    missionBlock,
    logisticsBlock,
    bottomBlock,
  },
  data() {
    return {
      status: true,
      menuClick: false,
    };
  },
  methods: {
    menuStatusApp(status) {
      this.status = status;
    },
    exitMenu(exit) {
      this.status = exit;
      this.menuClick = exit;
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
#app {
  position: relative;
}
.displayNone {
  display: none;
}
.mobileMenu {
  position: absolute;
}
.bgTop {
  background-color: #14142a;
}
.bg {
  height: 100%;
  background-color: #ffffffab;
}
</style>
