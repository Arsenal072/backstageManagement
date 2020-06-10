<!--  -->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                default: {}
            },
            rules: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {};
        },
        methods: {
            validate() {
                console.log('哈哈哈哈哈')
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>