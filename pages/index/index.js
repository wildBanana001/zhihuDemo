// pages/index/index.js

var util = require('../../utils/util.js');
var app = getApp();

Page({

   /**
   * 页面的初始数据
   */
  data: {
    feed: [],
    feed_length: 0
  },
  //事件处理函数
  bindItemTap() {
    wx.navigateTo({
      url: '../answer/answer',
    })
  },
  bindQueTap() {
    wx.navigateTo({
      url: '../question/question',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //调用应用实例的方法获取全局数据
    this.getData();
  },
  //上拉刷新
  upper() {
    wx.showNavigationBarLoading();
    this.refresh();
    setTimeout(function() {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },2000)
  },
  //下拉加载
  lower(e) {
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideNavigationBarLoading();
      this.nextLoad();
    },1000)
  },
  //使用本地fake数据实现刷新
  getData() {
    var feed = util.getData2();
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    })
  },
  refresh() {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 2000
    });
    var feed = util.getData2();
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    })
    setTimeout(function(){
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 2000)
  },
  //使用本地fake数据实现继续加载效果
  nextLoad() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
    var next = util.getNext();
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    })
    setTimeout(function() {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    },2000)
  }

})