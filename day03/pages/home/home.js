// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, img_url: 'http://127.0.0.1:3000/img/banner1.png' },
      { id: 1, img_url: 'http://127.0.0.1:3000/img/banner2.png' },
      { id: 1, img_url: 'http://127.0.0.1:3000/img/banner3.png' },
      { id: 1, img_url: 'http://127.0.0.1:3000/img/banner4.png' }
    ],
    autoplay: true,
    interval: 3000,
    vertical: false,
    navlist: [
      { id: 1, title: '美食', img_url: 'http://127.0.0.1:3000/icons/grid-01.png' },
      { id: 2, title: '沐浴', img_url: 'http://127.0.0.1:3000/icons/grid-02.png' },
      { id: 3, title: '婚礼', img_url: 'http://127.0.0.1:3000/icons/grid-03.png' },
      { id: 4, title: '唱K', img_url: 'http://127.0.0.1:3000/icons/grid-04.png' },
      { id: 5, title: '找工作', img_url: 'http://127.0.0.1:3000/icons/grid-05.png' },
      { id: 6, title: '学习', img_url: 'http://127.0.0.1:3000/icons/grid-06.png' },
      { id: 7, title: '洗车美容', img_url: 'http://127.0.0.1:3000/icons/grid-07.png' },
      { id: 8, title: '找房', img_url: 'http://127.0.0.1:3000/icons/grid-08.png' },
      { id: 9, title: '装修', img_url: 'http://127.0.0.1:3000/icons/grid-09.png' }
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