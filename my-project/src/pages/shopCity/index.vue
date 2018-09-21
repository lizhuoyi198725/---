<template>
  <div class="shopCity">
    <p>我是商城页</p>
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
      index:1
    }
  },

  created () {
    
  }
}
</script>

<style>
  .shopCity{
    padding:120rpx 0;
  }
</style>
