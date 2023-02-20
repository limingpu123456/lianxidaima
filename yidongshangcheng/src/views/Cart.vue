<!--  -->
<template>
  <div class="body">
    <Tips></Tips>
    <van-checkbox-group v-model="result">
      <van-checkbox
        :name="item.id"
        v-for="item in cartList"
        :key="item.id"
        @click="changeChecked(item)"
      >
        <van-card
          :num="item.number"
          :price="item.retail_price"
          :title="item.goods_name"
          :thumb="item.list_pic_url"
        />
        <van-stepper v-model="item.number" v-show="isEditing" />
      </van-checkbox>
    </van-checkbox-group>

    <van-submit-bar
      :price="cartTotal.checkedGoodsAmount * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checkedAll">全选</van-checkbox>
      <template #tip>
        累计共<span>{{ cartTotal.checkedGoodsCount }}</span
        >件商品，可点击
        <van-button type="primary" size="small">编辑</van-button>
        按钮进行商品数量修改
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import Tips from "@/components/Tips.vue";
import { GetCartListData, ChangeGoodChecked } from "@/request/api";
export default {
  data() {
    return {
      //全选的控制
      // checkedAll: false,
      //是一个展示选中的元素的数组
      //哪一个商品的额checked的值未1，就可以把它的id添加到这个数组
      result: [],
      checked: false,
      //购物车列表数据
      cartList: [],
      //商品总信息
      cartTotal: [],
      //编辑状态的设置
      isEditing: false,
    };
  },
  components: {
    Tips,
  },
  created() {
    GetCartListData().then((res) => {
      if (res.data.errno == 0) {
        console.log(res.data);
        this.totalFn(res);
      }
    });
  },
  methods: {
    totalFn(res) {
      this.cartList = res.data.data.cartList;
      this.cartTotal = res.data.data.cartTotal;
      //清空是为了后面的操作不会使这个数组越来越长
      this.result = [];
      this.cartList.map((item) => {
        item.checked == 1 ? this.result.push(item.id) : "";
      });
    },
    onClickEditAddress() {},
    onSubmit() {},
    changeChecked(item) {
      //这个发送的是什么请求：
      //这个请求告诉后端改变了哪些值，后端接受到之后，返回给我们一个处理过后的页面数据
      ChangeGoodChecked({
        isChecked: item.checked == 0 ? 1 : 0,
        productIds: item.product_id,
      }).then((res) => {
        if (res.data.errno == 0) {
          console.log(res.data);
          this.totalFn(res);
        }
      });
    },
  },
  //一个结果，受其他属性的影响：computed
  computed: {
    checkedAll: {
      get() {
        if (this.cartList.length == this.result.length) {
          return true;
        } else {
          return false;
        }
      },
      set(val) {
        let ids_arr = [];
        this.cartList.map((item) => {
          ids_arr.push(item.product_id);
        });
        //val是即将要修改的新的值
        ChangeGoodChecked({
          isChecked: val ? 1 : 0,
          productIds: ids_arr.join(","),
        }).then((res) => {
          if (res.data.errno == 0) {
            console.log(res.data);
            this.totalFn(res);
          }
        });
      },
    },
  },
};
</script>

<style lang = "less"  scoped>
::v-deep .van-checkbox__label {
  flex: 1;
}
::v-deep .van-checkbox-group {
  background: #fff;
  padding-bottom: 1.5rem;
  .van-checkbox {
    padding: 0.1rem 0.15rem;
    border-bottom: 1px solid #ccc;
  }
}
.van-submit-bar {
  bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
}
.van-stepper {
  text-align: right;
}
</style>
