/*
 * @Author: CGQ 
 * @Date: 2019-08-29 14:01:23 
 * @Last Modified by: CGQ
 * @Last Modified time: 2020-04-27 21:03:17
 */
<!--  -->
<template>
    <div class="index-wrapper">
        <el-container ref='a'>
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
                    <div class="select">
                        <div class="inner">
                            <div class="inputWrapper">
                                <input type="text" readonly placeholder="请选择菜品">
                                <span class="iconfont icon-zhankaishangxia"></span>
                            </div>
                            <ul class="options">
                                <li v-for="(item, index) in options" :key="index">{{item.value}}</li>
                            </ul>
                        </div>
                    </div>
                    <router-view />
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
            options: [
                {
                    value: "西红柿鸡蛋"
                },
                {
                    value: "青椒抱鸡蛋"
                },
                {
                    value: "回锅肉"
                },
                {
                    value: "宫保鸡丁"
                },
                {
                    value: "地三鲜"
                }
            ]
        };
    },

    methods: {},
    created() {
        // console.log('route',this.$route)
    },
    mounted() {
        console.log(this.$refs["a"].childNodes);
    }
};
</script>
<style lang='scss'>
.index-wrapper {
    .breadCrumb {
        text-align: left;
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
    .select {
        .inner {
            width: 250px;
            .inputWrapper{
                height: 40px;
                border: 1px solid #999;
                margin-bottom: 2px;
                padding: 0;
                input{
                    width: 80%;
                    height: 100%;
                    border: none;
                    padding-top: 8px;
                }
            }
            .options {
                
                border: 1px solid #666;
                li {
                    border-bottom: 1px solid #666;
                }
            }
        }
    }
}
</style>