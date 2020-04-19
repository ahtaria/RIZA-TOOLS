//获取应用实例
var app = getApp()
Page({
  data: {
    mark: 'اسواق السرحان',
    telno:'TEL: 22208789',
    infoMess:'',
    mtNumber:'',
    mtcode:'',
    rzNumber:'',
    rzcode:''
  },
  //用户名和密码输入框事件
  mtcodeInput:function(e){
    this.setData({
      mtNumber:e.detail.value
    })
  },
  rzcodeInput:function(e){
    this.setData({
      rzNumber:e.detail.value
    })
  },
  //登录按钮点击事件，调用参数要用：this.data.参数；
  //设置参数值，要使用this.setData({}）方法
  createBtnClick:function(){
    if(this.data.mtNumber.length == 0 || this.data.rzNumber.length == 0){
      this.setData({
        infoMess:'Note: MT or RZ cannot be empty!',
      })
    }else{
      this.setData({
        infoMess:'',
        mtcode:'MT'+this.data.mtNumber,
        rzcode:'RZ'+this.data.rzNumber
      })
      wx.navigateTo({
        url: 'mark?mt_code='+this.data.mtcode+'&rz_code='+this.data.rzcode
      })
    }
  },
  //重置按钮点击事件
  resetBtnClick:function(e){
    this.setData({
      infoMess: '',
      mtNumber: '',
      mtcode:'',
      rzNumber: '',
      rzcode:''
    })
  },
  onLoad: function () {
    console.log('mark_input onLoad')
  }
})