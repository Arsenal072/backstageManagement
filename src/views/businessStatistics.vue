/*
 * @Author: CGQ 
 * @Date: 2019-09-02 11:50:32 
 * @Last Modified by: CGQ
 * @Last Modified time: 2020-04-29 11:26:58
 */
<!--  -->
<template>
    <div class='businessStatistics-wrapper'>
        <!-- 业务统计  -->
        <span>面包屑:</span>
        <div v-if='crumbData.length' class='crumb'>
            <span v-for="(item, index) in crumbData" :key='index'>{{item}}<span v-if='index!=crumbData.length-1'>/</span></span>
        </div>
        <!-- <div>
            <my-form :model='model' :rules='rules' ref='form'>
                <form-item label='用户名' prop='username'>
                    <my-input v-model='model.username' placeholder='请输入用户名'></my-input>
                </form-item>
                <form-item label='密码' prop='password'>
                    <my-input v-model='model.password' placeholder='请输入密码'></my-input>
                </form-item>
            </my-form>
        </div> -->
        <div>
            <!-- <button @click="submit" class='submit'>提交</button> -->
            <button @click="test">测试router跳转</button>
        </div>
        <!-- <my-checkbox v-model='ischecked' placeholder='请输入用户名'></my-checkbox>
        {{ischecked}} -->
        <!-- {{model}} -->

        <div>
            <router-link to='/main'>main</router-link>
            <router-link to='/about'>about</router-link>
            <router-link to='/detail'>detail</router-link>
            <router-view></router-view>
        </div>
        <div class='vuex'>
            <h3>vuex使用</h3>
            userInfo:{{userInfo}}
        </div>
        <el-button type='primary' @click="add">add</el-button>
        <div>count: {{count}}</div>
        <div>name: {{username}}</div>
        mapGetters: {{showMsg}}

        <div><button id="btn">Open PhotoSwipe</button></div>

        <h2>First gallery:</h2>

        <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">

            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://farm3.staticflickr.com/2567/5697107145_a4c2eaa0cd_o.jpg" itemprop="contentUrl" data-size="1024x1024">
                    <img src="https://farm3.staticflickr.com/2567/5697107145_3c27ff3cd1_m.jpg" itemprop="thumbnail" alt="Image description" />
                </a>
                <figcaption itemprop="caption description">Image caption 1</figcaption>

            </figure>

            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg" itemprop="contentUrl" data-size="964x1024">
                    <img src="https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_m.jpg" itemprop="thumbnail" alt="Image description" />
                </a>
                <figcaption itemprop="caption description">Image caption 2</figcaption>
            </figure>

            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg" itemprop="contentUrl" data-size="1024x683">
                    <img src="https://farm7.staticflickr.com/6175/6176698785_7dee72237e_m.jpg" itemprop="thumbnail" alt="Image description" />
                </a>
                <figcaption itemprop="caption description">Image caption 3</figcaption>
            </figure>

            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://farm6.staticflickr.com/5023/5578283926_822e5e5791_b.jpg" itemprop="contentUrl" data-size="1024x768">
                    <img src="https://farm6.staticflickr.com/5023/5578283926_822e5e5791_m.jpg" itemprop="thumbnail" alt="Image description" />
                </a>
                <figcaption itemprop="caption description">Image caption 4</figcaption>
            </figure>

        </div>

        <h2>Second gallery:</h2>

        <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">

            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg" itemprop="contentUrl" data-size="964x1024">
                    <img src="https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_m.jpg" itemprop="thumbnail" alt="Image description" />
                </a>
                <figcaption itemprop="caption description">Image caption 2.1</figcaption>
            </figure>

            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg" itemprop="contentUrl" data-size="1024x683">
                    <img src="https://farm7.staticflickr.com/6175/6176698785_7dee72237e_m.jpg" itemprop="thumbnail" alt="Image description" />
                </a>
                <figcaption itemprop="caption description">Image caption 2.2</figcaption>
            </figure>

            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://farm6.staticflickr.com/5023/5578283926_822e5e5791_b.jpg" itemprop="contentUrl" data-size="1024x768">
                    <img src="https://farm6.staticflickr.com/5023/5578283926_822e5e5791_m.jpg" itemprop="thumbnail" alt="Image description" />
                </a>
                <figcaption itemprop="caption description">Image caption 2.3</figcaption>
            </figure>

        </div>

        <!-- Root element of PhotoSwipe. Must have class pswp. -->
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

            <!-- Background of PhotoSwipe. 
         It's a separate element, as animating opacity is faster than rgba(). -->
            <div class="pswp__bg"></div>

            <!-- Slides wrapper with overflow:hidden. -->
            <div class="pswp__scroll-wrap">

                <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
                <!-- don't modify these 3 pswp__item elements, data is added later on. -->
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>

                <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
                <div class="pswp__ui pswp__ui--hidden">

                    <div class="pswp__top-bar">

                        <!--  Controls are self-explanatory. Order can be changed. -->

                        <div class="pswp__counter"></div>

                        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                        <button class="pswp__button pswp__button--share" title="Share"></button>

                        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                        <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                        <!-- element will get class pswp__preloader--active when preloader is running -->
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>

                    <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                    </button>

                    <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                    </button>

                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
// import MyInput from "./input";
// import MyCheckbox from "./checkbox";
// import FormItem from "./formItem";
// import MyForm from "./form";
import getCookie from "../utils/getCookie";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
    name: "BusinessStatistics",
    components: {
        // MyInput,
        // FormItem,
        // MyForm,
        // MyCheckbox
    },

    data() {
        return {
            model: {
                username: "",
                password: ""
            },
            ischecked: false,
            crumbData: []
        };
    },
    watch: {
        $route(newValue) {
            console.log("newValue", newValue);
            this.crumbData = newValue.matched.map(m => m.name);
        }
    },
    computed: {
        ...mapState({
            username: state => state.user.name
        }),
        ...mapGetters({
            showMsg: "user/showMsg"
        }),
        userInfo() {
            return this.$store.state.user.userInfo;
        },
        count() {
            return this.$store.state.user.count;
        }
        // name(){
        //     return this.$store.state.user.name
        // }
    },
    methods: {
        // ...mapMutations({
        //     add: 'user/setCount'
        // }),
        test() {
            this.$router.push({
                path: "detail/56456",
                query: {
                    name: "啊啊啊"
                }
            });
        },
        add() {
            this.$store.commit("user/setCount");
        }
    },
    created() {
        console.log("userName:", getCookie("userName"));
        this.crumbData = this.$route.matched.map(m => m.name);
    },
    mounted(){
        this.initPhotoSwipeFromDOM('.my-gallery');
    }
};
</script>
<style lang='scss'>
.businessStatistics-wrapper {
    .crumb {
        display: inline-block;
        color: #3978ff;
    }
    .vuex {
        margin-top: 100px;
    }
    .my-gallery {
        width: 100%;
        float: left;
    }
    .my-gallery img {
        width: 100%;
        height: auto;
    }
    .my-gallery figure {
        display: block;
        float: left;
        margin: 0 5px 5px 0;
        width: 150px;
    }
    .my-gallery figcaption {
        display: none;
    }
}
</style>