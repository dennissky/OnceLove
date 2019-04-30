//index.js
//获取应用实例
const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;

Page({
    data: {
        userInfo: {},
      imgUrls: ["http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/once-love9.jpeg",
      "http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/once-love10.jpeg",
        "http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/once-love11.jpeg", "http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/once-love12.jpeg", "http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/once-love13.jpeg", "http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/once-love14.jpeg","http://jbrand-community-uat.obs.cn-north-1.myhuaweicloud.com:80/once-love15.jpeg"]
    },
    onLoad: function() {
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

        //         wx.hideLoading();
        //         that.setData({
        //             slideList: res.data.slideList
        //         });
        //     }
        // })
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },
    onShareAppMessage: function(res) {
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
	previewImage: function (e) {
		var imgsurl = []
		var imgObj = this.data.slideList
		for (var i = 0; i < imgObj.length; i++) {
			imgsurl[i] = imgObj[i]['image']
		}
		var current = e.target.dataset.src;
		wx.previewImage({
			current: current, // 当前显示图片的http链接  
			urls: imgsurl // 需要预览的图片http链接列表
		})
	},
})