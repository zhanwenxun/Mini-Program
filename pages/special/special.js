// pages/special/special.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url1: {},
    listData: [{}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    this.setData({
      url1: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTM6O9hfQ6APxkZz4JaOwRVwKmmXganASTNRqW8iarj2VYZlmmJLibyuFMQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      listData: [
        { "name": "参观清华", "school": "清华大学", "band": "yars团队", "member": "陈高勋、宫大汉、李肇阳", "introduce": "清华大学校园参观预约的小程序，提供预约参观、参观导览和智能问答等服务。"}]
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

  //跳转到作品主页面
  ToWork: function () {
    wx.redirectTo({
      url: '../work/work',
    })
  },

  //长按识别二维码或小程序码
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: 'current',
      urls: [current]
    })
  }
})