const API = require('../../API/api');
const app = getApp();

Page({


  data: {
    newsong: [], //最新音乐全部
  },

 
  onLoad: function (options) {
    this.getNewSong();
  },

  getNewSong: function () {
    API.getNewSong({}).then(res => {
      if (res.code === 200) {
        this.setData({
          newsong: res.result
        })
      }
    })
  }


})