<template>
  <div class="shopCity">
    <p>我是商城页</p>
    <navBar :idx="index"></navBar>
    <canvas  canvas-id="shareImg" style="width:100vw;height:100vh"></canvas>
    <button class='share' type='primary' bindtap='share'>生成分享图</button>
  </div>
</template>

<script>
import navBar from '@/components/navBar'

export default {
  components: {
    navBar
  },

  data () {
    return {
      index:1
    }
  },

onLoad () {
  console.log(wx.getSystemInfoSync().windowWidth,wx.getSystemInfoSync().windowHeight)

  let promise1 = new Promise(function (resolve, reject) {

  /* 获得要在画布上绘制的图片 */
    wx.getImageInfo({
      src: 'http://img12.3lian.com/gaoqing02/01/58/85.jpg',
      success: function (res) {
        console.log(res)
        resolve(res);
      }
    })
  });
let promise2 = new Promise(function (resolve, reject) {
    wx.getImageInfo({
      src: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=605eff43ba0e7bec238f0be51a1e950e/b3fb43166d224f4a79fb985f0bf790529822d118.jpg',
      success: function (res) {
        console.log(res)
        resolve(res);
      }
   })
 });

/* 图片获取成功才执行后续代码 */
 Promise.all(
   [promise1,promise2]
 ).then(res => {
    console.log(res)

    /* 创建 canvas 画布 */
    const ctx = wx.createCanvasContext('shareImg')

    /* 绘制图像到画布  图片的位置你自己计算好就行 参数的含义看文档 */
    /* ps: 网络图片的话 就不用加../../路径了 反正我这里路径得加 */
    ctx.drawImage(res[0].path, 0, 0, wx.getSystemInfoSync().windowWidth, wx.getSystemInfoSync().windowHeight)
    ctx.drawImage(res[1].path, 150, 200, 100, 100)/
  
    /* 绘制文字 位置自己计算 参数自己看文档 */
    ctx.setTextAlign('center')                        //  位置
    ctx.setFillStyle('#ffffff')                       //  颜色
    ctx.setFontSize(22)                               //  字号
    ctx.fillText('分享文字描述', 50, 160)         //  内容  不会自己换行 需手动换行
    ctx.fillText('分享sd文字描述', 150, 200)         //  内容
    
    /* 绘制 */
    ctx.stroke()
    ctx.draw()
    })
  }
}
</script>

<style scoped>
  .shopCity{
    padding:120rpx 0;
  }
  canvas{
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
