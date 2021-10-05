<template>
  <div id="topBlock">
    <div @click="menu" class="btnMobileMenu">
      <span class="own hamburger span-col-9">
        <hr class="line1 mgn" :class="menuEnable ? 'mgn' : 'mgn-0'" />
        <hr class="line2 mgn" :style="menuEnable ? '' : 'background: white'" />
        <hr class="line3 mgn" :class="menuEnable ? 'mgn' : 'mgn-0'" />
      </span>
    </div>
    <div href="#" class="logoBlock">
      <img
        :src="
          menuEnable
            ? require('../assets/logo.png')
            : require('../assets/logoWhite.png')
        "
        alt=""
      />
    </div>
    <div class="menu">
      <ul class="leftNav">
        <a href="#aboutBlock">{{ this.$store.getters.NAME.menu[0] }}</a>
        <a href="#missionBLock">{{ this.$store.getters.NAME.menu[1] }}</a>
        <a href="#exportBlock">Ooba Export</a>
        <a href="#logisticsBlock">{{ this.$store.getters.NAME.menu[2] }}</a>
      </ul>
      <div class="rightNav">
        <div class="languageMenu" style="position: relative">
          <div
            :class="{ selectMobile: !menuEnable }"
            @click="langMenu"
            class="language"
          >
            <div class="langBlock">
              <img
                :src="require(`../assets/flag${this.$store.state.lang}.png`)"
                style="border-radius: 100%"
                alt=""
                srcset=""
              />
              <div class="ru">{{ this.$store.state.lang }}</div>
            </div>
          </div>

          <div :class="{ displayNone: langEnable, langMenu: !langEnable }">
            <div
              @click="langSite('CH')"
              :class="this.$store.state.lang == 'CH' ? 'displayNone' : 'china'"
            >
              <img
                :src="require('../assets/flagCH.png')"
                style="border-radius: 100%; margin: 0px 12px"
                alt=""
                srcset=""
              />
              <div class="ch">CH</div>
            </div>
            <div
              @click="langSite('EN')"
              :class="
                this.$store.state.lang == 'EN' ? 'displayNone' : 'english'
              "
            >
              <img
                :src="require('../assets/flagEN.png')"
                style="border-radius: 100%; margin: 0px 12px"
                alt=""
                srcset=""
              />
              <div class="en">EN</div>
            </div>
            <div
              @click="langSite('RU')"
              :class="
                this.$store.state.lang == 'RU' ? 'displayNone' : 'russion'
              "
            >
              <img
                :src="require('../assets/flagRU.png')"
                style="border-radius: 100%; margin: 0px 12px"
                alt=""
                srcset=""
              />
              <div>RU</div>
            </div>
          </div>
        </div>
        <div class="socialContact">
          <img src="../assets/iconInsta.png" alt="" /><img
            src="../assets/iconTwitt.png"
            alt=""
          /><img src="../assets/iconYou.png" alt="" />
        </div>
        <button class="goOver">Перейти на сайт</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menuClick"],
  data() {
    return {
      menuEnable: true,
      langEnable: true,
    };
  },
  methods: {
    menu() {
      this.menuEnable = !this.menuEnable;
      this.$emit("menuStatusTop", this.menuEnable);
    },
    langMenu() {
      this.langEnable = !this.langEnable;
    },
    langSite(lang) {
      this.langEnable = !this.langEnable;
      this.$store.commit("SET_NAME", lang);
      console.log(this.$store.state.lang);
    },
  },
};
</script>

<style scoped>
#topBlock {
  height: 70px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  min-width: 1170px;
}
.logoBlock {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right: 1px solid #f2f2f2;
}
.menu {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.leftNav {
  display: flex;
  list-style-type: none;
  width: 30%;
  justify-content: space-between;
  font-family: Manrope;
  font-weight: 500;
  min-width: 416px;
}
.rightNav {
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
  font-family: Manrope;
  font-weight: 600;
}
.language {
  width: 100%;
  height: 32px;
  background-color: rgba(242, 5, 5, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.language:after {
  content: "▼";
  margin-right: 10px;
}
select {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: rgba(242, 5, 5, 0.1);
  border: 0px;
}
select::before {
  content: "asdas";
}
.selectMobile {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}
.socialContact {
  width: 18%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.goOver {
  width: 229px;
  height: 70px;
  background-color: #f20505;
  color: white;
  border: 0px;
  font-family: Manrope;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
}
.btnMobileMenu {
  display: none;
}
.displayNone {
  display: none;
}
.hamburger {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 50px;
  height: fit-content;
  margin: 20px auto;
}
.hamburger hr {
  width: 50%;
  height: 5px;
  border: none;
}
.hamburger hr.line2 {
  width: 90%;
}
.hamburger hr.line3 {
  width: 50%;
}
.mgn {
  margin: 0px 25px 0px auto;
  background-color: #14142a;
  transition: all 0.3s;
}
.mgn-0 {
  margin: 0px 5px 0 auto;
  background: white;
  transition: all 0.3s;
}
option:before {
  content: "asd";
}
.ru {
  margin: 0px 15px;
}
.russion {
  display: flex;
  align-items: center;
  height: 50%;
  border-bottom: 1px solid #eeeeee;
}
.russion:hover {
  background-color: #14142a;
  color: white;
  cursor: pointer;
}
.english {
  display: flex;
  align-items: center;
  height: 50%;
  border-bottom: 1px solid #eeeeee;
}
.english:hover {
  background-color: #14142a;
  color: white;
  cursor: pointer;
}

.china {
  display: flex;
  align-items: center;
  height: 50%;
  border-bottom: 1px solid #eeeeee;
}
.china:hover {
  background-color: #14142a;
  color: white;
  cursor: pointer;
}
.langBlock {
  display: flex;
  align-items: center;
}
.langMenu {
  position: absolute;
  width: 139px;
  height: 113px;
  background-color: white;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  left: -11px;
  border-top: 20px solid transparent;
}
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
@media (max-width: 1440px) {
  .languageMenu {
    display: none;
  }
  .socialContact {
    width: 25%;
  }
  .leftNav {
    width: 45%;
  }
}
@media (max-width: 768px) {
  .languageMenu {
    display: block;
    width: 107px;
    margin-right: 10%;
  }
  .logoBlock {
    border-left: 1px solid #f2f2f2;
    border-right: none;

    margin-left: 10px;
  }
  .btnMobileMenu {
    display: flex;
    justify-content: center;
    width: 5%;
    margin-left: 10px;
  }
  .menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .leftNav {
    display: none;
  }
  .socialContact {
    display: none;
  }
  .rightNav {
    display: flex;
    width: 500px;
    justify-content: flex-end;
    align-items: center;
    font-family: Manrope;
    font-weight: 600;
  }
  .language {
    margin-right: 50px;
  }
}
@media (max-width: 375px) {
  .languageMenu {
    display: none;
  }
}
</style>
