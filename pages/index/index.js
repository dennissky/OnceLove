// pages/invitation/index.js
const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;
var touchDot = 0; //触摸时的原点  
var time = 0; // 时间记录，用于滑动时且时间小于1s则执行左右滑动 
var interval = ""; // 记录/清理时间记录 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: "",
    userInfo: {},
    mainInfo: {
      "cover": "http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/once-love8.jpeg",
      "he": "张天",
      "she": "陈美同",
      "date": "2019年5月18日",
      "lunar": "四月十四",
      "hotel": "棠悦礼宴酒店三号厅",
      "address": "长春市 经济技术开发区 卫星路1777号"
    },
    music_url: 'http://music.163.com/song/media/outer/url?id=521417778.mp3',
    isPlayingMusic: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //创建动画
    var animation = wx.createAnimation({

      duration: 3600,
      timingFunction: "ease",
      delay: 600,
      transformOrigin: "50% 50%",

    })


    animation.scale(0.9).translate(10, 10).step(); //边旋转边放大


    //导出动画数据传递给组件的animation属性。
    this.setData({
      animationData: animation.export(),
    })

    var that = this
    // wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
    //     title: '加载中',
    //     icon: 'loading',
    // });
    // wx.request({
    //     url: server,
    //     method: 'GET',
    //     data: {
    //         'c': 'info',
    //         'appid': appid
    //     },
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //         //console.log(res.data)
    //         wx.hideLoading();
    //         wx.playBackgroundAudio({
    //             dataUrl: res.data.music_url,
    //             title: '',
    //             coverImgUrl: ''
    //         })


    //         that.setData({
    //             mainInfo: res.data.mainInfo,
    //             music_url: res.data.music_url
    //         });
    //     }
    // });
    wx.playBackgroundAudio({
      dataUrl: that.data.music_url,
      title: '',
      coverImgUrl: ''
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var that = this;
    //console.log(that.data);
    return {
      title: '张天&陈美同的婚礼邀请',
      imageUrl: 'http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/oncelove21.jpeg',
      path: 'pages/index/index',
      success: function(res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
  callhe: function(event) {
    wx.makePhoneCall({
      // phoneNumber: this.data.mainInfo.he_tel
      phoneNumber: '18646292159'
    })
  },
  callshe: function(event) {
    wx.makePhoneCall({
      // phoneNumber: this.data.mainInfo.she_tel
      phoneNumber: '15844012225'
    })
  },
  play: function(event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: 'http://music.163.com/song/media/outer/url?id=521417778.mp3',
        title: '',
        coverImgUrl: 'http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/1.jpeg'
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
})