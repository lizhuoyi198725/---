<template>
  <div class="login">
    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">登陆</button>
  </div>
</template>

<script>

export default {
  components: {
    
  },

  data () {
    return {
      
    }
  },

  methods: {

    

  },

  mounted () {
    // 调用应用实例的方法获取全局数据
    const code = wx.getStorageSync('code') || null
    if(code){
      console.log("不需要登陆")
      wx.redirectTo({
        url:"/pages/index/main"
      })
    }
  }

}
</script>

<style scoped>

  .login{
    background: red;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button{
    width: 200rpx;
  }
</style>
