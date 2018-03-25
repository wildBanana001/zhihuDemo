// pages/notify/notify.js
Page({
  data: {
    navTab: ["通知","赞与感谢", "关注"],
    currentNavtab: '0'
  },
  switch(e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    })
  }
})