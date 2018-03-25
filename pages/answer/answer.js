// pages/answer/answer.js
var app = getApp();
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindQueTap() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  onLoad() {
    //调用应用实例的方法获取全局数据 更新数据
    app.getUserInfo(userInfo => this.setData({userInfo}))
  }
})