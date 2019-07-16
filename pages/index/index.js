//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hidden: true,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    loadProgress:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  }, 
  isLoading(e) {
    this.setData({
      isLoad: e.detail.value
    })
  },
  loadModal() {
    this.setData({
      loadModal: true
    })
    setTimeout(() => {
      this.setData({
        loadModal: false
      })
    }, 2000)
  },
  loadProgress() {
    this.setData({
      loadProgress: this.data.loadProgress + 3
    })
    if (this.data.loadProgress < 100) {
      setTimeout(() => {
        this.loadProgress();
      }, 100)
    } else {
      this.setData({
        loadProgress: 0
      })
    }
  },

  download: function() {
    this.setData({
      hidden: !this.data.hidden
    });
    wx.downloadFile({
      url: "https://6c61-lab8exam01-173c8c-1258470058.tcb.qcloud.la/information.pdf?sign=5f35d63ecd60082321069bfedb26530c&t=1552829646",
      success: function (res) {
        console.log(res)
        var Path = res.tempFilePath              //返回的文件临时地址，用于后面打开本地预览所用
        wx.openDocument({
          filePath: Path,
          success: function (res) {
            console.log('打开成功');
          }
        })
      },
      fail: function (res) {
        console.log('打开失败');
      }
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //跳转到前言页面
  ToPreview:function(){
    wx.redirectTo({
      url: '../preview/preview',
    })
  },

  //跳转到精彩瞬间页面
  ToPicture: function () {
    wx.redirectTo({
      url: '../picture/picture',
    })
  },

  //跳转到获奖作品页面
  ToWork: function () {
    wx.redirectTo({
      url: '../work/work',
    })
  },

  //跳转到教育影响页面
  ToEffect: function () {
    wx.redirectTo({
      url: '../effect/effect',
    })
  },

  //跳转到比赛详情页面
  ToMoreInfo: function () {
    wx.redirectTo({
      url: '../moreInfo/moreInfo',
    })
  },

  //request到开发者网页
  MakeRequest: function() {
    wx.request ({
      url: "https://developers.weixin.qq.com",
      data: {
        noncestr: Date.now()
      },
      success: function(result) {
        console.log('进入页面成功', result)
      }
    })
  }
})
