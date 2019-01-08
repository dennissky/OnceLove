// pages/bless/index.js

const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;
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



        wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
            title: '加载中',
            icon: 'loading',
        });
        wx.request({
            url: server,
            method: 'GET',
            data: {
                'c': 'info',
                'appid': appid
            },
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                wx.hideLoading();
                // console.log(res.data)
                that.setData({
                    mainInfo: res.data.mainInfo,
                    zanLog: res.data.zanLog,
                    zanNum: res.data.zanNum,
                    slideList: res.data.slideList
                });
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
        wx.request({
            url: server,
            method: 'GET',
            data: {
                'c': 'info',
                'appid': appid
            },
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                // console.log(res.data)
                that.setData({
                    zanLog: res.data.zanLog,
                    zanNum: res.data.zanNum
                });
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
            title: that.data.mainInfo.share,
            imageUrl: that.data.mainInfo.thumb,
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
            wx.request({
                url: server,
                data: {
                    'c': 'zan',
                    'appid': appid,
                    'nickname': name,
                    'face': face
                },
                header: {},
                method: "GET",
                dataType: "json",
                success: res => {
                    // console.log(res.data);
                    if (res.data.success) {

                        that.setData({
                            zanLog: res.data.zanLog,
                            zanNum: res.data.zanNum
                        });
                        wx.showModal({
                            title: '提示',
                            content: res.data.msg,
                            showCancel: false
                        })
                    } else {
                        wx.showModal({
                            title: '提示',
                            content: res.data.msg,
                            showCancel: false
                        })
                    }
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
        wx.request({
            url: server,
            data: {
                'c': 'zan',
                'appid': appid,
                'nickname': name,
                'face': face
            },
            header: {},
            method: "GET",
            dataType: "json",
            success: res => {
                // console.log(res.data);
                if (res.data.success) {

                    that.setData({
                        zanLog: res.data.zanLog,
                        zanNum: res.data.zanNum
                    });
                    wx.showModal({
                        title: '提示',
                        content: res.data.msg,
                        showCancel: false
                    })
                } else {
                    wx.showModal({
                        title: '提示',
                        content: res.data.msg,
                        showCancel: false
                    })
                }
            }
        })
    },
})