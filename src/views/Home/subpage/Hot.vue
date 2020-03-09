<template>
    <div class="Hot">




        <!--热门商品列表-->
        <div class="hotList">
            <van-card
                v-for="item in 5"
                tag="hot"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                origin-price="10.00"
        />
        </div>
    </div>
</template>

<script>

    export default {
        name: "Hot",
        data(){
            return {

            }
        },

    }
</script>

<style scoped lang="scss">
    .Hot{

        .van-card__content{
            justify-content: space-around;
        }
        .van-card:not(:first-child) {
            margin-top: 1px !important;
        }
    }
</style>