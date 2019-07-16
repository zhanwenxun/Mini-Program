// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: "",
    url1: {},
    url2: {},
    url3: {},
    listData: [{}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var n = wx.getStorageSync('num');
    console.log(n)
    this.setData({
      num: n,
      url1: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTM3KyTfgAxLG9m3y9icRmefIibGTYuaecReALobnxAdsBicev0RbnINSHMw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url2: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMliaGEtqqge9CEyq3EQQ4bjaHUHanrdQibtt1PSOalDjO2SmUq5jNLEog/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url3: "https://mmbiz.qpic.cn/mmbiz_png/uZLmr9QcyOcHIasfPVnexpfLTRO05sTM8ibicQjXyAJd0FcY15cnUcgsOq4PEueChnCPWW2ibZ6gVaBmBDOzoAiaaA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      listData: [
        { "index": "1", "name": "双生小日记", "band": "中美联合队团队", "school": "中山大学", "member": "邓国雄、王善文", "introduce": "通过共享日记和NLP情感分析结合心理学测量，让用户通过写日记来抒发自己的心情、管理情绪周期"},
        { "index": "2", "name": "校园二手物品交易信息", "band": "旺财是最萌的猫团队", "school": "西安交通大学", "member": "周结、是文博", "introduce": "校园内的二手交易平台，解决二手信息不对称的问题，与学校实名认证接口对接，信息来源可靠。"},
        { "index": "3", "name": "小世界步数旅行", "band": "拿奖就去吃冰淇淋团队", "school": "北京大学", "member": "夏丹伟、孔令凯、张静", "introduce": "解决步数排行榜功能单调的问题，增强运动步数的互动性，间接促进人们运动以及步行。"}
      ]
    }),
    wx.pageScrollTo({
      scrollTop: (n-1)*620
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
  previewImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage ({
      current: current,
      urls: [current]
    })
  }
})