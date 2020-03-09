<template>
    <div class="Chat">
       <van-nav-bar
        left-text="返回"
        @click-left="onClickLeft"
    />
    <p>聊天界面</p> 
    </div>
</template>

<script>
    export default {
        name: "Chat",
        methods:{
            onClickLeft() {
                //this.$toast('返回');
                this.$router.go(-1)
            },
            onClickRight() {
                this.$router.go(1)
            }
        }
    }
</script>

<style scoped>
    .Chat {
        height: 100vh;

    }
    .Chat p{
        font-size: 20px
    }
</style>