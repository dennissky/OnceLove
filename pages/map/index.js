// pages/map/index.js

const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
    },
    markertap(e) {
        // console.log(e)
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
        //         var lng = res.data.mainInfo.lng
        //         var lat = res.data.mainInfo.lat
        //         console.log(lat)
        //         wx.openLocation({
        //             latitude: parseFloat(lat),
        //             longitude: parseFloat(lng),
        //             scale: 18,
        //             name: res.data.mainInfo.hotel,
        //             address: res.data.mainInfo.address
        //         })
        //     }
        // })
      wx.openLocation({
        latitude: parseFloat('43.836263'),
        longitude: parseFloat('125.385807'),
                    scale: 18,
                    name: '棠悦礼宴酒店',
                    address: '长春市经济技术开发区 卫星路1777号'
                })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
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
        //         // console.log(res.data)
        //         wx.hideLoading();
        //         var lng = res.data.mainInfo.lng
        //         var lat = res.data.mainInfo.lat
        //         that.setData({
        //             mainInfo: res.data.mainInfo,
        //             lng: lng, // 全局属性，用来取定位坐标
        //             lat: lat,
        //             markers: [{
        //                 iconPath: "/images/nav.png",
        //                 id: 0,
        //                 latitude: lat, // 页面初始化 options为页面跳转所带来的参数 
        //                 longitude: lng,
        //                 width: 50,
        //                 height: 50
        //             }],
        //         });
        //     }
        // })
                 that.setData({
                    mainInfo: {"he_tel":"18646292159","she_tel":"15844012225"},
                   lng: "125.385807", // 全局属性，用来取定位坐标
                   lat: "43.836263",
                    markers: [{
                        iconPath: "/images/nav.png",
                        id: 0,
                      latitude: "43.836263", // 页面初始化 options为页面跳转所带来的参数 
                      longitude: "125.385807",
                        width: 50,
                        height: 50
                    }],
                });
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
            phoneNumber:"18646292159"
        })
    },
    callshe: function(event) {
        wx.makePhoneCall({
            phoneNumber: "15844012225"
        })
    }
})