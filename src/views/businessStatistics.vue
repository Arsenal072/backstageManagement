/*
 * @Author: CGQ 
 * @Date: 2019-09-02 11:50:32 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-13 19:27:23
 */
<!--  -->
<template>
    <div class='businessStatistics-wrapper'>
        <!-- 业务统计  -->
        <div v-if='crumbData.length'>
            <span v-for="(item, index) in crumbData" :key='index'>{{item}}<span v-if='index!=crumbData.length-1'>/</span></span>
        </div>
        <div>
            <my-form :model='model' :rules='rules' ref='form'>
                <form-item label='用户名' prop='username'>
                    <my-input v-model='model.username' placeholder='请输入用户名'></my-input>
                </form-item>
                <form-item label='密码' prop='password'>
                    <my-input v-model='model.password' placeholder='请输入密码'></my-input>
                </form-item>
            </my-form>
        </div>
        <div>
            <button @click="submit" class='submit'>提交</button>
            <button @click="test">测试router跳转</button>
        </div>
        <my-checkbox v-model='ischecked' placeholder='请输入用户名'></my-checkbox>
        {{model}}

        <div>
            <router-link to='/main'>main</router-link>
            <router-link to='/about'>about</router-link>
            <router-link to='/detail'>detail</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import MyInput from "./input";
import MyCheckbox from "./checkbox";
import FormItem from "./formItem";
import MyForm from "./form";
export default {
    name: "BusinessStatistics",
    components: {
        MyInput,
        FormItem,
        MyForm,
        MyCheckbox
    },

    data() {
        return {
            model: {
                username: "",
                password: ""
            },
            ischecked: false,
            crumbData: [],
            rules: {
                username: [{ required: true, message: "请输入用户名" }],
                password: [{ required: true, message: "请输入密码" }]
            }
        };
    },
    watch: {
        $route(newValue) {
            console.log('newValue',newValue)
            this.crumbData = newValue.matched.map(m => m.name);
        }
    },
    methods: {
        submit() {
            this.$refs["form"].validate(valid => {
                alert(valid ? "请求登录" : "校验失败");
            });
        },
        test() {
            this.$router.push({
                path: "detail/56456",
                query: {
                    name: "啊啊啊"
                }
            });
        }
    },
    created(){
        this.crumbData = this.$route.matched.map(m => m.name);
    }
};
</script>
<style lang='scss'>
.businessStatistics-wrapper {
    .submit {
        width: 50px;
        height: 35px;
        margin: 20px 0;
        border: 1px solid #3978ff;
        background-color: #fff;
        cursor: pointer;
    }
}
</style>