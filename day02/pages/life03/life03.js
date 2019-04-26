// pages/life03/life03.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // wx.redirectTo({
    //   url: '/pages/index/index',
    // })

    console.log(app)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showActionSheet({
      itemList: ['item'],
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('监听页面显示[切换到前台]')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('监听页面隐藏[切换到后台]')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('监听页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('监听用户下拉动作')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉触底事件的处理函数')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('用户点击右上角分享')
  },

  onPageScroll: function (opt) {
    console.log(opt)
  }
})