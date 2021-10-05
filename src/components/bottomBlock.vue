<template>
  <div id="bottomBlock">
    <div class="bottomTop">
      <div class="leftBlock">
        <img src="../assets/imgBottom.png" alt="" />
      </div>
      <div class="rightBlock">
        <h1>{{ this.$store.getters.NAME.bottom[0] }}</h1>
        <img id="desktop" src="../assets/imgBottom2.png" alt="" />
        <img id="mobile" src="../assets/imgBottomMobile.png" alt="" />
      </div>
    </div>
    <div class="bottomBottom">
      <div class="menuBottom">
        <div class="logo">
          <img src="../assets/logoWhite.png" alt="" />
        </div>
        <div class="nav">
          <ul>
            <a href="#aboutBlock">{{ this.$store.getters.NAME.menu[0] }}</a>
            <a href="#missionBLock">{{ this.$store.getters.NAME.menu[1] }}</a>
            <a href="#exportBlock">Ooba Export</a>
            <a href="#logisticsBlock">{{ this.$store.getters.NAME.menu[2] }}</a>
          </ul>
          <div class="btn">
            <div class="circleIcon">
              <img src="../assets/iconInstaWhite.png" alt="" />
            </div>
            <div class="circleIcon">
              <img src="../assets/iconTwittWhite.png" alt="" />
            </div>
            <div class="circleIcon">
              <img src="../assets/iconYouWhite.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="madeBy">
        <p>Made by</p>
        <img src="../assets/logoInnovat.png" alt="" />
        <p>innovat</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bottomTop {
  display: flex;
  justify-content: space-between;
  min-width: 1170px;
}
h1 {
  width: 50%;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 32px;
  border-left: 3px solid;
  border-image: linear-gradient(
      180deg,
      #f29f05 0%,
      #f28705 31.25%,
      #f25c05 63.54%,
      #f20505 100%
    )
    1;
  padding-left: 20px;
  margin-bottom: 20%;
}
.rightBlock {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 462px;
  background-color: #f7faff;
  width: 100%;
}
.bottomBottom {
  height: 204px;
  margin-top: 150px;
  background-color: #14142a;
  min-width: 1170px;
}
.menuBottom {
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 2%;
}
.nav {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul {
  display: flex;
  color: white;
  width: 40%;
  justify-content: space-around;
  font-family: Manrope;
  list-style-type: none;
}
.btn {
  display: flex;
}
.circleIcon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #2b2b3f;
}
.madeBy {
  color: white;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5%;
}
#mobile {
  display: none;
}
a {
  color: white;
  text-decoration: none;
}
@media (max-width: 768px) {
  .bottomTop {
    display: flex;
    justify-content: space-between;
    min-width: 1170px;
    flex-direction: column;
  }
  .leftBlock img {
    width: 100%;
  }
  .rightBlock {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 462px;
  }
  #mobile {
    display: block;
  }
  #desktop {
    display: none;
  }
}
</style>
