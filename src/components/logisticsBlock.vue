<template>
  <div id="logisticsBlock">
    <div class="text">
      <h1>{{ this.$store.getters.NAME.logistics[0] }}</h1>
      <p>
        {{ this.$store.getters.NAME.logistics[1] }}
      </p>
      <div class="circle">
        <img
          style="margin-top: 20px; margin-right: 65px"
          src="../assets/Ellipse-2.png"
          alt=""
        />
        <img
          style="margin-right: 236px; width: 96px"
          src="../assets/Ellipse-1.png"
          alt=""
        />
      </div>
    </div>
    <div class="img"><img src="../assets/logisticsImg.png" alt="" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#logisticsBlock {
  width: 100%;
  height: 541px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.circle {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  position: relative;
}
h1 {
  font-family: Montserrat;
  font-weight: bold;
  text-align: center;
}
p {
  font-family: Manrope;
  font-size: 20px;
  width: 75%;
  margin: 0px 0px 0px 17%;
}
.img img {
  width: 100%;
}
@media (max-width: 768px) {
  #logisticsBlock {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 1170px;
    margin-top: 10%;
  }
}
@media (max-width: 375px) {
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    position: relative;
    align-items: center;
  }
  p {
    font-size: 51px;
    width: 90%;
    text-align: center;
    margin: 0px 0px 0px 0px;
  }
  h1 {
    width: 50%;
    font-size: 50px;
    margin-bottom: 10%;
  }
}
</style>
