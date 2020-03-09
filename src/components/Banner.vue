<template>
    <div class="banner">
        <!--轮播预览图-->
        <van-swipe
            :autoplay="3000"
        >
            <van-swipe-item
                v-for="(item,index) in banner"
                :key="index"
                @click="handlePreview(index)"
            >
                <img :src="item" alt="" width="100%" height="100%">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import { ImagePreview } from 'vant';
    export default {
        name: "Banner",
        data(){
            return {
                banner: [
                    '//t00img.yangkeduo.com/goods/images/2019-08-26/2919ffda0dc7a78dfa0a29409ff946a3.jpeg?imageMogr2/format/webp/quality/50',
                    '//t16img.yangkeduo.com/pdd_oms/2019-08-21/20476436a178dfcd09a68fa30a47cc5d.png?imageMogr2/format/webp/quality/50',
                    '//t00img.yangkeduo.com/goods/images/2019-07-17/165c0ab1ea21fd5dd183d3845cc4ae3d.png?imageMogr2/format/webp/quality/50',
                    '//t16img.yangkeduo.com/pdd_oms/2019-08-25/7052c94281d09d9ffde77e8c6b8d0b84.jpg?imageMogr2/format/webp/quality/50'
                ],
            }
        },
        methods:{
            handlePreview(index){
                ImagePreview({
                    images: this.banner,
                    startPosition: index,
                    onClose() {}
                });
            }
        },
    }
</script>

<style scoped>
    .banner{
        height: 280px;
        overflow: hidden;
    }
</style>