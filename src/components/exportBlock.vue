<template>
  <div id="root">
    <div id="exportBlock">
      <div class="mobile">
        <img src="../assets/imgExport-1.png" alt="" />
      </div>
      <div class="itemExport-1">
        <h1>Ooba Export</h1>
        <p>
          {{ this.$store.getters.NAME.expBlock[0] }}
        </p>
      </div>
      <div class="itemExport-2">
        <img src="../assets/imgExport-1.png" alt="" />
      </div>
      <div class="itemExport-3">
        <img src="../assets/imgExport-2.png" alt="" />
      </div>
      <div class="itemExport-4">
        <p>
          {{ this.$store.getters.NAME.expBlock[1] }}
        </p>
      </div>
    </div>
    <maps />
  </div>
</template>

<script>
import maps from "./mapsBlock.vue";
export default {
  components: {
    maps,
  },
};
</script>

<style scoped>
#exportBlock {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 1170px;
  position: relative;
}
.itemExport-1 {
  width: 50%;
  height: 600px;
  background-color: #f7faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.itemExport-1 h1 {
  font-family: Montserrat;
  font-weight: 800;
  font-size: 50px;
  line-height: 61px;
  margin: 0;
}
.itemExport-1 p {
  width: 51%;
  font-family: Manrope;
  font-size: 20px;
  margin: 0;
  padding-top: 24px;
}
.itemExport-2 {
  width: 50%;
  height: 600px;
  background-color: #fdd5cf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.itemExport-2 img {
  width: 80%;
  position: absolute;
}
.itemExport-3 {
  width: 50%;
  height: 600px;
  background-color: #fdd5cf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.itemExport-4 {
  width: 50%;
  height: 600px;
  background-color: #f7faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.itemExport-4 p {
  width: 51%;
  font-family: Manrope;
  font-size: 20px;
  margin: 0;
}
.mobile {
  display: none;
}
@media (max-width: 768px) {
  .exportBlock {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-width: 1170px;
  }
  .itemExport-1 {
    width: 100%;
  }
  .mobile {
    width: 100%;
    height: 600px;
    background-color: #fdd5cf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mobile img {
    width: 50%;
  }
  .itemExport-2 {
    display: none;
  }
  .itemExport-3 {
    width: 100%;
  }
  .itemExport-4 {
    width: 100%;
  }
}
@media (max-width: 375px) {
  .itemExport-4 p {
    width: 90%;
    font-family: Manrope;
    margin: 0;
    font-size: 40px;
  }
  .itemExport-1 h1 {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 50px;
    line-height: 61px;
    margin: 0;
    width: 80%;
  }
  .itemExport-1 p {
    width: 80%;
    font-family: Manrope;
    font-size: 41px;
    margin: 0;
    padding-top: 24px;
  }
}
</style>
