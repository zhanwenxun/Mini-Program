// pages/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img1: {},
    img2: {},
    img3: {},
    img4: {},
    img5: {},
    img6: {},
    img7: {},
    img8: {},
    img9: {},
    img10: {},
    img11: {},
    img12: {}
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      img1: "http://news.tsinghua.edu.cn/publish/thunews/9659/20180403084902881753551/1522720524187.jpg",
      img2: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMaIR8oVQIibYpic1QCIpzEsh4iaahFdfbBX4IHtoAlgcGXbQAD34Jp3yDw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      img3: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOdL8v8hptSibL2xibTd1XN3yf9nAzjaISTeX7ibbT1Rpk3tU42iaRmLUna4ColQ5S9ibHicbDdmo49DSjkg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      img4: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMMS7LCyiaec0xTT44xjicFIQvac92tib1uFSGCmy0xwMGc8ec3ictlztSWA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      img5: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMsoibicwBweSV1UqGYrMVP9UBqkFa246UZuhjQ3NIibrwS6Q02Nqd0kib1Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      img6: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOdL8v8hptSibL2xibTd1XN3yfy6pugq76Yb82DRBt8T9CqpmmuZFAbyvrawxQsibQWWia0IIq6a0zGVVw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      img7: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMncszV6OOGs4vVdItfyNAIkEnj367icibDDNTz3rT0tZwR7bgbJzhCH7w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      img8: "https://graph.baidu.com/resource/106f50255c4ed455a91e201552484518.jpg",
      img9: "https://graph.baidu.com/resource/106a1403a23633b28dec001552484542.jpg",
      img10: "https://graph.baidu.com/resource/106e7b90fc51b67ecf3b701552484559.jpg",
      img11: "https://graph.baidu.com/resource/1062ae0054207d8cdfbd501552484382.jpg",
      img12: "https://graph.baidu.com/resource/106530fff531bff11a69201552484468.jpg"
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
  
  //跳转到主页页面
  ToIndex: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  }
})