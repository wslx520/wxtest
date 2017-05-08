//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    picsList: [
      {
        title: '一个标题',
        date: '2017-1-1',
        views: 33,
        total: 44,
        list: [
          'https://pic.36krcnd.com/avatar/201705/04022941/ny1m93pj1sg87n6i.jpg!feature',
          'http://www-31.ibm.com/ibm/cn/cognitive/outthink/images/bg_section_04_v2.jpeg',
          'https://pic.36krcnd.com/avatar/201705/04054728/yehcucg3aqmqpi8a.jpeg!feature'
        ]
      },
      {
        title: '2一个标题',
        date: '2017-1-11',
        views: 323,
        total: 2,
        list: [
          'http://www-31.ibm.com/ibm/cn/cognitive/outthink/images/bg_section_04_v2.jpeg',
          'https://pic.36krcnd.com/avatar/201705/04054728/yehcucg3aqmqpi8a.jpeg!feature'
        ]
      },
      {
        title: '3一个标题',
        date: '2017-11-1',
        views: 133,
        total: 1,
        list: [
          'https://pic.36krcnd.com/avatar/201705/04054728/yehcucg3aqmqpi8a.jpeg!feature'
        ]
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
    onShareAppMessage() {
        return {
            title: '园葵demo主页',
            path: "pages/index/index"
        }
    }
})
