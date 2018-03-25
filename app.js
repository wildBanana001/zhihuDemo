//app.js
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  //获取用户信息
  getUserInfo(cb) {
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //登陆
      wx.login({
        success:()=> {
          //获取用户信息
          wx.getUserInfo({
            success:res=> {
              //可以将res发送给后台
              this.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(this.globalData.userInfo)
              }
          })
        }
      })  
    } 
  },
  globalData:{
    userInfo:null
  }
})
