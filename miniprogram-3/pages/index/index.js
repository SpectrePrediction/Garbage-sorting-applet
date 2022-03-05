import * as paddlejs from '@paddlejs/paddlejs-core';
import '@paddlejs/paddlejs-backend-webgl';


const plugin = requirePlugin("paddlejs-plugin");
plugin.register(paddlejs, wx);

import {labelMap} from './util.js'

export const PaddleJS = new paddlejs.Runner({
  // modelPath: 'https://mms-voice-fe.cdn.bcebos.com/pdmodel/clas/common/v4_2_0915',
  modelPath: 'http://192.168.3.17',
  // modelPath: 'mod3',
  feedShape: {
      fw: 224,
      fh: 224
  },
  fill: '#fff',
  targetSize: {
      height: 224,
      width: 224
  },
  bgr: false,
  mean: [0.485, 0.456, 0.406],
  std:  [0.229, 0.224, 0.225],
  needPreheat: true,
  webglFeedProcess: true
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonText: "请等待",
    imageSrc: "",
    canvasWidth: 320,
    canvasHeight: 500,
  },

  /**
   * 通过按钮触发
   */
  test: function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success:res => {
        console.log(res)
        this.setData({
          imageSrc: res.tempFilePaths[0]      
        })

        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: res=> {

            let {width, height, path} = res;

            console.log(width, height)
            let scale = this.data.canvasWidth / width
            console.log(scale)
            width = width * scale
            height = height * scale
            this.setData({
              canvasHeight: height
            })
            
            const ctx = wx.createCanvasContext("myCanvas")
            console.log(ctx)
            ctx.drawImage(path, 0, 0, width, height);
            ctx.draw(false, () => {

              wx.canvasGetImageData({
                canvasId: "myCanvas",
                height: height,
                width: width,
                x: 0,
                y: 0,
                success: res => {

                  // for(let i = 0 ; i < res.data.length; i ++){
                  //   res.data[i] = res.data[i] / 255.0
                  // }
                  // console.log(res.data[100])
                  PaddleJS.predict(res).then(res =>{
                    console.log(res)
                    const max = Math.max.apply(null, res);
                    const index = res.indexOf(max);
                    console.log(index, max)
                    console.log(labelMap[index])
                    if (max >= 0.2){
                      this.setData({
                        buttonText: labelMap[index]
                      })
                    }else{
                      this.setData({
                        buttonText: "没识别出来"
                      })
                    }

                    
                  })
                },
                fail: res => {
                  console.log(res)
                }
  
              },)

            })


          }
        })

      }
    })



    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        console.log(result.windowWidth)
        this.setData({
          canvasWidth: result.windowWidth
        })
      },
    })
    PaddleJS.init().then(res => {
      this.setData({
        buttonText: " 准备完成"
      })
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