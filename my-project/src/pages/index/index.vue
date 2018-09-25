
<template>
  <div class="index-con">
    <navBar :idx="index" :text="text" :message="text1"></navBar>
    <swiper indicator-dots autoplay interval=3000 duration=1000 circular class="swiper">
      <block v-for="(item, idx) in imgurls" :key="idx">
        <swiper-item>
          <image :src="item" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="domain">
      <a href="" @click="payFor">我要开团</a>
      <a href="">拼单进行时</a>
      <a href="">拼达人</a>
      <a href="">热拼服务</a>
    </div>
    <div class="together-ing">
      <div class="together-title">拼单进行时</div>
      <div class="together-ing-item"></div>
      <div class="together-ing-item"></div>
      <div class="together-ing-item"></div>
    </div>
  </div>
</template>

<script>

import navBar from "@/components/navBar"

export default {
  data () {
    return {
      text: 'P',
      text1:"M",
      userInfo: {},
      imgurls:[
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537519766995&di=377b0719f459540575902e12f12de921&imgtype=0&src=http%3A%2F%2Fnewspaper.jfdaily.com%2Fisdb%2Fresfiles%2F2017-02%2F08%2Fl_9687_baaa5e6a-a339-4da9-837e-60b6aff6e8b0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537519766995&di=377b0719f459540575902e12f12de921&imgtype=0&src=http%3A%2F%2Fnewspaper.jfdaily.com%2Fisdb%2Fresfiles%2F2017-02%2F08%2Fl_9687_baaa5e6a-a339-4da9-837e-60b6aff6e8b0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537519766995&di=377b0719f459540575902e12f12de921&imgtype=0&src=http%3A%2F%2Fnewspaper.jfdaily.com%2Fisdb%2Fresfiles%2F2017-02%2F08%2Fl_9687_baaa5e6a-a339-4da9-837e-60b6aff6e8b0.jpg"
      ],
      index:0
    }
  },
  components:{
    navBar
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    payFor(){

      // wx.requestPayment({
      //   'timeStamp': '',
      //   'nonceStr': '',
      //   'package': 'prepay_id=wx2017033010242291fcfe0db70013231072',
      //   'signType': 'MD5',
      //   'paySign': '',
      //   'success':function(res){
      //     console.log(res)
      //   },
      //   'fail':function(res){
      //     console.log(res)
      //   },
      //   'complete':function(res){
      //     console.log(res)
      //   }
      // })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },

  onLoad: function() {
    console.log(this.$getPage())
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }else{
      console.log("自带按钮")
    }
    return {
      title: '社惠拼',
      path: this.$getPage()
    }
  }
}
</script>

<style scoped lang="scss">
    .index-con{
      padding:120rpx 0;
    }
    .swiper{
      height: 400rpx;
    }
    .slide-image{
      width: 100%;
      height: 400rpx;
    }
    .domain{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 200rpx;
      border-bottom: 20rpx solid #ccc;
      a{
        width: 120rpx;
        height: 120rpx;
        background: red;
        font-size: 24rpx;
        line-height: 120rpx;
        text-align: center;
      }
    }
    .together-ing{
      padding: 30rpx;
    }
    .together-title{
      border-left:10rpx solid blue;
      padding-left:20rpx;
      margin-bottom: 20rpx;
    }
    .together-ing-item{
      height: 200rpx;
      background: skyblue;
      border-top: 5rpx solid #ccc;
    }
</style>
