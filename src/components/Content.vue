<template>
    <div id="content">
        <!--轮播图-->
        <Banner v-if="showBanner==0"/>
        <!--分类-->
        <Category :categoty="categoty"/>
        <!--商品列表-->
        <GoodsList :keyword="goodsList"/>
    </div>
</template>

<script>
    export default {
        name: "Content",
        props: ['showBanner','categoty','goodsList']
    }
</script>

<style scoped>

</style>