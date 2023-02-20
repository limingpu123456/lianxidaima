<!-- 商品详情 -->
<template>
  <div class="body">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in gallery" :key="item.id">
        <img :src="item.img_url" alt="" width="100%" style="display: block" />
      </van-swipe-item>
    </van-swipe>
    <Tips></Tips>
    <div class="info">
      <div class="title">{{ info.name }}</div>
      <div class="goods_brief">{{ info.goods_brief }}</div>
      <div class="retail_price">{{ info.retail_price | RMBformat }}</div>
    </div>
    <van-cell title="展示弹出层" is-link @click="isSkushow = true" />
    <div class="attribute">
      <h3>商品参数</h3>
      <ul>
        <li v-for="(item, key) in attribute" :key="key">
          <div class="l">{{ item.name }}</div>
          <div class="r van-ellipsis">{{ item.value }}</div>
        </li>
      </ul>
    </div>
    <div v-html="goods_desc" class="goods_desc"></div>
    <Products :goodsList="goodslist"></Products>
    <van-sku
      v-model="isSkushow"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      ref="sku"
    />
    <AppGoodActive
      @goToCart="goToCart"
      :goodsCount="goodsCount"
    ></AppGoodActive>
  </div>
</template>

<script>
import {
  GetGoodsDetailData,
  GetGoodsRelatedtData,
  GetGoodsCount,
  AddProductToCart,
} from "@/request/api";
import Tips from "@/components/Tips";
import Products from "@/components/Products";
import AppGoodActive from "@/components/AppGoodActive";
export default {
  data() {
    return {
      isSkushow: false,
      sku: {
        tree: [],
        hide_stock: false,
        stock_num: 0,
        price: "0",
      },
      goods: {
        picture: "",
      },
      //轮播图
      gallery: [],
      //商品信息
      info: {},
      //商品参数
      attribute: [],
      //商品信息(大量图片信息)
      goods_desc: "",
      //相关产品列表
      goodslist: [],
      //购物车产品数量
      goodsCount: 0,
      //productList数据
      productList: [],
    };
  },
  components: {
    Tips,
    AppGoodActive,
    Products,
  },
  created() {
    //请求这个产品的详情数据
    GetGoodsDetailData({
      id: this.$route.query.id,
    }).then((res) => {
      // console.log(res.data);
      this.gallery = res.data.data.gallery;
      this.info = res.data.data.info;
      this.attribute = res.data.data.attribute;
      this.goods_desc = res.data.data.info.goods_desc;
      this.goods.picture = res.data.data.info.list_pic_url;
      this.sku.price = res.data.data.info.retail_price;
      this.sku.stock_num = res.data.data.info.goods_number;
      //productList数据
      this.productList = res.data.data.productList;
    });

    //发送请求获取相关产品数据
    GetGoodsRelatedtData({
      id: this.$route.query.id,
    }).then((res) => {
      // console.log(res.data.data);
      this.goodslist = res.data.data.goodsList;
    });

    //获取购物车产品数量
    GetGoodsCount().then((res) => {
      if (res.data.errno == 0) {
        // console.log(res.data);
        this.GetGoodsCount = res.data.data.cartTotal.goodsCount;
      }
    });
  },
  methods: {
    goToCart() {
      //如果sku没有展示的情况下，点击购物车按钮，展示sku；如果sku已经展示了，点击购物车按钮，跳转到购物车里面
      if (this.isSkushow) {
        //加入购物车
        // console.log("执行加入购物车的操作");
        //获取要添加的商品的数量
        // console.log(this.$refs.sku.getSkuData().selectedNum);
        //发起加入购物车请求
        AddProductToCart({
          goodsId: this.$route.query.id,
          productId: this.productList[0].id,
          number: this.$refs.sku.getSkuData().selectedNum,
        }).then((res) => {
          if (res.data.errno == 0) {
            console.log(res.data);
            //1.添加到购物车后，更新购物车数量
            this.goodsCount = res.data.data.cartTotal.goodsCount;
            //跳转到购物车页面
            this.$toast.success("加入购物车成功");
            setTimeout(() => {
              this.$router.push("/cart");
            }, 1500);
          }
        });
      } else {
        this.isSkushow = true;
      }
    },
  },
};
</script>

<style lang = "less"  scoped>
.body {
  background-color: #efefef;
}
.info {
  background-color: #fff;
  text-align: center;
  line-height: 0.4rem;
  padding: 0.1rem 0;
  border-bottom: 1px solid #ccc;
  .title {
    font-size: 0.2rem;
  }
  .retail_price {
    color: darkred;
  }
}
.attribute {
  background-color: #fff;
  margin-top: 0.2rem;
  padding: 0.1rem 0.168rem;
  h3 {
    font-size: 0.1638rem;
    line-height: 0.5rem;
  }
  li {
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #efefef;
    display: flex;
    margin: 0.1rem;
    border-radius: 0.05rem;
    //37分
    .l {
      width: 30%;
      text-align: right;
      margin-right: 0.1rem;
      font-size: 0.12rem;
    }
    .r {
      flex: 1;
      font-size: 0.168rem;
    }
  }
}
::v-deep .goods_desc {
  img {
    display: block;
    width: 100%;
  }
}
</style>
