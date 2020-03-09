<template>
    <van-nav-bar
        :title="getkeyword"
        left-text="返回"
        left-arrow
        fixed
        :zIndex="99"
        @click-left="onClickLeft"
    />
</template>

<script>
    export default {
        name: "NavBarPublic",
        props: ['keyword'],
        computed: {
            getkeyword(){
                if (!this.keyword){
                    return '推荐'
                }
                return this.keyword
            }
        },
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

</style>