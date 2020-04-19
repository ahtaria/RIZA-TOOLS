//mark.js
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
    whseNo:'MT000'
  },
  onLoad:function (options) {
    var whseNo = options.mt_code;
    this.setData({
      'listData[0].type':options.mt_code,
      'listData[1].type':options.rz_code
    }),
    console.log(this.data.whseNo),
    console.log(this.data.listData[0].type)
  },
})