/*
 * @Author: CGQ 
 * @Date: 2019-11-08 13:51:26 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-10 16:43:36
 */
<!-- 测试scroll-better -->
<template>
    <div class="recommend">
        <scroll ref="scroll" class="recommend-content" :data="discList">
            <div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li v-for="(item,index) in discList" class="item" :key="index">
                            <div class="icon">
                                <img :src="item.imgurl" width="80" height="80">
                            </div>
                            <div class="text">
                                <h2 class="name" v-html="item.creator.name"></h2>
                                <p class="desc" v-html="item.dissname"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </scroll>
        <button @click="k">按钮</button>
        <child :msg='msg' ref='child' @returnMsg='returnMsg'></child>
    </div>
</template>

<script>
import Scroll from "../layout/Scroll";
import Child from '@/components/child'

export default {
    name: "recommend",
    components: {
        Scroll,
        Child
    },
    data() {
        return {
            discList: [
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                }
            ],
            msg: '加急件案件安监局啊'
        };
    },
    created() {
    },
    methods: {
        k(){
            this.$refs.child.submit()
        },
        returnMsg(inputValue){
            console.log('inputValue',inputValue)
        }
    },

};
</script>
<style lang='scss' scoped>
.item{
    width: 40%;
    margin: 0 auto;
    border: 1px solid #3978ff;
    display: flex;
    justify-content: space-around;
}
</style>