<!--  -->
<template>
  <div>
    <div class="header">
      <div class="headerleft">政策直达指南针 •</div>
      <div class="headerright">汇集最新最全惠企政策</div>
    </div>
    <div class="nav">
      <ul>
        <li><span>政策汇编</span></li>
        <li class="active"><span>政策匹配器</span></li>
        <li><span>企业培育库</span></li>
        <li><span>项目申报</span></li>
        <li><span>文件公示</span></li>
        <li><span>政策礼包</span></li>
        <li><span>国高自评</span></li>
      </ul>
    </div>
    <div class="wrap">
      <div class="pipei">匹配结果</div>
      <div class="hengxian"></div>
      <div class="tongguo">
        <img class="img1" src="@/assets/img/分析完成对号/状态/默认.png" />
        <div class="top">*匹配与精算结果为评估数据，最终以实际核算为准！</div>
        <div class="bottomleft">资料越完整，匹配越精准，</div>
        <div class="middleleft">分析完成！</div>
        <div class="middlemiddle">符合您企业申报的项目</div>
        <span class="num1">6</span>
        <div class="danwei1">个，</div>
        <div class="middleright">预计最多可获得奖励金额</div>
        <span class="num2">632</span>
        <div class="danwei2">万元！</div>
        <div class="bottommiddle">立即完善企业信息</div>
        <div class="bottomright">（已完善</div>
        <div class="bottomright2">38%</div>
        <div class="bottomright3">）</div>
        <img class="yinzhang" src="@/assets/img/印章 (1).png" />
        <button><span>全部奖励</span></button>
      </div>
      <!--第一个表格-->
      <div class="top1">
        <div class="choose choose11" @click="showquanbu">
          <div :class="quanbu ? 'choosetrue' : ''"></div>
        </div>
        <div class="text text1">全部</div>
        <div class="choose choose12" @click="showshenbaozhong">
          <div :class="shenbaozhong ? 'choosetrue' : ''"></div>
        </div>
        <div class="text text2">申报中</div>
        <div class="choose choose13" @click="showweikaiqi">
          <div :class="weikaiqi ? 'choosetrue' : ''"></div>
        </div>
        <div class="text text3">未开启</div>
        <div class="text text4">共计{{ len }}条</div>
      </div>
      <div class="body1">
        <ul>
          <li v-for="(item, key) in list1" :key="key" v-show="fn(item)">
            <div :class="item.over ? 'num2' : 'num1'" v-if="!item.over">
              剩8天
            </div>
            <div :class="item.over ? 'num2' : 'num1'" v-if="item.over">
              已完成
            </div>
            <div class="name">{{ item.name }}</div>
            <div class="leftbottom">
              <img
                class="img1"
                src="@/assets/img/事项展示icon/状态/部门.png"
                alt=""
              />
              <div class="text1">区工业和信息化局</div>
              <img
                class="img2"
                src="@/assets/img/事项展示icon/状态/时间.png"
                alt=""
              />
              <div class="text2">申报时间：2022-08-30 至 2022-09-15</div>
            </div>
            <div class="middle">
              <div class="num">{{ item.money }}</div>
              <div class="div1">万元</div>
              <div class="div2">预估扶持金额</div>
            </div>
            <div class="sep"></div>
            <div class="right">
              <div class="div1">扶持金额</div>
              <div class="num">{{ item.money2 }}</div>
              <div class="div2">万元</div>
              <button>
                <span>扶持测算</span>
              </button>
            </div>
            <img src="@/assets/img/路径.png" alt="" />
          </li>
        </ul>
      </div>
      <!--第二个表格-->
      <div class="top2"></div>
      <div class="body2">
        <ul>
          <li v-for="(item, key) in list2" :key="key" v-show="fn2(item, key)">
            <div class="num1">剩8天</div>
            <div class="name">{{ item.name }}</div>
            <div class="leftbottom">
              <img
                class="img1"
                src="@/assets/img/事项展示icon/状态/部门.png"
                alt=""
              />
              <div class="text1">区工业和信息化局</div>
              <img
                class="img2"
                src="@/assets/img/事项展示icon/状态/时间.png"
                alt=""
              />
              <div class="text2">申报时间：2022-08-30 至 2022-09-15</div>
            </div>
            <div class="middle">
              <div class="lefttop">
                <div class="num">{{ item.num }}</div>
                <div class="text">项</div>
              </div>
              <div class="leftbottom">
                <div class="text">不匹配项数量</div>
                <img src="@/assets/img/按钮-箭头向右_o.png" alt="" />
              </div>
              <div class="right">
                <div class="text">查</div>
                <div class="bottom">
                  <div class="text">看原因</div>
                </div>
              </div>
            </div>
            <div class="sep"></div>
            <div class="right">
              <div class="div1">扶持金额</div>
              <div class="num">100-500</div>
              <div class="div2">万元</div>
              <button>
                <span>扶持测算</span>
              </button>
            </div>
            <img src="@/assets/img/路径.png" alt="" />
          </li>
        </ul>
        <div class="zhankai" @click="showzhankai()" v-show="zhanshiquanbushow">
          <span>显示全部</span>
          <img src="@/assets/img/更多箭头/状态/下.png" alt="" />
        </div>
      </div>
    </div>
    <div class="box">
      <div class="item1">
        <img src="@/assets/img/侧边了icon/用途/提交诉求.png" alt="" />
        <div class="div1">提交诉求</div>
      </div>
      <div class="item2" @click="erweima">
        <img src="@/assets/img/侧边了icon/用途/二维码.png" alt="" />
        <div class="div1">惠企e家</div>
        <div class="div2">小程序</div>
      </div>
      <a href="#top">
        <div class="item3">
          <img src="@/assets/img/侧边了icon/用途/顶部.png" alt="" />
          <div class="div1">返回顶部</div>
        </div>
      </a>
      <img
        class="erweima"
        src="@/assets/img/二维码.png"
        alt=""
        v-show="erweimashow"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      erweimashow: false,
      quanbu: true,
      shenbaozhong: false,
      weikaiqi: false,
      zhanshiquanbushow: true,
      len: 0,
      list1: [
        {
          over: false,
          name: "青岛胶州市促进旅游业发展奖励",
          money: 200,
          money2: "100-500",
        },
        {
          over: true,
          name: "胶州市支持中小微企业复工复产贷款贴息",
          money: 100,
          money2: "100-500",
        },
        {
          over: false,
          name: "农业发展奖补资金专项",
          money: 50,
          money2: "50-500",
        },
        {
          over: false,
          name: "2022年度青岛市制造业中小企业“隐形冠军”企业认定",
          money: 200,
          money2: "100-500",
        },
        {
          over: true,
          name: "国家级博士后科研工作站新设站申报",
          money: 400,
          money2: "100-500",
        },
        {
          over: false,
          name: "2022年青岛市科技成果转化专项技术合同服务补助资金",
          money: 200,
          money2: "100-500",
        },
      ],
      list2: [
        {
          name: "关于申报2022、2023年度胶州市文化发展专项资金",
          num: 3,
          show: true,
        },
        {
          name: "2022年青岛市科技成果转化专项技术合同服务补助资金",
          num: 4,
          show: true,
        },
        {
          name: "胶州市2022年新能源汽车推广应用奖励资金",
          num: 5,
          show: true,
        },
        {
          name: "关于申报2022、2023年度胶州市文化发展专项资金",
          num: 8,
          show: true,
        },
        {
          name: "2022年度青岛市制造业中小企业“隐形冠军”企业认定",
          num: 7,
          show: false,
        },
        {
          name: "2022年青岛市科技成果转化专项技术合同服务补助资金",
          num: 6,
          show: false,
        },
        {
          name: "国家级博士后科研工作站新设站申报",
          num: 4,
          show: false,
        },
      ],
    };
  },
  components: {},
  methods: {
    fn(item) {
      if (this.quanbu == true) {
        this.len = this.list1.length;
        return true;
      } else if (this.shenbaozhong == true) {
        if (item.over == false) {
          return true;
        } else {
          return false;
        }
      } else if (this.weikaiqi == true) {
        if (item.over == true) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    fn2(item, key) {
      if (item.show == true) {
        return true;
      }
    },
    showzhankai() {
      this.zhanshiquanbushow = false;
      for (var i = 0; i < this.list2.length; i++) {
        this.list2[i].show = true;
      }
      console.log(list2);
    },
    erweima() {
      this.erweimashow = !this.erweimashow;
    },
    showquanbu() {
      this.quanbu = true;
      this.shenbaozhong = false;
      this.weikaiqi = false;
      this.len = this.list1.length;
    },
    showshenbaozhong() {
      this.quanbu = false;
      this.shenbaozhong = true;
      this.weikaiqi = false;
      var len1 = 0;
      for (var i = 0; i < this.list1.length; i++) {
        if (this.list1[i].over == false) {
          len1++;
        }
      }
      this.len = len1;
    },
    showweikaiqi() {
      this.quanbu = false;
      this.shenbaozhong = false;
      this.weikaiqi = true;
      var len1 = 0;
      for (var i = 0; i < this.list1.length; i++) {
        if (this.list1[i].over == true) {
          len1++;
        }
      }
      this.len = len1;
    },
  },
};
</script>

<style lang = "less"  scoped>
.header {
  height: 128px;
  background: url(@/assets/img/banner图片/状态/政策直达.jpg);
  position: relative;
  .headerleft {
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 26px;
    font-weight: 600;
    position: absolute;
    top: 51px;
    left: 360px;
  }
  .headerright {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 400;
    position: absolute;
    left: 574px;
    top: 55px;
    vertical-align: bottom;
  }
}
.nav {
  height: 62px;
  background: #ffffff;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.15);
  ul {
    display: flex;
    margin-left: 360px;
    li {
      width: 140px;
      height: 38px;
      background: #ffffff;
      border: 1px solid rgba(235, 235, 235, 1);
      border-radius: 2px;
      margin-right: 10px;
      margin-top: 12px;
      line-height: 38px;
      text-align: center;
      cursor: pointer;
      &.active {
        background: #1978ff;
        span {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
          font-weight: 400;
        }
      }
    }
  }
}
.pipei {
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  font-weight: 600;
  margin-top: 30px;
  padding-bottom: 8px;
  border-bottom: 6px solid #296fd2;
  width: 80px;
  height: 28px;
}
.hengxian {
  height: 2px;
  background: #333333;
  margin-bottom: 20px;
}
.tongguo {
  background-color: #f2faff;
  height: 130px;
  margin-top: 20px;
  position: relative;
  margin-bottom: 30px;
  .img1 {
    position: absolute;
    top: 44px;
    bottom: 43px;
    left: 20px;
  }
  .top {
    position: absolute;
    top: 26px;
    left: 73px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #429d06;
    letter-spacing: 0;
    font-weight: 400;
  }
  .bottomleft {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
    width: 168px;
    height: 20px;
    position: absolute;
    left: 73px;
    bottom: 29px;
  }

  .middleleft {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #3e9505;
    letter-spacing: 0;
    font-weight: 600;
    position: absolute;
    left: 73px;
    top: 49.38px;
  }
  .middlemiddle {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
    position: absolute;
    left: 167px;
    top: 49.38px;
  }
  .num1 {
    color: #ff8113;
    width: 15.58px;
    height: 20.78px;
    line-height: 20.78px;
    font-size: 25px;
    position: absolute;
    left: 355.64px;
    top: 49px;
    font-weight: 600;
  }
  .danwei1 {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
    position: absolute;
    left: 378px;
    top: 49.38px;
  }
  .middleright {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
    position: absolute;
    left: 418px;
    top: 49.38px;
  }
  .num2 {
    color: #ff8113;
    width: 15.58px;
    height: 20.78px;
    line-height: 20.78px;
    font-size: 25px;
    position: absolute;
    left: 622.61px;
    top: 49px;
    font-weight: 600;
  }
  .danwei2 {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
    position: absolute;
    left: 674px;
    top: 49.38px;
  }
  .bottommiddle {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #004fc6;
    letter-spacing: 0;
    font-weight: 400;
    position: absolute;
    left: 245px;
    top: 81px;
    padding-bottom: 0px;
    border-bottom: 1px solid #004fc6;
    cursor: pointer;
  }
  .bottomright {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 20px;
    font-weight: 400;
    position: absolute;
    left: 361px;
    top: 78px;
  }
  .bottomright2 {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #004fc6;
    letter-spacing: 0;
    line-height: 20px;
    font-weight: 400;
    position: absolute;
    left: 417px;
    top: 78px;
  }
  .bottomright3 {
    position: absolute;
    left: 448px;
    top: 78px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 20px;
    font-weight: 400;
  }
  .yinzhang {
    position: absolute;
    top: 25px;
    left: 725px;
  }
  button {
    position: absolute;
    right: 20px;
    top: 47px;
    background: #1978ff;
    border-radius: 5px;
    border: none;
    width: 107px;
    height: 34px;
    cursor: pointer;
    span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0.42px;
      text-align: center;
      font-weight: 400;
    }
  }
}
.box {
  width: 64px;
  height: 262px;
  position: fixed;
  right: 0;
  top: 575px;
  z-index: 8888;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  cursor: pointer;
  .item1 {
    height: 81px;
    border-bottom: 1px solid #ebebeb;
    position: relative;
    img {
      position: relative;
      left: 21px;
      top: 20px;
    }
    .div1 {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #333333;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
      width: 48px;
      height: 17px;
      position: relative;
      left: 8px;
      top: 23px;
    }
  }
  .item2 {
    height: 98px;
    border-bottom: 1px solid #ebebeb;
    position: relative;
    img {
      position: relative;
      left: 21px;
      top: 20px;
    }
    .div1,
    .div2 {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #333333;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
      position: relative;
      left: 10.5px;
      top: 23px;
      width: 43px;
      height: 34px;
    }
    .div2 {
      position: relative;
      left: 9.5px;
      top: 7px;
    }
  }
  a {
    text-decoration: none;
    .item3 {
      height: 81px;
      position: relative;
      img {
        position: relative;
        left: 21px;
        top: 20px;
      }
      .div1 {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        letter-spacing: 0;
        text-align: center;
        font-weight: 400;
        position: relative;
        left: 8px;
        top: 23px;
        width: 48px;
        height: 17px;
      }
    }
  }
  .erweima {
    position: fixed;
    top: 670px;
    right: 65px;
  }
}
//第一个表格
.top1 {
  height: 50px;
  background: #1b5bb5;
  position: relative;
  .choose {
    width: 16px;
    height: 16px;
    border: 0.5px solid rgba(299, 243, 254, 0.4);
    box-sizing: border-box;
    cursor: pointer;
  }
  .choose11 {
    position: absolute;
    top: 15px;
    left: 20px;
  }
  .choose12 {
    position: absolute;
    top: 15px;
    left: 90px;
  }
  .choose13 {
    position: absolute;
    top: 15px;
    left: 174px;
  }
  .text {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 400;
  }
  .choosetrue {
    background-color: #fff;
    width: 12px;
    height: 12px;
    margin: 1px 1px;
  }
  .text1 {
    position: absolute;
    top: 17px;
    left: 42px;
  }
  .text2 {
    position: absolute;
    top: 17px;
    left: 112px;
  }
  .text3 {
    position: absolute;
    top: 17px;
    left: 196px;
  }
  .text4 {
    position: absolute;
    width: 60px;
    height: 20px;
    left: 1120px;
    top: 17px;
    text-align: center;
  }
}
.body1 {
  border: 1px solid rgba(235, 238, 245, 1);
  ul {
    li {
      margin-top: 20px;
      height: 105px;
      width: 1200px;
      position: relative;
      border-bottom: 1px solid rgba(235, 238, 245, 1);
      .num1 {
        position: absolute;
        left: 20px;
        width: 44px;
        height: 20px;
        box-sizing: border-box;
        border: 1px solid rgba(253, 97, 97, 1);
        border-radius: 2px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #fd6161;
        letter-spacing: 0;
        line-height: 12px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
      }
      .num2 {
        position: absolute;
        left: 20px;
        width: 44px;
        height: 20px;
        border: 1px solid rgba(153, 153, 153, 1);
        border-radius: 2px;
        border-radius: 2px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0;
        line-height: 12px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
      }
      .name {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 600;
        position: absolute;
        left: 68px;
        height: 22px;
        line-height: 22px;
        text-align: center;
      }

      .leftbottom {
        .img1 {
          position: absolute;
          left: 20px;
          top: 40px;
        }
        .text1 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 400;
          width: 182px;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
          position: absolute;
          top: 38px;
          left: 40px;
        }
        .img2 {
          position: absolute;
          left: 20px;
          top: 66px;
        }
        .text2 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 400;
          width: 259px;
          height: 20px;
          position: absolute;
          left: 40px;
          top: 64px;
          line-height: 20px;
          vertical-align: middle;
        }
      }
      .middle {
        .num {
          font-family: PingFangSC-Semibold;
          font-size: 26px;
          color: #ff8113;
          letter-spacing: 0;
          text-align: center;
          line-height: 26px;
          font-weight: 600;
          width: 47px;
          height: 26px;
          position: absolute;
          top: 8px;
          left: 886px;
        }
        .div1 {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 400;
          width: 24px;
          height: 17px;
          position: absolute;
          top: 18px;
          left: 936.5px;
        }
        .div2 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          font-weight: 400;
          position: absolute;
          top: 38px;
          left: 881px;
        }
      }
      .sep {
        width: 1px;
        height: 42px;
        background-color: rgba(245, 245, 245, 1);
        position: absolute;
        top: 16px;
        left: 1000.5px;
      }
      .right {
        .div1 {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #333333;
          letter-spacing: 0;
          text-align: right;
          line-height: 12px;
          font-weight: 400;
          position: absolute;
          top: 12px;
          left: 1031px;
        }
        .num {
          font-family: PingFangSC-Semibold;
          font-size: 18px;
          color: #333333;
          letter-spacing: 0;
          text-align: right;
          line-height: 18px;
          font-weight: 600;
          position: absolute;
          top: 8px;
          left: 1081px;
        }
        .div2 {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #333333;
          letter-spacing: 0;
          line-height: 12px;
          font-weight: 400;
          position: absolute;
          top: 12px;
          left: 1156px;
        }
        button {
          background: #63c324;
          border-radius: 2px;
          width: 68px;
          height: 29px;
          position: absolute;
          top: 36px;
          right: 60px;
          border: none;
          span {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #ffffff;
            letter-spacing: 0;
            text-align: center;
            line-height: 12px;
            font-weight: 400;
          }
        }
      }
      img {
        position: absolute;
        top: 74px;
        left: 1164px;
        cursor: pointer;
      }
    }
  }
}
//第二个表格
.top2 {
  background: url(@/assets/img/推荐政策通栏/状态/默认.png);
  height: 72px;
  margin-top: 60px;
}
.body2 {
  border: 1px solid rgba(235, 238, 245, 1);
  ul {
    li {
      margin-top: 20px;
      height: 105px;
      width: 1200px;
      position: relative;
      border-bottom: 1px solid rgba(235, 238, 245, 1);
      .num1 {
        position: absolute;
        left: 20px;
        width: 44px;
        height: 20px;
        box-sizing: border-box;
        border: 1px solid rgba(253, 97, 97, 1);
        border-radius: 2px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #fd6161;
        letter-spacing: 0;
        line-height: 12px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
      }
      .name {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 600;
        position: absolute;
        left: 68px;
        height: 22px;
        line-height: 22px;
        text-align: center;
      }
      .leftbottom {
        .img1 {
          position: absolute;
          left: 20px;
          top: 40px;
        }
        .text1 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 400;
          width: 182px;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
          position: absolute;
          top: 38px;
          left: 40px;
        }
        .img2 {
          position: absolute;
          left: 20px;
          top: 66px;
        }
        .text2 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 400;
          width: 259px;
          height: 20px;
          position: absolute;
          left: 40px;
          top: 64px;
          line-height: 20px;
          vertical-align: middle;
        }
      }
      .middle {
        .lefttop {
          .num {
            font-family: PingFangSC-Semibold;
            font-size: 22px;
            color: #1978ff;
            letter-spacing: 0;
            text-align: right;
            font-weight: 600;
            width: 14px;
            height: 30px;
            position: absolute;
            top: 14px;
            right: 308px;
          }
          .text {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #1978ff;
            letter-spacing: 0;
            font-weight: 400;
            width: 12px;
            height: 17px;
            position: absolute;
            top: 21px;
            right: 294px;
          }
        }
        .leftbottom {
          width: 103px;
          height: 21px;
          position: absolute;
          top: 42px;
          right: 294px;
          background: #e6f0ff;
          border-radius: 4px;
          .text {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #1978ff;
            letter-spacing: 0;
            font-weight: 400;
            width: 72px;
            height: 17px;
            position: absolute;
            top: 4px;
            left: 8px;
          }
          img {
            position: absolute;
            top: 5px;
            left: 84px;
          }
        }
        .right {
          width: 52px;
          height: 53px;
          position: absolute;
          top: 11px;
          right: 229px;
          background: #1978ff;
          border: 0.5px solid rgba(28, 98, 197, 1);
          border-radius: 5px;
          box-sizing: border-box;
          cursor: pointer;
          .text {
            font-family: PingFangSC-Semibold;
            font-size: 18px;
            color: #ffffff;
            letter-spacing: 0;
            text-align: center;
            font-weight: 600;
            text-align: center;
            height: 32px;
            line-height: 32px;
          }
          .bottom {
            background: #ffffff;
            border-radius: 4px;
            height: 19px;
            width: 50.18px;
            line-height: 19px;
            .text {
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #1978ff;
              letter-spacing: 0;
              font-weight: 400;
              line-height: 19px;
              height: 18px;
            }
          }
        }
      }
      .sep {
        width: 1px;
        height: 42px;
        background-color: rgba(245, 245, 245, 1);
        position: absolute;
        top: 16px;
        left: 1000.5px;
      }
      .right {
        .div1 {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #333333;
          letter-spacing: 0;
          text-align: right;
          line-height: 12px;
          font-weight: 400;
          position: absolute;
          top: 12px;
          left: 1031px;
        }
        .num {
          font-family: PingFangSC-Semibold;
          font-size: 18px;
          color: #333333;
          letter-spacing: 0;
          text-align: right;
          line-height: 18px;
          font-weight: 600;
          position: absolute;
          top: 8px;
          left: 1081px;
        }
        .div2 {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #333333;
          letter-spacing: 0;
          line-height: 12px;
          font-weight: 400;
          position: absolute;
          top: 12px;
          left: 1156px;
        }
        button {
          background: #63c324;
          border-radius: 2px;
          width: 68px;
          height: 29px;
          position: absolute;
          top: 36px;
          right: 60px;
          border: none;
          span {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #ffffff;
            letter-spacing: 0;
            text-align: center;
            line-height: 12px;
            font-weight: 400;
          }
        }
      }
      img {
        position: absolute;
        top: 74px;
        left: 1164px;
        cursor: pointer;
      }
    }
  }
  .zhankai {
    height: 36px;
    background-color: #f1f2f3;
    display: flex;
    cursor: pointer;
    span {
      display: block;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #004fc6;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
      width: 56px;
      height: 20px;
      margin-top: 8px;
      margin-left: 566px;
      line-height: 20px;
      text-align: center;
    }
    img {
      width: 9px;
      height: 6px;
      margin-left: 4px;
      margin-top: 15px;
    }
  }
}
</style>
