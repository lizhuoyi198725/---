<template>
  <div class="together">
    <p>我是拼单页</p>
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
      index:2
    }
  },

  created () {
    
  }
}
</script>

<style>
  .together{
    padding:120rpx 0;
  }
</style>
