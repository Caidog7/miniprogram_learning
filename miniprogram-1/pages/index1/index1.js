// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:"hello world",
    num:10000,
    isHandsome:true,
    person:{
      name1:"Aber",
      heigh:170
    },
    time: (new Date()).toString(),
    list:[
      {
        id:1,
        name1:"zhubajie",
        name:"1"
      },
      {
        id:1,
        name1:"sunwuk",
        name:"1"
      },
      {
        id:2,
        name1:"shs",
        name:"1"
      },
      {
        id:3,
        name1:"ts",
        name:"1"      }
    ]
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})