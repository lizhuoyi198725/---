<template>
  <div class="personal">
    <p>我是个人页</p>
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
      index:4
    }
  },

  created () {
    
  }
}
</script>

<style>
  .personal{
    padding:120rpx 0;
  }
</style>
