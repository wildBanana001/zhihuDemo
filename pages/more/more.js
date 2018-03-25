// pages/more/more.js
var app = getApp()
Page({
  data:{
    userInfo: {}
  },
  onLoad() {
    //调用应用实例的方法获取全局数据 更新数据
    app.getUserInfo(userInfo => this.setData({userInfo}))
  }
})