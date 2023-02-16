<!--  -->
<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="综合" disabled />
      <van-dropdown-item
        v-model="priceVal"
        :options="option2"
        title="价格"
        @change="priceChange"
      />
      <van-dropdown-item
        v-model="categoryVal"
        :options="filterCategory"
        title="分类"
        @change="categoryChange"
      />
    </van-dropdown-menu>
    <van-empty
      image="search"
      description="没找到商品"
      v-if="goodsList.length === 0"
    />
    <Products :goodsList="goodsList" v-else></Products>
  </div>
</template>

<script>
import Products from "./Products";
export default {
  data() {
    return {
      priceVal: "",
      categoryVal: 1,
      option2: [
        { text: "价格由高到低", value: "desc" },
        { text: "价格由低到高", value: "asc" },
      ],
    };
  },
  components: {
    Products,
  },
  props: {
    filterCategory: [],
    goodsList: [],
  },
  beforeUpdate() {
    //数据挂载完毕，遍历filterCatrgory数组，看看哪一项的checked为true,遍历的时候，遇到checked：true时，就把this.categoryVal = 它的value值，这一项就被勾上了
    this.filterCategory.map((item) => {
      if (item.checked) {
        this.categoryVal = item.value;
        return;
      }
    });
  },
  methods: {
    categoryChange(value) {
      //value就是分类id
      this.$emit("categoryChange", value);
    },
    priceChange(value) {
      // console.log(value);
      this.$emit("priceChange", value);
    },
  },
};
</script>

<style lang = "less"  scoped>
</style>
