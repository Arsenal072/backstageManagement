/*
 * @Author: CGQ 
 * @Date: 2019-09-02 11:50:32 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-11 17:59:34
 */
<!--  -->
<template>
    <div class='businessStatistics-wrapper'>
        业务统计
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
        </div>

        {{model}}

        <br>
        <Form></Form>

    </div>
</template>

<script>
import MyInput from "./input";
import FormItem from "./formItem";
import MyForm from "./form";
import Form from './form/index'
export default {
    name: "BusinessStatistics",
    components: {
        MyInput,
        FormItem,
        MyForm,
        Form
    },

    data() {
        return {
            model: {
                username: "",
                password: ""
            },
            rules: {
                username: [{ required: true, message: "请输入用户名" }],
                password: [{ required: true, message: "请输入密码" }]
            }
        };
    },

    methods: {
        submit() {
            this.$refs['form'].validate(valid=>{
                debugger
                alert(valid?'请求登录':'校验失败')
            })
        }
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