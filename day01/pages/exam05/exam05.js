// pages/exam05/exam05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, name: 'Tom', salary: 99999 },
      { id: 2, name: 'lusy', salary: 99999 },
      { id: 3, name: 'lili', salary: 99999 },
      { id: 4, name: 'lisa', salary: 99999 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = this.data.list;
    for (var item of list) {
      item.salary *= 1.1
    }

    this.setData({
      list: list
    })
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