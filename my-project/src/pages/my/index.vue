<template>
  <div class="personal">
    <p>我是个人页</p>
    <map id="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
    <navBar :idx="index"></navBar>
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
      index:4,
      latitude:"",
      longitude:"",
      markers:[{
        id: 1,
        latitude:"",
        longitude:"",
        name: 'T.I.T 创意园'
      }]
    }
  },

  mounted () {
    this.longitude = this.$store.state.longitude;
    this.latitude = this.$store.state.latitude;
    this.markers[0].longitude = this.$store.state.longitude;
    this.markers[0].latitude = this.$store.state.latitude;
  }
}
</script>

<style>
  .personal{
    padding:120rpx 0;
  }
  map{
    width: 100%;
    height: 100vh;
  }
</style>
