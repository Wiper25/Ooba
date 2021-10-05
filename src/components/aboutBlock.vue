<template>
  <div id="aboutBlock">
    <h1>{{ this.$store.getters.NAME.about[0] }}</h1>

    <p>
      {{ this.$store.getters.NAME.about[1] }}
    </p>
    <div class="imgProduct">
      <img src="../assets/img_about-1.png" alt="" />
      <img style="margin: 0px 50px" src="../assets/img_about-2.png" alt="" />
      <img src="../assets/img_about-3.png" alt="" />
    </div>
    <h2>{{ this.$store.getters.NAME.about[2] }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#aboutBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1170px;
}
h1 {
  width: 38%;
  text-align: center;
  margin-top: 82px;
  margin-bottom: 24px;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  color: #f20505;
}
p {
  width: 43%;
  text-align: center;
  font-size: 20px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  color: #14142a;
}
.imgProduct {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 90%;
}
h2 {
  width: 50%;
  text-align: center;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: 32px;
  margin-top: 40px;
  margin-bottom: 151px;
  color: #14142a;
}
@media (max-width: 375px) {
  h1 {
    width: 75%;
    text-align: center;
    margin-top: 82px;
    margin-bottom: 24px;
    font-family: "Manrope", sans-serif;
    font-weight: 800;
    color: #f20505;
    font-size: 59px;
  }
  h2 {
    width: 80%;
    text-align: center;
    font-family: "Manrope", sans-serif;
    font-weight: 800;
    font-size: 45px;
    margin-top: 40px;
    margin-bottom: 151px;
    color: #14142a;
  }
  p {
    width: 70%;
    text-align: center;
    font-size: 45px;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    color: #14142a;
  }
}
</style>