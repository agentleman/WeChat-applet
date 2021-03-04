// components/main-navi/main-navi.wxml.js

let app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: 'aa'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    naviInfo: app.globalData.naviInfo
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
