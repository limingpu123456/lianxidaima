<template>
  <div class="home">
    <div>
      <img src="@/assets/img/位图.jpg" class="weitu" />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="wrap">
      <Dividingline title="事项清单"></Dividingline>
      <el-button type="primary" plain v-for="(item, idx) in listbtn" :key="idx"
        >主要按钮</el-button
      >
      <ul class="list">
        <li
          class="list-text"
          v-for="(item, idx) in list"
          :key="idx"
          @click="$router.push('/detailpage')"
        >
          <span class="text">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Dividingline from "@/components/Dividingline";
export default {
  data() {
    return {
      listbtn: [
        "助企事项(4项)",
        "助才事项(1项)",
        "助学事项(2项)",
        "助教事项(0项)",
        "助老事项(0项)",
        "助残事项(0项)",
      ],
      list: [
        "市服务外包专项扶持项目配套资助类",
        "国家高新技术企业认定赞助类",
        "国家A级物流及市重点物流企业资助类",
        "版权示范单位(园区，基地)资助",
      ],
    };
  },
  name: "HomeView",
  components: {
    Dividingline,
  },
};
</script>

<style lang = "less"  scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  .list-text {
    width: 380px;
    height: 70px;
    background: #f1f2f3;
    margin-right: 30px;
    margin-bottom: 20px;
  }
  .list-text:nth-of-type(3n) {
    margin-right: 0;
  }
}
.weitu {
  margin: 0;
  padding: 0;
}
</style>
