//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listData:[
      {"text":"WHSE NO:","type":""},
      {"text":"INV NO:","type":""},
      {"text":"ITEM NO:","type":""},
      {"text":"QTY/CTN:","type":""},
      {"text":"TTL CTN:","type":""}
    ],
    mark: 'اسواق السرحان',
    telno:'TEL: 22208789',
    
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
