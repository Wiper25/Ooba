<template>
  <div id="maps">
    <div class="title">
      <h1>{{ this.$store.getters.NAME.maps[0] }}</h1>
      <p>{{ this.$store.getters.NAME.maps[1] }}</p>
    </div>
    <div class="map"><img src="../assets/maps.png" alt="" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#maps {
  width: 100%;
  height: 449px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 1170px;
}
.title h1 {
  font-family: Montserrat;
  font-weight: 800;
  font-size: 50px;
}
.title p {
  font-family: Manrope;
  font-size: 20px;
}
.map img {
  width: 100%;
}
@media (max-width: 768px) {
  #maps {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 1170px;
    flex-direction: column;
  }
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
