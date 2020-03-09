let shopTools = {}

let shop = JSON.parse(window.localStorage.getItem('shopInfo') || '{}')

// 更新并存储商品
// {id:123,num:5}
shopTools.addUpdate = function (goods) {
    if (shop[goods.id]) {
        shop[goods.id] += goods.num
    } else {
        shop[goods.id] = goods.num
    }
    this.saveShops()
}

shopTools.delete = function(id){
    delete shop[id]
    this.saveShops()
}

shopTools.getShop = function(){
    return JSON.parse(window.localStorage.getItem('shopInfo') || '{}')
}


shopTools.saveShops = function () {
    window.localStorage.setItem('shopInfo',JSON.stringify(shop))
}

export default shopTools