<template>
    <div class="goodsList">
        <NavBarPublic v-if="shotNavBar"/>
        <ul v-if="list.length">
            <li v-for="item in list" :key="item.goods_id" @click="goGoodsInfo(item.goods_id)">
                <div class="pic">
                    <img  v-lazy="item.thumb_url" width="100%" height="100%" alt="">
                </div>
                <p class="title" v-text="item.short_name"></p>
                <div class="info">
                    <p>
                        <span class="symbol">￥</span>
                        <span class="price" v-text="item.normal_price"></span>
                    </p>
                    <span class="pay">点击购买</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data(){
            return {
                img: '',
                list: []
            }
        },
        props: ['keyword'],
        computed: {
            shotNavBar(){
                const path = this.$route.path.includes('home')
                if ( path ) return false
                return true
            }
        },
        methods: {
            getList(keyword,page){
                this.Axios.get('http://pddapi.h5sm.com/index/index/getgoodssearch?keyword='+keyword+'&page='+page)
                    .then(res=>{
                        //console.log(res)
                        this.list = res.data.data
                    })
            },
            goGoodsInfo(itemid){
                this.$router.push({
                    name: 'goodsBuy',
                    query: {
                        itemid
                    }
                })
            },

        },
        created() {
            const keyword = this.$route.query.keyword || this.keyword || '笔记本电脑'
            this.getList(keyword,1)
        }
    }
</script>

<style scoped lang="scss">
    .goodsList{
        position: relative;

        ul{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li{
                width: 372px;
                height: 500px;

                .pic{
                    height: 370px;
                }
                .title{
                    height: 54px;
                    line-height: 54px;
                    padding: 0 15px;
                    color: #151516;
                    font-size: 25px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .info{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: orangered;
                    line-height: 50px;
                    padding: 0 15px;
                    .symbol{
                        font-size: 12px;
                    }
                    .price{
                        font-size: 28px;
                        font-weight: bold;
                    }
                    .pay{
                        font-size: 24px;
                        line-height: 50px;
                    }
                }
            }
        }
    }
</style>