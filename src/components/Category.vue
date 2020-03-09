<template>
    <div class="swiper-container" ref="swiperContainer">
        <!--分类 宫格-->
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="(value,key,index) in cate"
                 :key="index"
            >
                <van-grid clickable>
                    <van-grid-item
                        v-for="(item) in cate[key]"
                        :key="item.optID"
                        icon="photo-o"
                        :text="item.optName"
                        @click="handleBuy(item.optName)"
                    />
                </van-grid>
            </div>
        </div>
        <!--滚动条-->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data(){
            return {
            }
        },
        methods:{
            handleBuy(keyword){
                this.$router.push({
                    name: 'goodslist',
                    query: {
                        keyword
                    }
                })
            }
        },
        props: ['categoty'],
        computed:{
            cate(){
                const categorys = {}
                const page1 = []
                const page2 = []
                const data = this.categoty
                const len = data.length
                data.forEach((item,index)=>{
                    if (index >= len/2)page2.push(item)
                    else page1.push(item)
                })
                categorys.page1 = page1
                categorys.page2 = page2
                return categorys
            }
        },
        mounted() {
            const ele = this.$refs.swiperContainer
            const mySwiper = new Swiper(ele, {
                freeMode : true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })
            // 获取滚动条的HTML元素，还可通过$el获取DOM7。
            mySwiper.scrollbar.$el.css('width','100px');
            // 获取滚动条指示条的HTML元素，还可通过$dragEl获取DOM7。
            mySwiper.scrollbar.$dragEl.css('background','#ff6600');
            // 更新滚动条
            mySwiper.scrollbar.updateSize();
        }
    }
</script>

<style scoped>
    .swiper-scrollbar{
        left: calc( 50% - 50px );
    }
</style>