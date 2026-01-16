import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationBarTitleText: '初始化项目',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
    backgroundColor: '@bgColor',
    backgroundTextStyle: '@bgTxtStyle',
    backgroundColorTop: '@bgColorTop',
    backgroundColorBottom: '@bgColorBottom',
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#3cc51f',
    borderStyle: 'black',
    backgroundColor: '@bgColor',
    list: [
      {
        pagePath: 'pages/index/Index',
        text: '首页',
        iconPath: './static/tabbar/home.png',
        selectedIconPath: './static/tabbar/homeHL.png'
      },
      {
        pagePath: 'pages/mine/Index',
        text: '我的',
        iconPath: './static/tabbar/personal.png',
        selectedIconPath: './static/tabbar/personalHL.png'
      }
    ]
  },
  easycom: {
    autoscan: true,
    custom: {
      '^hy-(.*)': 'hy-app/components/hy-$1/hy-$1.vue'
    }
  }
})
