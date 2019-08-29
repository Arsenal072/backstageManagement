/*
 * @Author: CGQ 
 * @Date: 2019-08-29 13:59:53 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-08-29 14:33:44
 */
<!--  -->
<template>
    <div class="login-wrapper">
        <div class="login-box">
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    components: {},

    data() {
        return {};
    },

    methods: {}
};
</script>
<style lang='scss'>
.login-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url("../assets/images/login-bg.jpg") center top no-repeat fixed;
    // background-image: url("../assets/images/login-bg.jpg");
    // background-position: center top;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    background-size: cover;
    -webkit-background-size: cover; /* 兼容Webkit内核浏览器如Chrome和Safari */
    -o-background-size: cover; /* 兼容Opera */
    zoom: 1;
    .login-box{
        position: fixed;
        top: 200px;
        right: 420px;
        width: 400px;
        height: 500px;
        background-color: #fff;
        border: 1px solid #3978ff;
    }
}
</style>