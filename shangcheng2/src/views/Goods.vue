<template>
  <div class="goods">
    <div class="wrap">
      <Crumb> </Crumb>
      <img src="../assets/img/banner.4c6b6225.png" width="100%" alt="" />
      <ul class="options">
        <li>
          <strong>排序：</strong>
          <span
            :class="num1 == index ? 'active' : ''"
            v-for="(item, index) in option1"
            :key="index"
            @click="option1Click(index, item.min, item.max)"
            >{{ item.txt }}</span
          >
        </li>
        <li>
          <strong>分类：</strong>
          <span
            v-for="(item, index) in option2"
            :key="index"
            :class="num2 == index ? 'active' : ''"
            @click="option2Click(index, item.type)"
            >{{ item.txt }}</span
          >
        </li>
      </ul>
      <List :arr="goodsListShow" :maxLength="2000" />
      <p style="text-align: center; margin-top: 10px">
        {{ !isReachBottom ? "正在加载... ..." : "没有数据了" }}
      </p>
    </div>
  </div>
</template>
<script>
import Crumb from "../components/Crumb.vue";
import List from "../components/home/List.vue";
import { SearchGoodsAPI } from "@/request/api.js";
import {
  getScrollTop,
  getClientHeight,
  getScrollHeight,
} from "@/utils/index.js";
export default {
  data() {
    return {
      //栏目 目前可提供的参数是 1->精品推荐 2-> 热门兑换 0->全部
      did: 0,
      //( 1->实体商品 2->虚拟商品 0->全部 )
      type: 0,
      //大于多少积分，最少是0
      min: 0,
      //少于多少积分，最多是10000，当传入0的时候，会直接返回所有商品，无视后台逻辑。
      max: 0,
      //商品关键词
      keyword: "",
      //商品列表信息
      goodsList: [],
      //真正用来展示的数组
      goodsListShow: [],
      //每页条数
      size: 8,
      //当前页数
      page: 1,
      //表示是不是正在加载
      isLoading: false,
      //分数范围排序数组项
      option1: [
        {
          txt: "全部",
          min: 0,
          max: 100000,
        },
        {
          txt: "我能兑换的",
          min: 0,
          max: 10000,
        },
        {
          txt: "0-500分",
          min: 0,
          max: 500,
        },
        {
          txt: "500-1000分",
          min: 500,
          max: 1000,
        },
        {
          txt: "1000-1500分",
          min: 1000,
          max: 1500,
        },
        {
          txt: "1500-2500分",
          min: 1500,
          max: 2500,
        },
        {
          txt: "2500-6500分",
          min: 2500,
          max: 6500,
        },
        {
          txt: "6500-10000分",
          min: 6500,
          max: 10000,
        },
        {
          txt: "10000分以上",
          min: 10000,
          max: 100000,
        },
      ],
      option2: [
        {
          txt: "全部",
          type: 0,
        },
        {
          txt: "实物礼品",
          type: 1,
        },
        {
          txt: "虚拟礼品",
          type: 2,
        },
      ],
      //num1表示第一个数组的当前样式标记
      num1: 0,
      num2: 0,
      //表示是不是真正没有数据了
      isReachBottom: false,
    };
  },
  components: {
    Crumb,
    List,
  },
  created() {
    //query后面写的是url中问好后面的单词
    this.keyword = this.$route.query.keyword || "";
    this.goodsSearch();
  },
  watch: {
    //这里面不用写this
    "$route.query.keyword": {
      handler(newVal, oldVal) {
        this.keyword = newVal || "";
        this.goodsSearch();
      },
    },
  },
  mounted() {
    //绑定监听事件
    window.addEventListener("scroll", this.scrollFn);
  },
  brforeDestroy() {
    //删除监听事件
    window.removeEventListener("scroll", this.scrollFn);
  },
  methods: {
    scrollFn() {
      //节流：利用一个变量，控制代码在一段时间内(setTimeout)，不会重复触发执行.
      //滚动的时候执行的代码
      // console.log("页面发生滚动");
      if (getClientHeight() + getScrollTop() >= getScrollHeight() - 20) {
        //加载更多,会频繁触发，需要节流
        console.log("来到底部了");
        if (this.goodsList.length <= this.goodsListShow.length) {
          this.isReachBottom = true;
          return;
        }
        if (this.isLoading == false) {
          //刚开始加载得时候，就改成真，为的是不让他继续触发加载
          this.isLoading = true;
          setTimeout(() => {
            this.page++;
            for (
              let i = this.size * (this.page - 1);
              i < this.size * this.page;
              i++
            ) {
              //针对于最后一页的写法没有8条数据的情况，加了一个判断
              this.goodsList[i]
                ? this.goodsListShow.push(this.goodsList[i])
                : "";
            }
            //加载完毕了，改成false，以便下次可以再次加载
            this.isLoading = false;
          }, 500);
        }
      }
    },
    option1Click(i, min, max) {
      //样式的处理
      this.num1 = i;
      //更新最小值和最大值
      this.min = min;
      this.max = max;
      //数据的请求
      this.goodsSearch();
    },
    option2Click(i, type) {
      //样式的处理
      this.num2 = i;
      //更新最小值和最大值
      this.type = type;
      //数据的请求
      this.goodsSearch();
    },
    async goodsSearch() {
      let res = await SearchGoodsAPI({
        did: this.did,
        type: this.type,
        min: this.min,
        max: this.max,
        keyword: this.keyword,
      });
      console.log(res.data);
      this.goodsList = res.data;
      this.goodsListShow = this.goodsList.filter((item, index) => {
        return index < 8;
      });
      //把这几个数据初始化
      this.page = 1;
      this.isReachBottom = false;
      if (this.goodsList.length <= this.goodsListShow.length) {
        this.isReachBottom = true;
      }
    },
  },
};
</script>

<style lang = "less" scoped>
@import "../assets/css/global.less";

.goods {
  padding-bottom: 50px;
  background: #efefef;
  padding-top: 20px;
  .options {
    padding-top: 20px;
    padding-bottom: 40px;
    li {
      margin-top: 20px;
      strong {
        color: #000;
        font-weight: bold;
      }
      span {
        margin-right: 20px;
        margin-left: 10px;
        cursor: pointer;
        color: #999;
        &.active {
          color: @base-color;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
