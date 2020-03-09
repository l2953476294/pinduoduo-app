<template>
    <div class="GoodsBuy">
        <NavBarPublic keyword="商品详情"/>
        <div class="pic">
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

        <div class="info">
            <p class="price-group">
                <span>￥</span>
                <span v-text="price.minGroupPrice"></span>
            </p>
            <p class="title" v-text="price.goodsName"></p>
            <van-divider />
            <p class="sms">
                <span> 退货包运费 ·</span>
                <span> 极速退款 ·</span>
                <span> 全场包邮 ·</span>
                <span> 7天退换 ·</span>
            </p>

            <div class="goodadd">
                <span class="text">购买数量</span>
                <p>
                    <van-button type="default" @click="reduceGoods">
                        -
                    </van-button>
                    <van-button type="default">{{num}}</van-button>
                    <van-button type="default" @click="addGoods">
                        +
                    </van-button>
                </p>
            </div>
            <van-goods-action>
                <van-goods-action-icon
                    icon="home-o"
                    text="主页"
                    @click="handleToIndex"
                />
                <van-goods-action-button
                    type="warning"
                    text="加入购物车"
                    @click="handleAddToCart"
                />
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="handleToCart"
                />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import { ImagePreview } from 'vant';
    export default {
        name: "GoodsBuy",
        data(){
            return {
                item:{},
                seller:{},
                price: {},
                banner: [],
                num:0,
                id:0
            }
        },
        created() {

        },
        activated(){
            this.num = 0
            this.id = 0
            const itemid = this.$route.query.itemid
            this.getInfo(itemid)
        },
        methods: {
            getInfo(itemid){
                this.id = itemid
                this.Axios.get('http://pddapi.h5sm.com/index/index/getgoodsinfo?itemid='+itemid)
                    .then(res=>{

                        //console.log(res.data.data)
                        const item = res.data.data.item
                        //const seller = res.data.data.seller
                        //console.log(item)
                        this.item = item
                        //this.seller = seller
                        this.banner = item.banner
                        this.price = {
                            goodsName: item.goodsName,
                            goodsId: item.goodsId,
                            minGroupPrice: item.minGroupPrice,
                            salesTip: item.salesTip
                        }
                    })
            },
            handlePreview(index){
                ImagePreview({
                    images: this.banner,
                    startPosition: index,
                    onClose() {}
                });
            },
            handleToIndex() {
                this.$router.push('/home')
            },
            ...mapMutations(['AddToCart']),
            handleToCart() {
                this.$router.push({
                    name: 'cart'
                })
            },
            handleAddToCart(){
                const {num,id} = this
                num && this.AddToCart({
                    id,num
                })
            },
            reduceGoods(){
                let num = this.num
                num = num?num-1:num
                this.num = num
            },
            addGoods(){
                let num = this.num
                num++
                this.num = num
            },
        },

    }
</script>

<style scoped lang="scss">
    .GoodsBuy{

        .pic{
            width: 750px;
            height: 750px;
        }
        .info{
            padding: 0 20px;
        }
        .price-group{
            color: #e02e24;
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 25px;
            span:last-child{
                font-size: 45px;
            }
            u{
                font-weight: normal;
                text-decoration: line-through;
            }
        }
        .title{
            font-size: 30px;
            font-weight: 700;
        }
        .sms{
            color: #58595b;
            font-size: 28px;

        }
        .goodadd{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                font-size: 30px;
            }
        }
        .van-goods-action{
            /*position: relative;*/
        }
    }
</style>