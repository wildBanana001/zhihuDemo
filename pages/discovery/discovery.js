// pages/discovery/discovery.js

var util = require('../../utils/util.js');

Page({
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: '0',
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length:0
  }, 
  onLoad() {
    this.refresh();
  },
  switchTab(e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.id
    })
  },
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
  //上拉刷新
  upper() {
    wx.showNavigationBarLoading();
    this.refresh();
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000)
  },
  //下拉加载
  lower(e) {
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideNavigationBarLoading();
      this.nextLoad();
    }, 1000)
  },
  //使用本地fake数据实现刷新
  refresh() {
    var feed = util.getDiscovery();
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length:feed_data.length
    })
  },
  //使用本地fake数据实现继续加载效果
  nextLoad() {
    var next = util.discoveryNext();
    var next_data = next.data;
    this.setData({
      feed:this.data.feed.concat(next_data),
      feed_length:this.data.feed_length + next_data.length
    })
  }
  
})