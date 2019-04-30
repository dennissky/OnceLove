// pages/bless/index.js

const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;
wx.cloud.init()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    actionSheetHidden: true,
    painting: {},
    shareImage: '',
    qrcode: ''

  },
  onTabItemTap(item) {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
    }
    var that = this
    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });

    wx.cloud.callFunction({
      name: 'blessList',
      success(res) {
        wx.hideLoading();
        console.log(res)
        that.setData({
          zanLog: res.result.zanLog.data,
          zanNum: res.result.zanNum.total
        })

      }
    })
    

  },
  openActionsheet: function() {
    var self = this;
    self.setData({
      actionSheetHidden: !self.data.actionSheetHidden
    });
  },
  listenerActionSheet: function() {
    var self = this;
    self.setData({
      actionSheetHidden: !self.data.actionSheetHidden
    })
  },
  createPoster: function() {

    wx.navigateTo({
      url: '/pages/poster/index',
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
    var that = this;
    // wx.request({
    //   url: server + '/bless',
    //     method: 'GET',
    //     data: {

    //     },
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //         console.log(res.data.zanLog)
    //         that.setData({
    //             zanLog: res.data.zanLog,
    //             zanNum: res.data.zanNum
    //         });
    //     }
    // })
    wx.cloud.callFunction({
      name: 'blessList',
      success(res) {
        wx.hideLoading();
        console.log(res)
        that.setData({
          zanLog: res.result.zanLog.data,
          zanNum: res.result.zanNum.total
        })

      }
    })
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
  bindgetuserinfo: function(e) {
    console.log(e.detail.userInfo)
    var that = this;
    if (e.detail.userInfo) {
      wx.setStorageSync('userInfo', e.detail.userInfo)
      that.setData({
        userInfo: e.detail.userInfo,
        authBtn: false
      })

      var userInfo = e.detail.userInfo;
      var name = userInfo.nickName;
      var face = userInfo.avatarUrl;
      // wx.request({
      //     url: server+'/bless',
      //     data: {
      //         'nickName': name,
      //         'avatar': face
      //     },
      //     header: {},
      //     method: "POST",
      //     dataType: "json",
      //     success: res => {
      //         // console.log(res.data);

      //             that.setData({
      //                 zanLog: res.data.zanLog,
      //                 zanNum: res.data.zanNum
      //             });
      //             wx.showModal({
      //                 title: '谢谢',
      //                 content: '感谢您的祝福',
      //                 showCancel: false
      //             })

      //     }
      // })
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '祝福中',
        icon: 'loading',
      });
      wx.cloud.callFunction({
        name: 'bless',
        data: {
          nickName: name,
          avatar: face
        },
        success(res) {
          wx.hideLoading();
          console.log(res)

          that.setData({
            zanLog: res.result.zanLog.data,
            zanNum: res.result.zanNum.total
          })
          wx.showModal({
            title: '谢谢',
            content: '感谢您的祝福',
            showCancel: false
          })

        }
      })

    } else {
      wx.showToast({
        title: "为了您更好的体验,请先同意授权",
        icon: 'none',
        duration: 2000
      });
    }
  },

  zan: function(event) {
    console.log(1, event)
    var that = this;

    var userInfo = that.data.userInfo;
    var name = userInfo.nickName;
    var face = userInfo.avatarUrl;
    // wx.request({
    //     url: server,
    //     data: {
    //         'nickName': name,
    //         'avatar': face
    //     },
    //     header: {},
    //     method: "POST",
    //     dataType: "json",
    //     success: res => {
    //         // console.log(res.data);
    //         if (res.data.success) {

    //             that.setData({
    //                 zanLog: res.data.zanLog,
    //                 zanNum: res.data.zanNum
    //             });
    //             wx.showModal({
    //                 title: '谢谢',
    //               content: "感谢您的祝福",
    //                 showCancel: false
    //             })
    //         } else {
    //             wx.showModal({
    //                 title: '谢谢',
    //                 content: res.data.msg,
    //                 showCancel: false
    //             })
    //         }
    //     }
    // })
    wx.cloud.callFunction({
      name: 'bless',
      data: {
        nickName: name,
        avatar: face
      },
      success(res) {
        wx.hideLoading();
        console.log(res)

        that.setData({
          zanLog: res.result.zanLog.data,
          zanNum: res.result.zanNum.total
        })
        wx.showModal({
          title: '谢谢',
          content: '感谢您的祝福',
          showCancel: false
        })

      }
    })
  },
})