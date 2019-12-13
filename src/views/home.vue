/*
 * @Author: CGQ 
 * @Date: 2019-08-29 14:01:23 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-13 19:26:40
 */
<!--  -->
<template>
    <div class="index-wrapper">
        <el-container>
            <!-- 头部 -->
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <Aside></Aside>
                </el-aside>
                <el-main>
                    <div class='breadCrumb'>{{$route.meta.title}}</div>
                    <router-view/>
                </el-main>
            </el-container>
            <Footer></Footer>
        </el-container>
    </div>
</template>

<script>
import Aside from "../layout/Aside";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
export default {
    name: "Home",
    components: { Aside, Footer, Header },

    data() {
        return {
        };
    },

    methods: {},
    created(){
        // console.log('route',this.$route)
    }
};
</script>
<style lang='scss'>
.index-wrapper {
    .breadCrumb{
        text-align: left;
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
}
</style>