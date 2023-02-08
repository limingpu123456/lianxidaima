<!--  -->
<template>
  <div class="wrap">
    <div class="header">
      <div class="l">
        <img class="icon" src="@/assets/img/icon/首页/蓝色.png" />
        <div class="header-text">
          <span style="cursor: pointer" @click="$router.push('/shouye')"
            >免申首页</span
          >
          > 惠企清单 > 政策详情
        </div>
      </div>
      <div class="r">
        <button class="button" @click="$router.push('/home')">
          <span class="span">返回列表</span>
        </button>
      </div>
    </div>
    <div class="title">{{ listtitle }}</div>
    <div class="buttons">
      <button class="button1">
        <div class="dengluicon">
          <img src="@/assets/img/icon/登陆/白色.png" alt="" />
          <span class="span1">我要登陆</span>
        </div>
      </button>
      <button class="button2">
        <span class="span2">上一个项目</span>
      </button>
      <button class="button2">
        <span class="span2">下一个项目</span>
      </button>
    </div>
    <Dividingline title="资助信息"></Dividingline>
    <table>
      <tr>
        <td class="title col"><div>事项名称</div></td>
        <td class="text">
          <div class="box">国家A级物流及市重点物流企业资助类</div>
        </td>
      </tr>
      <tr>
        <td class="title col"><div>发布机构</div></td>
        <td class="text"><div class="box">深圳市龙华区科技创新局</div></td>
      </tr>
      <tr>
        <td class="title col"><div>资讯热线</div></td>
        <td class="text"><div class="box">0755-233332194</div></td>
      </tr>
      <tr>
        <td class="title col"><div>资助内容</div></td>
        <td class="text">
          <div class="box">
            对通过国家高新技术企业认定的,
            在龙华区未获得过认定奖励的给予30万元奖励，已获得过认定奖励的给予20万元奖励。
          </div>
        </td>
      </tr>
      <tr>
        <td class="tilethree col"><div>资格条件</div></td>
        <td class="text">
          <div class="three">
            （一）在龙华区依法注册，并办理税务登记的具有独立法人资格的企业；<br />（二）申请单位不存在龙华区财政专项资金相关管理文件规定的不予安排资助的情形；<br />（三）已通过国家高新技术企业认定，且在认定证书有效期内未获得过龙华区国家高新技术企业认定奖励。截至企业申报时，认定证书处于有效期内。
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Dividingline from "@/components/Dividingline.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tableData: [
        "国家A级物流及市重点物流企业资助类",
        "深圳市龙华区科技创新局",
        "0755-233332194",
        "对通过国家高新技术企业认定的, 在龙华区未获得过认定奖励的给予30万元奖励，已获得过认定奖励的给予20万元奖励。",
        "(一)在龙华区依法注册，并办理税务登记的具有独立法人资格的企业;(二)申请单位不存在龙华区财政专项资金相关管理文件规定的不予安排资助的情形;(三)已通过国家高新技术企业认定，且在认定证书有效期内未获得过龙华区国家高新技术企业认定奖励。截至企业申报时，认定证书处于有效期内。",
      ],
      tabletitle: ["事项名称", "发布机构", "资讯热线", "资助内容", "资格条件"],
    };
  },
  components: {
    Dividingline,
  },
  computed: {
    ...mapState({
      listtitle: (state) => state.list.listtitle,
    }),
  },
};
</script>

<style lang = "less"  scoped>
.header {
  display: flex;
  align-items: center;
  width: 1200px;
  height: 45px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(204, 204, 204, 0.08);
  margin-bottom: 30px;
  .l {
    display: flex;
    margin-top: 7px;
    margin-bottom: 22px;
    .icon {
      margin-right: 6px;
    }
    .header-text {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
  .r {
    .button {
      border: 1px solid rgba(204, 204, 204, 1);
      border-radius: 3px;
      width: 68px;
      height: 30px;
      text-align: center;
      cursor: pointer;
      background-color: #fff;
      margin-top: 0;
      margin-bottom: 15px;
    }
  }
}
.title {
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 600;
  margin-bottom: 20px;
}
.buttons {
  margin-bottom: 20px;
  button {
    width: 150px;
    height: 48px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
  }
  .button1 {
    background-color: #4394f4;
    .dengluicon {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-right: 6px;
      }
      .span1 {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
        font-weight: 600;
      }
    }
  }
  .button2 {
    background-color: #ebf4fb;
    .span2 {
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #4394f4;
      letter-spacing: 0;
      text-align: center;
      font-weight: 600;
    }
  }
}
table {
  background: #ffffff;
  border: 1px solid rgba(226, 226, 226, 1);
  tr,
  td {
    background: #ffffff;
    border: 1px solid rgba(226, 226, 226, 1);
    .col {
      background: #f2f2f2;
    }
  }
  td {
    word-break: break-all;
  }
  .title {
    width: 110px;
    height: 47px;
    line-height: 20px;
    vertical-align: middle;
  }
  .titlethree {
    width: 110px;
    height: 47px;
  }
  .text {
    width: 1091px;
    margin-left: 11.57px;
  }
  div {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
    margin-left: 9.57px;
  }
  .box {
    margin-left: 11.57px;
    line-height: 47px;
    vertical-align: middle;
  }
  .three {
    margin-left: 11.57px;
    margin-top: 13px;
    margin-bottom: 14px;
    line-height: 20px;
  }
}
</style>
