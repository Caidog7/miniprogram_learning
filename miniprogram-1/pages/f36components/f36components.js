// pages/f36components/f36components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        item:"首页",
        isActive:true

      },
      {
        id:1,
        item:"原创",
        isActive:false

      },
      {
        id:2,
        item:"分类",
        isActive:false

      },
      {
        id:3,
        item:"关于",
        isActive:false

      },
    ]
  },
// 子向父传递参数函数
handleItemChange(e){
  const { index } = e.detail;
        let {tabs}=this.data;
      tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
      this.setData({tabs})
  // console.log(e)
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