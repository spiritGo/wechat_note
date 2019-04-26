// pages/exam03/exam03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: '啥子', arr: ['张飞', false, 1, undefined], obj: { name: '刘备', age: 42 }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.num1)
    var age = this.data.obj.age;
    console.log(age)
    this.setData({
      obj: { name: '刘备', age: age * .1 }
    })
    // this.data.obj.age *= .1
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    this.setData({
      num1: 111
    })

    this.data.num1 = 102
    console.log(this.data)
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