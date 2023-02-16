<!--  -->
<template>
  <div>
    <div class="his-hot" v-show="isShowHistory">
      <div class="hd">
        <h4>历史记录</h4>
        <van-icon name="delete-o" @click="clearHistory" />
      </div>
      <div class="bd">
        <!--key值保证第一唯一，第二不改变-->
        <van-tag
          @click="tagClick(item)"
          plain
          type="default"
          v-for="(item, index) in historyListData"
          :key="index"
          >{{ item }}</van-tag
        >
      </div>
    </div>

    <div class="his-hot">
      <div class="hd">
        <h4>热门搜索</h4>
      </div>
      <div class="bd">
        <van-tag
          @click="tagClick(item.keyword)"
          plain
          type="default"
          v-for="(item, index) in hotKeywordListData"
          :key="index"
          :class="item.is_hot == 1 ? 'red' : ''"
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ClearHistory } from "@/request/api";
export default {
  data() {
    return {
      isShowHistory: true,
    };
  },
  props: {
    historyListData: [],
    hotKeywordListData: [],
  },
  methods: {
    tagClick(val) {
      this.$emit("tagClick", val);
    },
    clearHistory() {
      ClearHistory().then((res) => {
        this.$toast.success("删除成功");
        setTimeout(() => {
          this.isShowHistory = false;
        }, 1000);
      });
    },
  },
};
</script>

<style lang = "less"  scoped>
.his-hot {
  background-color: #fff;
  padding: 0.1rem;
  margin-bottom: 0.2rem;
  .hd {
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    h4 {
      font-size: 0.2rem;
    }
    margin-bottom: 0.05rem;
  }
  .van-tag {
    margin-right: 0.05rem;
    margin-bottom: 0.05rem;
    padding: 0.03rem;
  }
  .red {
    color: darkred;
  }
}
</style>
