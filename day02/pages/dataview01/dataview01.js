// pages/dataview01/dataview01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 19,
    list: [
      { id: 1, name: 'Tom', sal: 99999 },
      { id: 2, name: 'Jerry', sal: 99999 },
      { id: 3, name: 'Tim', sal: 99999 }
    ],
    cart: [
      { id: 1, uid: 1, count: 0, price: 60 },
      { id: 2, uid: 2, count: 1, price: 60 },
      { id: 3, uid: 3, count: 0, price: 90 },
      { id: 4, uid: 4, count: 2, price: 60 },
      { id: 5, uid: 5, count: 0, price: 40 },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showToast({
    //   title: '加载中',
    //   // duration:2000,
    //   duration:-1,
    //   icon:'loading'
    // })

    // wx.showLoading({
    //   title: '加载中',
    // })

    // var t = setTimeout(function () {
    //   wx.hideLoading();
    //   console.log(t)
    //   clearTimeout(t);
    //   t = null;
    //   console.log(t)
    // }, 2000)

    // var list = this.data.cart
    // for (var item of list) {
    //   console.log(item)
    //   item.price *= .9
    // }
    // this.setData({
    //   cart:list
    // })

    // console.log(this.data.cart)

    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })

    console.log('loading:当前组件成功')
    console.log('loading:发送ajax请求')
    console.log('loading:获取其他组件传递数据')
    console.log('loading:发现烤饭团')
    console.log('loading:发现苹果汁')
    console.log('loading:收获经验300')
    console.log(options)

    
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