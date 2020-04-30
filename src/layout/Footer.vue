/*
 * @Author: CGQ 
 * @Date: 2019-08-30 11:57:17 
 * @Last Modified by: CGQ
 * @Last Modified time: 2020-04-29 11:11:20
 */
<!-- footer -->
<template>
    <div class="footer-wrapper">
        <div class="bottom-box">
            <div>&copy; 
                <span>路人王</span>
                <span >2019-08-30</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    components: {},

    data() {
        return {};
    },

    methods: {}
};
</script>
<style lang='scss'>
.footer-wrapper{
    padding-top: 50px;
    .bottom-box{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 80px;
        font-size: 20px;
        line-height: 80px;
        background-color: #3A5FCD;
        color: #fff;
    }
}
</style>