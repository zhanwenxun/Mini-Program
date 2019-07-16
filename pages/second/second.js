// pages/second/second.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: "",
    url1: {},
    url2: {},
    url3: {},
    url4: {},
    url5: {},
    url6: {},
    url7: {},
    url8: {},
    url9: {},
    url10: {},
    listData: [{}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var n = wx.getStorageSync('num');
    console.log(n)
    this.setData({
      url1: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMURHm7o4iaENuhppJHJEb2JEXDaQFUwWCCD8m8z5Am0o3zCXX0cZrpOg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url2: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMictkrxfj9vy7VQAwaaCzxbGdFPhhOl5wibuM2ONeb3nELPUpeywWd6rA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url3: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMibF4Us1hkKS3wxegKrXiakIeknQRpOem3dgFxxASSBSIHa7qRNQSKKCQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url4: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMCAE6vuLgW6RL1OoZrXlVS3JQ58mpVicZtK5N7L5ZR2ZWg6Ynk4q0pWg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url5: "https://mmbiz.qpic.cn/mmbiz_png/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMFcEwQURn0wFliameWCuDlEPSTYELYrgEg1VsZP2CXIiaBeL8Xl2XWdlQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url6: "https://mmbiz.qpic.cn/mmbiz_png/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMdf2RkkWr4clLdYK8zMkhO7JXH1HmBm55JI0lW3HjdM2JEDqEzFzrMw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url7: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMvRHg8fmTb8JLGuNiaJGAKcDZPPCox4ibiaGaLbEIlqNGNXRZM4FqrVcLA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url8: "https://mmbiz.qpic.cn/mmbiz_png/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMEyWLGickrbKib6jHZxTQzDicJSMkicISrd3RWOqTrDh66J7goDQv8aQgsA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url9: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMicibibQsmgetS6CpxrMj0OsMhgC7OWGnlyxlkbuiblS3YNw10RkdBYn5Lg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      url10: "https://mmbiz.qpic.cn/mmbiz_jpg/uZLmr9QcyOcHIasfPVnexpfLTRO05sTMnrdx2pnmzUOadCWSsGxUc7u8IicL24o2wSBOVlzJYOHfibTVrXQ6dSXA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
      listData: [
        {
          "index": "1", "name": "听说无忧", "school": "北京大学", "band": "听说团队", "member": "姬学清、陈尚敏", "introduce": "听说无忧，一款正向激励，互动交流，英语听说练习小程序。腾讯“同声传译”插件提供部分技术支持。"
        },
        { "index": "2", "name": "数独大乱斗", "school": "东北大学", "band": "用水减肥团队", "member": "李天志、李书缘、郭雨桐", "introduce": "益智计算类小程序。单人练习、多人对战一键体验，锻炼大脑，提升智商！"},
        { "index": "3", "name": "护助汇评估", "school": "合肥工业大学", "band": "护助汇团队", "member": "金柳颀、邹安宁、杜佳敏", "introduce": "智能咯爱人照护评估小程序，利用知识图谱技术自动生成照护方案，解决老人照护不周的问题。"},
        { "index": "4", "name": "同游账本", "school": "华中科技大学", "band": "一颗苹果队团队", "member": "胡兴球、吴文祺、曾巧玲", "introduce": "适用于旅游场景的记账小程序，采用公私分账的形式，支持多人协作记账。"},
        { "index": "5", "name": "连音符", "school": "四川大学", "band": "EWA团队", "member": "屈志豪、杨鹏宇、曹雨", "introduce": "轻量音乐互动小程序，用户之间可以邀请进行合唱，抓住每一个感动的瞬间。"},
        { "index": "6", "name": "网红打卡地", "school": "香港中文大学", "band": "Wintel团队", "member": "罗华、王一帆、谭谦逊", "introduce": "以年轻人的打卡文化为切入点，实现电子留言墙的功能，为用户旅游带来和更多便利及乐趣。"},
        { "index": "7", "name": "84号邮局", "school": "上海海事大学", "band": "有点儿小用团队", "member": "王轩、费浩林、季节", "introduce": "微信好友之间模拟收发信件的小程序，在快时代给大家提供一个更有分量的情感抒发方式。"},
        { "index": "8", "name": "家长群管家", "school": "电子科技大学", "band": "可以看我不能砍需求队团队", "member": "许明可、李昶、冯毅", "introduce": "学生家长管理和沟通的工具类小程序，为家长提供消息发布，记录，管理等功能。"},
        { "index": "9", "name": "答题星", "school": "青岛大学", "band": "0 errors团队", "member": "陈剑、王明晓、孙建怡", "introduce": "由用户创建试卷并给他人作答的工具类小程序，可应用于企业、政府等进行轻量级考核与测评。"},
        { "index": "10", "name": "GS比赛计分", "school": "大连东软信息学院", "band": "Gsence团队", "member": "赵汝阳、李冠宇、卢治锦", "introduce": "集评分功能、管理功能，比赛成绩实时查询于一身的，针对评委打分比赛评分小程序。"}
      ]
    }),
      wx.pageScrollTo({
        scrollTop: (n - 1) * 617
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