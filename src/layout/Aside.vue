/*
 * @Author: CGQ 
 * @Date: 2019-08-30 11:56:46 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-08-30 16:29:39
 */
<!-- aside -->
<template>
    <div class="aside-wrapper">
        <div class="menu-box">
            <div v-for="(item, index) in menuList" :key="index" @click="changeMenu" class="menu-item">
                <span :class="['iconfont',item.icon]"></span>
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Aside",
    components: {},

    data() {
        return {
            menuList: [
                {
                    name: '业务统计',
                    icon: 'icon-tongji',
                    path: '/login'
                },
                {
                    name: '业务统计',
                    icon: 'icon-yonghu',
                    path: '/login'
                },
                {
                    name: '业务统计',
                    icon: 'icon-yonghu',
                    path: '/login'
                },
                {
                    name: '业务统计',
                    icon: 'icon-yonghu',
                    path: '/login'
                },
                {
                    name: '业务统计',
                    icon: 'icon-yonghu',
                    path: '/login'
                },
                {
                    name: '业务统计',
                    icon: 'icon-yonghu',
                    path: '/login'
                }
            ]
        };
    },

    methods: {
        changeMenu(){
            this.$router.push('/login')
        }
    }
};
</script>
<style lang='scss'>
.aside-wrapper {
    float: left;
    .menu-box {
        width: 200px;
        height: 800px;
        border-right: 1px solid #eee;
        box-shadow:0 0 12px #ccc;
        .menu-item{
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            background-color: #fff;
            color: #3978ff;
            border-bottom: 1px solid #ccc;
            cursor: pointer;
            .iconfont{
                font-size: 20px;
                color: #3978ff;
            }
        }
    }
}
</style>