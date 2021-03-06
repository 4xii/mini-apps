// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[
      "../../images/swiper1.jpg",
      "../../images/swiper2.jpg",
      "../../images/swiper3.jpg",
    ],
    lists:[
      "../../images/list1.png",
      "../../images/list2.png",
      "../../images/list3.png",
      "../../images/list4.png",
      "../../images/list5.png",
      "../../images/list6.png",
      "../../images/list7.png",
      "../../images/list8.png",
      "../../images/list9.png",
      "../../images/list10.png",
    ],
    phoneLists:[
      {"titleImg":"../../images/select.jpg",
      "goodList":[
        {
        "id":1,
        "img":"../../images/select1.jpg",
        "name":"小米10 Pro",
        "intro":"骁龙865/1亿像素相机",
        "price":"￥4999起",
        "original":"￥5999",
        "num":1
      },{
        "id":2,
        "img":"../../images/select2.jpg",
        "name":"小米10",
        "intro":"120Hz流速屏, 全速热爱",
        "price":"￥3699起",
        "original":"￥4699",
        "num":1
      },{
        "id":3,
        "img":"../../images/select3.jpg",
        "name":"Redmi K30 4G",
        "intro":"120Hz流速屏, 全速热爱",
        "price":"￥1299起",
        "original":"￥1699",
        "num":1
      },{
        "id":4,
        "img":"../../images/select4.jpg",
        "name":"Redmi K30 4G",
        "intro":"120Hz流速屏, 全速热爱",
        "price":"￥1299起",
        "original":"￥1699",
        "num":1
      },{
        "id":5,
        "img":"../../images/select5.jpg",
        "name":"Redmi K30 4G",
        "intro":"120Hz流速屏, 全速热爱",
        "price":"￥1299起",
        "original":"￥1699",
        "num":1
      },{
        "id":6,
        "img":"../../images/select6.jpg",
        "name":"Redmi K30 4G",
        "intro":"120Hz流速屏, 全速热爱",
        "price":"￥1299起",
        "original":"￥1699",
        "num":1
      }]}
    ],
    // 定义图片高度
    imghei:"",
  },

  // 轮播图缩放后的高度
  imgH:function(event){
    console.log(event)
    // 获取图片原本的宽高度
    var imgwid = event.detail.width
    var imgwid = event.detail.height
    console.log(imgWid,imgHei)
    // 获取手机屏幕的宽度
    var winWid = wx.getSystemInfoSync().windowWidth
    console.log(winWid)
    // 图片宽度为屏幕大小时，缩放比后的图片高度
    var hei = winWid/imgWid * imgHei
    //将缩放后的图片高度修改到初始数据中
    this.setData({
        hei:hei
      })
  },
    toDetails:function(event){
      var id = event.target.dataset.id    
      var goodList = this.data.phoneLists[0].goodList;
      var phone = goodList[id];
      //加到缓存
      wx.setStorageSync('detailsList', [phone])
      //跳转
      wx.navigateTo({
        url:'/pages/details/details'
      })
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