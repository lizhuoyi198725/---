<template>
  <div class="personal">
    <view class="map_container"> 
      <map class="map" id="map" longitude="longitude" latitude="latitude" scale="14" show-location="true" markers="markers" bindmarkertap="makertap"></map> 
    </view> 
    <!-- <view class="place_info"> 
      <text>{{placeData.title}}</text> 
      <text>{{placeData.address}}</text> 
      <text>{{placeData.telephone}}</text> 
    </view>  -->
    <navBar :idx="index"></navBar>
  </div>
</template>

<script>
import navBar from '@/components/navBar'

// 引用百度地图微信小程序JSAPI模块 
export default {
  components: {
    navBar
  },

  data () {
    return {
      index:4,
      markers: [], 
      city:"",
      latitude: '', 
      longitude: '', 
    }
  },

  onLoad: function() { 
    
  }, 

  methods:{

  }
    
}
</script>

<style>
  .personal{
    padding:120rpx 0;
  }
  .map_container{ 
    height: 300px; 
    width: 100%; 
  } 
  .map { 
    height: 100%; 
    width: 100%;  
  } 
</style>
