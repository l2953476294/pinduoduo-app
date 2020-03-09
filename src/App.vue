<template>
    <div id="app">
        <!--缓存 避免多次重复请求-->
        <keep-alive>
            <router-view/>
        </keep-alive>

    </div>
</template>

<script>

    export default {
        components: {
        }
    }
</script>

<style lang="scss">

</style>
