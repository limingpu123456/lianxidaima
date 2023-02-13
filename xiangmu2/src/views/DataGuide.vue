<!--  -->
<template>
  <div id="container">
    <div class="wrap">
      <div class="choose1">
        <span class="span1">请选择贵企业信息项</span>
        <span class="span2">(可多选)</span>
        <div class="sep"></div>
      </div>
      <ul class="list">
        <li
          class="list-text"
          v-for="(item, idx) in listbtn"
          :key="idx"
          @click="choose(idx)"
          :class="item.select ? 'active' : ''"
        >
          <span class="text">{{ item.name }}</span>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <td class="leibie"><span>类别</span></td>
            <td class="xinxi"><span>信息项名称</span></td>
            <td class="caozuo"><span>操作</span></td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, key) in searchResult1"
            :key="key"
            v-show="isShow2(0)"
          >
            <td :rowspan="num1" v-if="isShow(key)">
              <div class="div1">
                {{ item.leibie }}
              </div>
              <div class="div2">
                {{ item.leibie1 }}
              </div>
            </td>
            <td>
              <span>
                {{ item.name }}
              </span>
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>

          <tr
            v-for="(item, key) in searchResult2"
            :key="key"
            v-show="isShow2(1)"
          >
            <td :rowspan="num2" v-if="isShow(key)">
              <div class="div1">
                {{ item.leibie }}
              </div>
              <div class="div2">
                {{ item.leibie1 }}
              </div>
            </td>
            <td>
              <span>
                {{ item.name }}
              </span>
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>

          <!-- <tr>
            <td rowspan="7">
              <div class="div1">{{ info[0].leibie }}</div>
              <div class="div2">{{ info[0].leibie1 }}</div>
            </td>
            <td>
              <span>{{ info[0].name }}</span>
            </td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>
              <span>{{ info[1].name }} </span>
            </td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>
              <span>{{ info[2].name }}</span>
            </td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>
              <span>{{ info[3].name }} </span>
            </td>
            <td><input type="checkbox" checked="checked" /></td>
          </tr>
          <tr>
            <td>
              <span>{{ info[4].name }} </span>
            </td>
            <td><input type="checkbox" checked="checked" /></td>
          </tr>
          <tr>
            <td>
              <span>{{ info[5].name }}</span>
            </td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>
              <span>{{ info[6].name }}</span>
            </td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td rowspan="2">
              <div class="div3">{{ info[7].leibie }}</div>
              <div class="div4">{{ info[7].leibie1 }}</div>
            </td>
            <td>
              <span>{{ info[7].name }}</span>
            </td>
            <td><input type="checkbox" checked="checked" /></td>
          </tr>
          <tr>
            <td>
              <span>{{ info[8].name }}</span>
            </td>
            <td><input type="checkbox" /></td>
          </tr> -->
          <!-- <tr>
            <td><span>3、全国知识产权服务品牌培育机构</span></td>
            <td><input type="checkbox" checked="checked" /></td>
          </tr>
          <tr>
            <td><span>4、知识产权案件终审判决获得胜诉</span></td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>
              <span>
                5、承办国际标准化组织年会和学术讨论会及重大国际标准化学术活动</span
              >
            </td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td><span>6、国家贯标认证机构认证</span></td>
            <td><input type="checkbox" checked="checked" /></td>
          </tr>
          <tr>
            <td><span>7、中国专利奖、广东专利奖、深圳市专利奖</span></td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td><span>8、标准研制</span></td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td><span>9、采用国际标准和国外先进标准</span></td>
            <td><input type="checkbox" /></td>
          </tr> -->
        </tbody>
      </table>
      <div class="look" v-show="show()">
        <span class="span1">推荐清单数量：</span>
        <div>4</div>
        <span class="span2">项</span>
        <button class="button1"><span>重置</span></button>
        <button class="button2"><span>查看推荐清单</span></button>
      </div>
    </div>
    <div class="footer">
      <span>Copyright &copy;2021 深圳市龙华区 粤ICP备14025010号-11</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      info: [
        [
          {
            id: 1,
            leibie: "标准类",
            leibie1: "(7项)",
            name: "1、高新技术企业、龙华区四类百强企业",
          },
          {
            leibie: "标准类",
            leibie1: "(7项)",
            name: "2、国家文化出口重点企业目录”文化企业、“深圳文化企业100强”文化企业",
          },
          {
            leibie: "标准类",
            leibie1: "(7项)",
            name: "3、获得天使投资或早期投资",
          },
          {
            leibie: "标准类",
            leibie1: "(7项)",
            name: "4、规模以上企业 且（会计师事务所、律师事务所、审计师事务所、税务师事务所、管理咨询公司）",
          },
          {
            leibie: "标准类",
            leibie1: "(7项)",
            name: "5、境内外上市企业、高层次人才创业企业、高新技术企业、龙华区四类百强企业",
          },
          {
            leibie: "标准类",
            leibie1: "(7项)",
            name: "6、开展投资推广、产业交流等活动",
          },
          {
            leibie: "标准类",
            leibie1: "(7项)",
            name: "7、高新技术企业、技术先进型服务企业",
          },
        ],
        [
          {
            id: 1,
            leibie: "知识产权类类",
            leibie1: "(2项)",
            name: "1、国家版权示范园区(基地)、广东省版权兴业示范基地",
          },
          {
            leibie: "知识产权类类",
            leibie1: "(2项)",
            name: "2、知识产权服务机构、高端知识产权服务机构",
          },
        ],
      ],
      listbtn: [
        {
          id: 1,
          name: "标准类 (31)",
          select: false,
        },
        {
          id: 2,
          name: "知识产权类 (41)",
          select: true,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      text: (state) => state.search.text,
    }),
    searchResult1() {
      var newArr = null;
      if (this.text) {
        newArr = this.info[0].filter(
          (item) => item.name.indexOf(this.text) > -1
        );
        this.num1 = newArr.length;
        return newArr;
      } else {
        this.num1 = this.info[0].length;
        return this.info[0];
      }
    },
    searchResult2() {
      var newArr = null;
      if (this.text) {
        newArr = this.info[1].filter(
          (item) => item.name.indexOf(this.text) > -1
        );
        this.num2 = newArr.length;
        return newArr;
      } else {
        this.num2 = this.info[1].length;
        return this.info[1];
      }
    },
  },
  methods: {
    isShow(idx) {
      for (var i = 0; i < this.info.length; i++) {
        if (this.info[i][idx].id == 1) {
          return true;
        } else {
          return false;
        }
      }
    },
    choose(idx) {
      if (idx == 0) {
        this.listbtn[0].select = !this.listbtn[0].select;
      } else if (idx == 1) {
        this.listbtn[1].select = !this.listbtn[1].select;
      }
    },
    isShow2(idx) {
      if (this.listbtn[idx].select) {
        return true;
      } else {
        return false;
      }
    },
    show() {
      for (var i = 0; i < this.listbtn.length; i++) {
        if (this.listbtn[i].select) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style lang = "less"  scoped>
.choose1 {
  margin-top: 20px;
  border-bottom: 1px solid #ebebeb;
  .span1 {
    display: inline-block;
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #1c5da7;
    letter-spacing: 0;
    font-weight: 600;
    margin-top: 20px;
    padding-bottom: 12px;
    border-bottom: 4px solid #1c5da7;
  }
  .span2 {
    display: inline-block;
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #1c5da7;
    letter-spacing: 0;
    font-weight: 600;
    width: 90px;
    height: 25px;
    margin-left: 6px;
    line-height: 25px;
    text-align: center;
    padding-bottom: 15px;
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 16px;
  .list-text {
    width: 285px;
    height: 47px;
    background: #f1f2f3;
    margin-right: 20px;
    margin-bottom: 14px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &.active {
      background: #2f7dd6;
      border-radius: 2px;
      .text {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
        font-weight: 400;
      }
    }
  }
  .list-text:nth-of-type(4n) {
    margin-right: 0;
  }
  .text {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
}
table {
  width: 1200px;
  thead {
    tr {
      height: 54px;
      background: #f1f2f3;
      td {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 600;
        &.leibie {
          width: 160px;
          vertical-align: middle;
          span {
            display: line-block;
            margin-left: 53px;
          }
        }
        &.xinxi {
          width: 925px;
          vertical-align: middle;
          span {
            display: inline-block;
            margin-left: 20px;
          }
        }
        &.caozuo {
          vertical-align: middle;
          span {
            display: inline-block;
            margin-left: 23px;
          }
        }
      }
    }
  }
  tbody {
    tr {
      td {
        border: 1px solid rgba(235, 235, 235, 1);
        border-right: none;
        vertical-align: middle;
        height: 62px;
        &:last-child {
          border: none;
          border-top: 1px solid rgba(235, 235, 235, 1);
          border-bottom: 1px solid rgba(235, 235, 235, 1);
        }
        input {
          width: 25px;
          height: 25px;
          margin-top: 17px;
          margin-left: 30px;
        }
        .div1,
        .div3 {
          font-family: PingFangSC-Semibold;
          font-size: 16px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          font-weight: 600;
        }
        .div2,
        .div4 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #666666;
          letter-spacing: 0;
          text-align: center;
          font-weight: 400;
          margin-top: 8px;
        }
        span {
          display: block;
          margin-left: 20px;
        }
        input {
          cursor: pointer;
        }
      }
    }
  }
}
.look {
  margin-top: 20px;
  width: 1200px;
  height: 76px;
  background: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  .span1 {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
    display: block;
    margin-left: 20px;
    margin-top: 26.73px;
  }
  div {
    display: inline-block;
    line-height: 42px;
    font-size: 31px;
    overflow: hidden;
    color: #fd6161;
    margin-left: 10px;
    margin-top: 13.73px;
    width: 18px;
    height: 42px;
    margin-right: 4px;
  }
  .span2 {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #fd6161;
    letter-spacing: 0;
    font-weight: 400;
    display: block;
    margin-top: 26.73px;
  }
  .button1 {
    background: #ffffff;
    border: 1px solid rgba(47, 125, 214, 1);
    border-radius: 2px;
    margin-left: 712px;
    margin-top: 17px;
    margin-right: 10px;
    width: 139px;
    height: 42px;
    cursor: pointer;
    span {
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #2f7dd6;
      letter-spacing: 0;
      font-weight: 600;
    }
  }
  .button2 {
    width: 139px;
    height: 42px;
    background: #2f7dd6;
    border-radius: 2px;
    border: none;
    margin-top: 17px;
    cursor: pointer;
    span {
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      font-weight: 600;
    }
  }
}
html,
body {
  height: 100%;
}
#container {
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 60px;
  box-sizing: border-box;
  .footer {
    background-color: #113c6e;
    height: 58px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    span {
      display: block;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
      line-height: 58px;
      margin: 0 auto;
    }
  }
}
// .wrap {
//   padding-bottom: 320px;
// }
</style>
