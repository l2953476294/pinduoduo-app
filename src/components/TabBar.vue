<template>
    <van-tabbar
        v-model="active"
        @change="handleSwitchTo"
    >
        <van-tabbar-item
            v-for="item in Tabbar"
            :key="item.id"
            :icon="item.icon"
            :name="item.linkTo"

        >
            {{item.name}}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: "TabBar",
        methods: {
            handleSwitchTo(){
                //console.log(this.active)
                return this.$router.push(this.active)
            }
        },
        data(){
            return {
                active: 'home',
                ele: '',
                Tabbar:[
                    {id:1,name:'首页',icon:'wap-home',linkTo:'home'},
                    {id:2,name:'推荐',icon:'hot-o',linkTo:'recomend'},
                    {id:3,name:'购物车',icon:'shopping-cart-o',linkTo:'cart'},
                    {id:4,name:'聊天',icon:'chat-o',linkTo:'chat'},
                    {id:5,name:'个人中心',icon:'user-circle-o',linkTo:'user'}
                ]
            }
        },
        mounted(){
            this.ele = document.querySelectorAll('.van-tabbar-item')
        },
        watch: {
            $route(to,from){
                this.ac

                const path = to.path.includes('home')
                if ( path ) this.active = 'home'
                else {
                    this.ele.forEach((item)=>{
                        item.classList.remove('van-tabbar-item--active')
                    })
                }
            }
        }
    }

</script>

<style scoped>

</style>