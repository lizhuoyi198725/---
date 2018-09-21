<template>
  <div class="superMan">
    <p>我是达人页</p>
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
      index:3
    }
  },

  created () {
    
  }
}
</script>

<style>
  .superMan{
    padding:120rpx 0;
  }
</style>
