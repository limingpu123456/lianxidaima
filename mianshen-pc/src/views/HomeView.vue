<template>
  <div class="home">
    <Tab></Tab>
    <div class="weitu">
      <span class="weitutitle">{{ weitutitle }}</span>
      <p class="weitutext">
        {{ weitutext }}
      </p>
    </div>
    <div class="wrap">
      <Dividingline title="事项清单" class="divide"></Dividingline>

      <el-button
        type="primary"
        plain
        v-for="(item, btnidx) in listbtn"
        :key="btnidx"
        @click="changeitem1(btnidx)"
      >
        <span>{{ item }}</span>
      </el-button>
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
  </div>
</template>

<script>
import Dividingline from "@/components/Dividingline";
import Tab from "@/components/Tab";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      listbtn: [
        `助企事项(4项)`,
        "助才事项(1项)",
        "助学事项(2项)",
        "助教事项(0项)",
        "助老事项(0项)",
        "助残事项(0项)",
      ],
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
      weitutitle: "免审即享事项清单",
      weitutext:
        "梳理龙华区免申即享事项清单，根据所属服务类型的不同进行分类。实现免申事项查询，全程网办、共享“互联网+政务服务”发展成果。",
      btnnum: 0,
      btnnum1: 0,
    };
  },
  components: {
    Dividingline,
    Tab,
  },
  methods: {
    changeitem: function (it) {
      this.btnnum = it;
    },
    listtitlefn: function (it) {
      this.chanListtitle(it);
      if (it == "市服务外包专项扶持项目配套资助类") {
        this.$router.push("/detailpage");
      }
    },
    changeitem1: function (idx) {
      this.btnnum1 = idx;
    },
    ...mapMutations({
      chanListtitle: "list/chanListtitle",
    }),
  },
};
</script>

<style lang = "less"  scoped>
.weitu {
  height: 197px;
  background: url("../assets/img/位图.jpg");
  position: relative;
  overflow-x: hidden;
  .weitutitle {
    position: absolute;
    left: 167px;
    top: 54px;
    font-family: PingFangSC-Semibold;
    font-size: 30px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 600;
  }
  .weitutext {
    position: absolute;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 25px;
    font-weight: 400;
    width: 660px;
    left: 167px;
    top: 101px;
  }
}
.divide {
  margin-top: 33px;
}
::v-deep .el-button {
  font-size: 0;
  background: #ebf4fb;
  border-radius: 4px;
  border: none;
  width: 132px;
  height: 32px;
  margin-right: 10px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: PingFangSC-Regular;
    font-size: 14px;
    letter-spacing: 0;
    font-weight: 400;
  }
}
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
