<!--  -->
<template>
  <div>
    <ul class="list">
      <li
        class="list-text"
        v-for="(item, idx) in list[btnnum1]"
        :key="idx"
        @click="listtitlefn(item)"
      >
        <span class="text">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      list: [
        [
          "市服务外包专项扶持项目配套资助类",
          "国家高新技术企业认定赞助类",
          "国家A级物流及市重点物流企业资助类",
          "版权示范单位(园区，基地)资助",
        ],
        ["市服务外包专项扶持项目配套资助"],
        ["市服务外包专项扶持项目配套资", "国家高新技术企业认定赞助类"],
        [],
        [],
        [],
      ],
    };
  },
  computed: {
    ...mapState({
      btnnum1: (state) => state.list.btnnum1,
    }),
  },
  methods: {
    ...mapMutations({
      chanListtitle: "list/chanListtitle",
    }),
    listtitlefn: function (it) {
      this.chanListtitle(it);
      if (it == "市服务外包专项扶持项目配套资助类") {
        this.$router.push("/detailpage");
      }
    },
  },
};
</script>

<style lang = "less"  scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  .list-text {
    width: 380px;
    height: 70px;
    background: #f1f2f3;
    margin-right: 30px;
    margin-bottom: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .list-text:nth-of-type(3n) {
    margin-right: 0;
  }
  .text {
    margin-left: 20px;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
  }
}
</style>
