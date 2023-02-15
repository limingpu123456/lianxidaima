<!--  -->
<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="综合" disabled />
      <van-dropdown-item v-model="value2" :options="option2" title="价格" />
      <van-dropdown-item
        v-model="categoryVal"
        :options="filterCategory"
        title="分类"
      />
    </van-dropdown-menu>
    <Products :goodsList="goodsList"></Products>
  </div>
</template>

<script>
import Products from "./Products";
export default {
  data() {
    return {
      value2: 0,
      categoryVal: 1,
      option2: [
        { text: "价格由高到低", value: "a" },
        { text: "价格由低到高", value: "b" },
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
};
</script>

<style lang = "less"  scoped>
</style>
