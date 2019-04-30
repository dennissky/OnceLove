// app.js
App({
    onLaunch: function () {
        //var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            // wx.login({
            //     success: function () {
            //         wx.getUserInfo({
            //             success: function (res) {
            //                 //console.info(res);
            //                 that.globalData.userInfo = res.userInfo;
            //                 typeof cb == "function" && cb(that.globalData.userInfo)
            //             }
            //         })
            //     }
            // });
        }

    },
    onHide: function () {
        wx.pauseBackgroundAudio();
    },
    onShow: function () {
        wx.playBackgroundAudio()
    },
    globalData: {
        userInfo: null,
      appid: 'wx8945be40df0f4e88',//此处改成您自己的小程序appid
      server: 'https://serviceuat.jconnect.faw-vw.com/oncelove',
        music_url: ''
    }
});

