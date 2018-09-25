
<template>
  <div class="container">
    <div class="topNav">
      <span class="topNav-position" @click="getLocation">{{text}}</span>
      <input class="topNav-input" type="text" placeholder="搜索框初始的文字信息">
      <span class="topNav-message">{{message}}</span>
    </div>
    <div class="footNav">
      <navigator v-for="(item,index) in footObj" :key="index" :url="item.url" hover-class="navigator-hover" class="foot-item" redirect :class="{cur:index==idx}">{{item.txt}}</navigator>
      <!-- <navigator url="/pages/shopCity/main" hover-class="navigator-hover" class="foot-item" redirect>商城</navigator>
      <navigator url="/pages/together/main" hover-class="navigator-hover" class="foot-item" redirect>拼</navigator>
      <navigator url="/pages/superMan/main" hover-class="navigator-hover" class="foot-item" redirect>达人</navigator>
      <navigator url="/pages/my/main" hover-class="navigator-hover" class="foot-item" redirect>我的</navigator> -->
    </div>
  </div>
</template>

<script>

export default {
  props: ['text',"message","idx"],
  data () {
    return {
        color:"white",
        footObj:[
          {url:"/pages/index/main",txt:"首页"},
          {url:"/pages/shopCity/main",txt:"商城"},
          {url:"/pages/together/main",txt:"拼"},
          {url:"/pages/superMan/main",txt:"达人"},
          {url:"/pages/my/main",txt:"我的"},
        ],
    }
  },

  methods: {
    getLocation(){
      var that = this;
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function (res) {
          var latitude = res.latitude//维度
          var longitude = res.longitude//经度
          that.loadCity(longitude,latitude);
        }
      })
    },
    loadCity: function (longitude, latitude) {
      var page = this
      var ak = '1ECQIV0Kdx6nSAQZLx354tMYOkIkSD7H'
      wx.request({
        url: `https://api.map.baidu.com/geocoder/v2/?ak= ${ak}&location=${latitude},${latitude}&output=json`,
        data: {},
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // success  
          console.log(res);
          // var city = res.data.result.addressComponent.city;
        },
        fail: function () {
          
        },
        
      })
    }
  },

}
</script>

<style scoped lang="scss">
  .topNav{
    width: 100%;
    height: 120rpx;
    background: purple;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .topNav-position{
    width: 60rpx;
    height: 60rpx;
    background: red;
    margin-left: 10rpx;
    color: purple;
    line-height: 60rpx;
    text-align: center;
  }
  .topNav-message{
    width: 60rpx;
    height: 60rpx;
    background: red;
    margin-right: 10rpx;
    line-height: 60rpx;
    text-align: center;
  }
  .topNav-input{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 460rpx;
    height: 80rpx;
    border: 1px solid red;
    border-radius: 40rpx;
    color: #fff;
    padding:0 60rpx;
  }
  .footNav{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 120rpx;
    background:blue;
    position: fixed;
    bottom: 0;
    left: 0;
    .foot-item{
      flex:1;
      background: red;
      box-sizing: border-box;
      line-height: 120rpx;
      text-align: center;
      color: #000;
      &:active{
        background: purple;
      }
    }
    
  }
  .cur{
    color: #fff !important;
  }
</style>
