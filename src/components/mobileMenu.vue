<template>
  <div id="mobileMenu" class="bg">
    <div class="menu">
      <a @click="exitMenu()" href="#aboutBlock">
        <p>{{ this.$store.getters.NAME.menu[0] }}</p>
        <p>➔</p>
      </a>
      <a @click="exitMenu()" href="#missionBLock">
        <p>{{ this.$store.getters.NAME.menu[1] }}</p>
        <p>➔</p>
      </a>
      <a @click="exitMenu()" href="#exportBlock">
        <p>Ooba Export</p>
        <p>➔</p>
      </a>
      <a @click="exitMenu()" href="#logisticsBlock">
        <p>{{ this.$store.getters.NAME.menu[2] }}</p>
        <p>➔</p>
      </a>
      <div class="socialContact">
        <img src="../assets/iconInstaWhite.png" alt="" /><img
          src="../assets/iconTwittWhite.png"
          alt=""
        /><img src="../assets/iconYouWhite.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exit: true,
    };
  },
  methods: {
    exitMenu() {
      this.$store.commit("SET_EXIT", this.exit);
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: rgb(255 255 255 / 90%);
  width: 100%;
  min-width: 1170px;
  height: 100vw;
  z-index: 100;
}
.menu {
  background-color: #14142a;
  width: 100%;
  min-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  position: fixed;
}
.menu a {
  width: 95%;
  color: white;
  list-style-type: none;
  font-family: Manrope;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  text-decoration: none;
  cursor: pointer;
}
.socialContact {
  display: none;
}

@media (max-width: 375px) {
  .socialContact {
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
  }
}
</style>