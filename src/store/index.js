import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ru: {
      about: [
        "Реализуйте свою продукцию на рынке Китая онлайн!",
        "Мы предоставляем кыргызстанским предпринимателям возможность выхода на Китайский рынок!",
        "О вашем продукте узнают покупатели Китая и смогут его приобрести."
      ],
      expBlock: [
        'Это платформа, предназначенная для удобной онлайн-продажи товаров от кыргызстанских производителей иностранным покупателям. Интуитивно понятный интерфейс и удобные фильтры поиска сделают сайт максимально комфортным для пользователей.',
        'Сервис расширит границы рынка сбыта для местных предпринимателей. В Кыргызстане много достойных производителей, которым давно пора выйти на международный рынок! Пока основным рынком сбыта мы выбрали Китай, так как там отлично развита электронная коммерция.',
      ],
      maps: [
        'Нам есть чем гордиться.',
        'Ooba Export раскроет весь потенциал страны.',
      ],
      mission: [
        'В чем основная миссия этого сервиса?',
        'Электронная коммерция − это очень перспективная отрасль, оказывающая колоссальное влияние на мировую экономику. Поэтому, чтобы не отставать от успешных стран, где развит онлайн-шоппинг, и интегрироваться в систему международной электронной коммерции,мы создали платформу Ooba Export. Этот сервис станет мощным рычагом развития экономики Кыргызстана.',
        'Почему Ooba Export нужен стране?',
        'Сервис будет способствовать повышению экспорта продукции, производимой местными компаниями и индивидуальными предпринимателями',
        'Мы предоставляем платформу, где каждый желающий сможет онлайн реализовывать свой товар на китайском рынке!',
        'Экономика Кыргызстана начнет интенсивно развиваться',
        'Электронная коммерция в стране поднимется на совершенно новый уровень!',
      ],
      logistics: [
        'Логистика сервиса',
        'За транспортную логистику Ooba Export отвечает компания CAPS, располагающая почтовой лицензией.',
      ],
      bottom: [
        'Мы поможем вам покорить рынок Китая!'
      ],
      menu: ['О нас', 'Наша миссия', 'Логистика'],
    },
    ch: {
      about: [
        '在中国市场线上销售您的产品！',
        '我们为吉尔吉斯斯坦企业家提供了进入中国市场的机会！',
        '中国买家可以了解您的产品并进行购买。'
      ],
      expBlock: [
        '是一个平台，旨在将吉尔吉斯斯坦制造商的商品在线销售给外国买家。直观的界面和便捷的搜索过滤器让用户在使用上尽可能方便舒适',
        '该平台可扩大本地企业家的销售市场范围。吉尔吉斯斯坦本土优秀制造商应积极参与国际市场和国际竞争！到目前为止，我们已经选择将中国作为主要的销售市场，因为那里的电子商务发展良好',
      ],
      maps: [
        '我们有多种优势',
        'Ooba Export 平台市场潜力巨大。该项目正在与政府联合开发.'
      ],
      mission: [
        '该平台主要任务是什么？',
        '电子商务是一个非常有前景的行业，对全球经济产生巨大的影响。因此，为了跟上体系成熟的电子商务国家的发展步伐，融入国际电子商务系统，我们创建了Ooba Export平台。该平台将为吉尔吉斯斯坦经济的增长提供强大的助推力',
        '为什么该国需要 Ooba Export ?',
        '该服务将有助于增加当地公司和个人企业家生产的产品的出口。',
        '吉尔吉斯斯坦的经济将形成凝聚力',
        '我们提供了一个可以让任何人都可以把商品销售到中国市场的平台。',
        '该国的电子商务将进入到新的发展阶段。',
      ],
      logistics: [
        '服务物流',
        'Ooba Export的运输物流由具备邮政许可证的CAPS管理。',
      ],
      bottom: [
        '我们将帮助您远征中国市场！',
      ],
      menu: ['关于我们', '我们的任务', '物流'],
    },
    en: {
      about: [
        "Sell ​​your products online in the Chinese market!",
        "We provide Kyrgyz entrepreneurs with an opportunity to enter the Chinese market!",
        "Buyers in China will find out about your product and will be able to purchase it."
      ],
      expBlock: [
        'It is a platform designed for convenient online sale of goods from Kyrgyz manufacturers to foreign buyers. An intuitive interface and convenient search filters will make the site as comfortable as possible for users.',
        'This is a platform designed for convenient online sale of goods from Kyrgyz manufacturers to foreign buyers. An intuitive interface and convenient search filters will make the site as comfortable as possible for users. ',
      ],
      maps: [
        'We have a lot to be proud of.',
        'Ooba Export will unleash the full potential of the country.'
      ],
      mission: [
        'What is the main mission of this service?',
        'E-commerce is a very promising industry with a tremendous impact on the global economy. Therefore, in order to keep up with successful countries where online shopping is developed, and to integrate into the international e-commerce system, we created the Ooba Export platform. This service will become a powerful lever for the development of the Kyrgyz economy.',
        'Why does the country need Ooba Export? ',
        'The service will help increase the export of products manufactured by local companies and individual entrepreneurs', 'Мы предоставляем платформу, где каждый желающий сможет онлайн реализовывать свой товар на китайском рынке!',
        'The economy of Kyrgyzstan will begin to develop intensively',
        'E-commerce in the country will rise to a whole new level!',
      ],
      logistics: [
        'Service logistics',
        'Ooba Export is responsible for the transport logistics of CAPS, which has a postal license.',
      ],
      bottom: [
        'We will help you to conquer the market China!',
      ],
      menu: ['About Us', 'Our mission', 'Logistics'],

    },
    lang: 'RU',
  },
  mutations: {
    SET_NAME: (state, payload) => {
      state.lang = payload;
      state.exitMenu = payload;

    },
  },
  actions: {},
  modules: {},
  getters: {
    NAME: state => {
      if (state.lang == 'CH') {
        return state.ch;
      } else if (state.lang == 'RU') {
        return state.ru;
      }
      else if (state.lang == 'EN') {
        return state.en;
      }
    },
  }
})