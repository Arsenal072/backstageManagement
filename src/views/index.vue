/*
 * @Author: CGQ 
 * @Date: 2019-08-29 14:01:23 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-08-30 16:42:57
 */
<!--  -->
<template>
    <div class="index-wrapper">
        <!-- <Header></Header>
        <Aside></Aside>
        <Footer></Footer> -->
        <div style="height:100%">
            <!-- 头部 -->
            <el-header>
                <Header></Header>
                <!-- <i-nav :isShowIcon='false'></i-nav> -->
            </el-header>
            <el-main>
                <!-- 面包屑 -->
                <!-- <i-breadcrumb :items="menuItems"></i-breadcrumb> -->
                <!-- 路由 -->
                <div>
                    <!-- <router-view :key="$route.fullPath" /> -->
                </div>
            </el-main>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Aside from "../layout/Aside";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
export default {
    name: "Index",
    components: { Aside, Footer, Header },

    data() {
        return {};
    },

    methods: {}
};
</script>
<style lang='scss'>
.index-wrapper {
    // .el-header,
    // .el-footer {
    //     background-color: #3978ff;
    //     color: #fff;
    //     text-align: center;
    //     line-height: 60px;
    // }

    // .el-aside {
    //     background-color: #fff;
    //     color: #333;
    //     border: 1px solid #ccc;
    //     text-align: center;
    //     line-height: 200px;
    // }

    // .el-main {
    //     background-color: #fff;
    //     color: #333;
    //     text-align: center;
    //     line-height: 160px;
    // }
}
</style>