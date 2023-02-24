<!-- 搜索弹出框 -->
<template>
  <div class="search-popop">
    <van-search
      v-model="searchVal"
      show-action
      :placeholder="placeholderVal"
      @search="onSearch"
      @cancel="onCancel"
      @input="onInput"
    />
    <HistoryHot
      v-if="blockShow == 1"
      :historyListData="historyListData"
      :hotKeywordListData="hotKeywordListData"
      @tagClick="tagClick"
    ></HistoryHot>

    <SearchTipsList
      v-else-if="blockShow == 2"
      :searchTipsListData="searchTipsListData"
      @cellClick="cellClick"
    ></SearchTipsList>
    <SearchProducts
      v-else
      :filterCategory="filterCategory"
      :goodsList="goodsList"
      @categoryChange="categoryChange"
      @priceChange="priceChange"
    ></SearchProducts>
  </div>
</template>

<script>
import HistoryHot from "@/components/HistoryHot";
import SearchTipsList from "@/components/SearchTipsList";
import SearchProducts from "@/components/SearchProducts";
import {
  GetSearchPopupData,
  GetSearchTipsListData,
  GetGoodsListData,
} from "@/request/api";
export default {
  data() {
    return {
      //搜索的文字，也就是用户输入的文本
      searchVal: "",
      //占位符文本
      placeholderVal: "",
      //值可以为1，2，3
      //为1表示展示历史记录和热门搜索
      //为2表示展示搜索提示的列表
      //为3表示展示搜索的产品的内容
      blockShow: 1,
      //历史记录的列表数据
      historyListData: [],
      //热门搜索列表数据
      hotKeywordListData: [],
      //搜索提示实时提示的列表数据
      searchTipsListData: [],
      //搜索产品内容分类数据
      filterCategory: [],
      //搜索产品内容的列表数据
      goodsList: [],
      //价格排序：(由高到低或者由低到高)
      order: "",
      //分类id
      categoryId: 0,
      //默认的搜索方式，是id还是price
      sort: "id",
    };
  },
  created() {
    GetSearchPopupData().then((res) => {
      // console.log(res.data);
      this.placeholderVal = res.data.data.defaultKeyword.keyword;
      this.historyListData = res.data.data.historyKeywordList;
      this.hotKeywordListData = res.data.data.hotKeywordList;
    });
  },
  methods: {
    cellClick(val) {
      this.searchVal = val;
      this.onSearch(val);
    },
    tagClick(val) {
      this.searchVal = val;
      this.onSearch(val);
    },
    onSearch(val) {
      // console.log("onSearch" + val);
      this.blockShow = 3;
      GetGoodsListData({
        keyword: val,
        page: 1,
        size: 10,
        order: this.order,
        categoryId: this.categoryId,
        sort: this.sort,
      }).then((res) => {
        // console.log(res.data.data.goodsList);
        let newArr = JSON.parse(
          JSON.stringify(res.data.data.filterCategory)
            .replace(/name/g, "text")
            .replace(/id/g, "value")
        );
        // console.log(newArr);
        this.filterCategory = newArr;
        this.goodsList = res.data.data.goodsList;
      });
    },
    onCancel() {
      //返回上一级路由
      this.$router.go(-1);
      this.$store.commit("changeisShowPopupShadow", false);
    },
    onInput(val) {
      // console.log(val);
      //发送请求，获取实时搜索的文本提示的数据列表
      this.blockShow = 2;
      GetSearchTipsListData({ keyword: val }).then((res) => {
        console.log(res.data);
        this.searchTipsListData = res.data.data;
      });
    },
    categoryChange(value) {
      this.categoryId = value;
      //发送搜索商品的请求
      this.onSearch(this.searchVal);
    },
    priceChange(value) {
      this.order = value;
      this.sort = "price";
      this.onSearch(this.searchVal);
    },
  },
  components: {
    HistoryHot,
    SearchTipsList,
    SearchProducts,
  },
};
</script>

<style lang = "less"  scoped>
.search-popop {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #efefef;
  overflow: auto;
}
</style>
