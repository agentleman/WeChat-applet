// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    name: "",
    title: "QQ音乐",
    array: [{
      url: '../../images/home/1.png',
    }, {
      url: '../../images/home/2.png',
    }, {
      url: '../../images/home/3.png',
    }, {
      url: '../../images/home/1.png',
    }, {
      url: '../../images/home/2.png',
    }, {
      url: '../../images/home/3.png',
    }],
    arrayXCX: [
      {
        url: '../../images/home/11.png',
      }, {
        url: '../../images/home/12.png',
      }, {
        url: '../../images/home/13.png',
      }
    ],
    arrayGD: [{
      url: '../../images/home/01.png',
    }, {
      url: '../../images/home/02.png',
    }, {
      url: '../../images/home/03.png',
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
})