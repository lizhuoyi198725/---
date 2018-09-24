<script>
export default {
  created () {

    const code = wx.getStorageSync('code') || null
    if(!code){
      console.log("需要登陆")
       wx.login({
        success:(res) => {
          if(res.code){
            wx.setStorageSync('code', res.code)
          }
        }
      })
    }
    // 调用API从本地缓存中获取数据
  }
}
</script>

<style>
/* .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
} */
/* this rule will be remove */
/* * {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
} */
</style>
