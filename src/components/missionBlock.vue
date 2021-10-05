<template>
  <div id="missionBLock">
    <div class="topBlock">
      <div class="mobile"><img src="../assets/mission.png" alt="" /></div>
      <div class="missionAbout">
        <h1>{{ this.$store.getters.NAME.mission[0] }}</h1>
        <p>
          {{ this.$store.getters.NAME.mission[1] }}
        </p>
        <button>Узнать подробнее</button>
      </div>
      <div class="missionImg"><img src="../assets/mission.png" alt="" /></div>
    </div>
    <div class="bottomBlock">
      <h1>{{ this.$store.getters.NAME.mission[2] }}</h1>
      <div class="answers">
        <div class="item">
          <img src="..//assets/iconMission-1.png" alt="" />
          <p>
            {{ this.$store.getters.NAME.mission[3] }}
          </p>
        </div>
        <div class="item">
          <img src="..//assets/iconMission-2.png" alt="" />
          <p>
            {{ this.$store.getters.NAME.mission[4] }}
          </p>
        </div>
        <div class="item">
          <img src="..//assets/iconMission-3.png" alt="" />
          <p>{{ this.$store.getters.NAME.mission[5] }}</p>
        </div>
        <div class="item">
          <img src="..//assets/iconMission-4.png" alt="" />
          <p>
            {{ this.$store.getters.NAME.mission[6] }}
          </p>
        </div>
        <img
          style="position: relative; top: 200px"
          src="../assets/Ellipse-1.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#missionBLock {
  width: 100%;
  height: auto;
  background: #f7faff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 1170px;
}
#missionBLock h1 {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
}
.missionAbout {
  width: 36%;
}
.missionAbout h1 {
  margin: 0;
}
.missionAbout p {
  font-family: Manrope;
  width: 94%;
  font-size: 20px;
}
.topBlock {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
button {
  color: #f20505;
  height: 45px;
  width: 35%;
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid #f20505;
  margin-top: 20%;
}
.bottomBlock {
  margin-top: 166px;
}
.answers {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 150px;
  justify-content: center;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 80px;
}
.item p {
  width: 50%;
  font-family: Manrope;
  font-size: 20px;
  text-align: center;
}
.mobile {
  display: none;
}
@media (max-width: 768px) {
  .item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 80px;
  }
  .item p {
    text-align: start;
    margin-left: 20px;
    width: 50%;
  }
  .missionAbout {
    text-align: center;
  }
  .missionImg {
    display: none;
  }
  .mobile {
    display: flex;
  }
  .topBlock {
    margin-top: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
@media (max-width: 375px) {
  #missionBLock h1 {
    font-size: 65px;
  }
  .missionAbout p {
    font-size: 40px;
  }
  .answers {
    display: flex;
    margin-bottom: 150px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 80px;
    width: 90%;
  }
  .item p {
    text-align: start;
    margin-left: 20px;
    width: 75%;
    font-size: 40px;
  }
  .missionAbout[data-v-658aa1f1] {
    text-align: center;
    width: 90%;
  }
}
</style>
