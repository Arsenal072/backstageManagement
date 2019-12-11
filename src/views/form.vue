/*
 * @Author: CGQ 
 * @Date: 2019-12-11 16:04:19 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-11 17:56:28
 */
<!--  -->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide(){
        return{
            form: this
        }
    },
    name: "",
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        },
    },
    data() {
        return {};
    },

    methods: {
        validate(cb){
            const tasks = this.$children
                .filter(item=>item.prop).map(item=>item.validate())
            Promise.all(tasks).then(()=>{
                cb(true)
            }).catch(()=>{
                debugger
                cb(false)
            })
        }
    }
};
</script>
<style lang='scss'>
</style>