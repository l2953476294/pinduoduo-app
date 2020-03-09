<template>
    <div class="Home">
        <!--标签页-->
        <van-tabs
            animated
            sticky
            swipeable
            lazy-render
            @change="handleSwipeable"
        >
            <van-tab
                v-for="(item,index) in tagsBar"
                :title="item.optName"
                :key="item.optID"
            >
                <Content
                    :showBanner="index"
                    :categoty="item.opts"
                    :goodsList="item.optName"
                />
            </van-tab>
        </van-tabs>
        <TabBar />
    </div>
</template>

<script>
    import TabBar from '@/components/TabBar'
    export default {
        name: "Home",
        components: {
            TabBar
        },
        data(){
            return {
                tagsBar:[]
            }
        },
        created(){
              this.Axios.get('http://pddapi.h5sm.com/index/index/getgoodscategory')
                  .then(res=>{
                      //console.log(res)
                      this.tagsBar = res.data.data
                  })
        },
        methods:{
            handleSwipeable(linkTo,title){
                // this.$router.push({
                //     name: linkTo
                // })
            }
        }
    }
</script>

<style scoped>
.Home{
    height: 100vh;
}
</style>