<!--  -->
<template>
  <div class="body">
    <div class="img">
      <div class="tupian">
        <div class="div1"></div>
        <div class="sep1"></div>
        <div class="div2"></div>
        <div class="sep2"></div>
        <div class="div3"></div>
      </div>
      <div class="text">
        <div>基本情况</div>
        <div>基本条件</div>
        <div>审批结果</div>
      </div>
    </div>
    <div class="top1 wrap">
      <img src="@/assets/img/通知icon/状态/默认.png" alt="" />
      <div class="text">
        带
        <div class="icon xing">*</div>
        内容为必填项
      </div>
    </div>
    <!-- <div class="list wrap">
      <div class="wrap2">
        <div class="top2">
          <span> 基本情况 </span>
        </div>
        <div class="input" v-for="(item, key) in list" :key="key">
          <div class="top">
            <div class="name">{{ item.title }}</div>
            <div class="icon">*</div>
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <input type="text" :placeholder="item.text" v-model="item.text2" />
            <div class="choose" v-show="item.ischoose">选择</div>
          </div>
        </div>
      </div>
    </div> -->

    <van-form @submit="onSubmit">
      <div class="wrap" v-for="(item, key) in list" :key="key">
        <div class="list">
          <div class="top">
            <div class="name">{{ item.title }}</div>
            <div class="icon">*</div>
          </div>
          <van-field
            v-model="item.text"
            :placeholder="item.placeholdertext"
            :rules="[{ required: true }]"
            v-if="!item.ischoose"
          />
          <van-cell is-link @click="showPopup" v-else>
            <div>请选择</div>
          </van-cell>
          <van-popup v-model="show" position="bottom" :class="popup"
            >内容</van-popup
          >
        </div>
      </div>
      <div class="zhunbei wrap"></div>
      <van-button round block type="info" native-type="submit"
        >下一步</van-button
      >
    </van-form>
  </div>
  <!-- <div class="bottom">
      <div class="text">下一步</div>
    </div> -->
</template>

<script>
export default {
  data() {
    return {
      show: false,
      name: "深圳华傲数据技术有限公司",
      list: [
        {
          title: "企业名称",
          placeholdertext: "请输入企业名称",
          ischoose: false,
          text: "深圳华傲数据技术有限公司",
        },
        {
          title: "通讯地址",
          placeholdertext: "请输入通讯地址",
          ischoose: false,
          text: "",
        },
        {
          title: "所在省份",
          placeholdertext: "请选择",
          ischoose: true,
          text: "",
        },
        {
          title: "邮编",
          placeholdertext: "请输入邮编",
          ischoose: false,
          text: "",
        },
        {
          title: "法人代表",
          placeholdertext: "请输入法人代表",
          ischoose: false,
          text: "",
        },
        {
          title: "电话",
          placeholdertext: "请输入电话",
          ischoose: false,
          text: "",
        },
        {
          title: "企业规模",
          placeholdertext: "请选择",
          ischoose: true,
          text: "",
        },
        {
          title: "企业类型",
          placeholdertext: "请选择",
          ischoose: true,
          text: "",
        },
        {
          title: "上市情况",
          placeholdertext: "请选择",
          ischoose: true,
          text: "",
        },
      ],
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    change(value) {
      console.log(value); // 打印选中的值
    },
    showPopup() {
      this.show = true;
    },
  },
  watch: {
    selected(newValue) {
      console.log(newValue); // 监听选中的值的变化
    },
  },
};
</script>

<style lang = "less"  scoped>
.icon {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #fd485f;
  letter-spacing: 0;
  font-weight: 400;
}
.body {
  background: rgb(245, 245, 245);
}
.wrap {
  margin: 0 auto;
  width: 347px;
}
.img {
  width: 100%;
  height: 170px;
  background: #1978ff;
  overflow: auto;
  .tupian {
    display: flex;
    align-items: center;
    width: 286px;
    margin-top: 21px;
    margin-left: 45px;

    .div1 {
      background: url("@/assets/img/步骤序号/数字/1.png");
      width: 44px;
      height: 44px;
      margin-right: 27px;
    }
    .sep1 {
      width: 23px;
      height: 5px;
      background: url("@/assets/img/进度条/状态/未选.png");
      margin-right: 27px;
    }
    .div2 {
      background: url("@/assets/img/序号/未点击/1.png");
      width: 44px;
      height: 44px;
      margin-right: 27px;
    }
    .sep2 {
      width: 23px;
      height: 5px;
      background: url("@/assets/img/进度条/状态/未选.png");
      margin-right: 27px;
    }
    .div3 {
      background: url("@/assets/img/序号/未点击/3.png");
      width: 44px;
      height: 44px;
    }
  }
  .text {
    display: flex;
    width: 298px;
    justify-content: space-between;
    margin-top: 1px;
    align-items: center;
    margin-left: 39px;
    div {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
    }
  }
}
.top1 {
  display: flex;
  height: 34px;
  background: #fff8db;
  border-radius: 8px 8px 0px 0px;
  margin-top: -64px;
  align-items: center;
  img {
    display: block;
    width: 13.84px;
    height: 12px;
    margin-left: 10.87px;
    margin-right: 5.86px;
    padding-bottom: 1px;
  }
  .text {
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #b87d32;
    font-weight: 400;
    .xing {
      margin-left: 1.86px;
      margin-right: 2.51px;
      padding-top: 5px;
    }
  }
}
// .list {
//   background-color: #fff;
//   padding-bottom: 41px;
//   .wrap2 {
//     margin: 0 auto;
//     width: 319px;
//     .top2 {
//       height: 60px;
//       box-sizing: border-box;
//       border-bottom: 1px solid #f1f1f1;
//       line-height: 60px;
//       display: flex;
//       align-items: center;
//       span {
//         font-family: PingFangSC-Semibold;
//         font-size: 20px;
//         color: #333333;
//         letter-spacing: 0;
//         line-height: 20px;
//         font-weight: 600;
//         display: block;
//       }
//     }
//     .input {
//       height: 69px;
//       margin-top: 20px;
//       border-bottom: 1px solid #f4f4f4;
//       .top {
//         display: flex;
//         .name {
//           font-family: PingFangSC-Regular;
//           font-size: 14px;
//           color: #333333;
//           letter-spacing: 0;
//           font-weight: 400;
//           margin-bottom: 6px;
//         }
//       }
//       input {
//         border: none;
//         outline: none;
//         padding: 0;
//         display: block;
//         height: 22px;
//         font-family: PingFangSC-Regular;
//         font-size: 16px;
//         color: #333333;
//         letter-spacing: 0;
//         font-weight: 400;
//         &::placeholder {
//           font-family: PingFangSC-Regular;
//           font-size: 16px;
//           color: #cdcdcd;
//           letter-spacing: 0;
//           font-weight: 400;
//         }
//       }
//       .choose {
//         font-family: PingFangSC-Regular;
//         font-size: 14px;
//         color: #1978ff;
//         letter-spacing: 0;
//         text-align: right;
//         font-weight: 400;
//       }
//     }
//   }
// }
// .bottom {
//   width: 375px;
//   height: 49px;
//   background: #1978ff;
//   .text {
//     font-family: PingFangSC-Regular;
//     font-size: 16px;
//     color: #ffffff;
//     letter-spacing: 0;
//     text-align: center;
//     font-weight: 400;
//     position: relative;
//     top: 13px;
//     left: 163px;
//     width: 48px;
//     height: 22px;
//   }
// }
.van-form {
  .wrap {
    height: 88px;
    background-color: #fff;
    box-sizing: border-box;
    .list {
      border-bottom: 1px solid #f1f1f1;
      width: 319px;
      margin: 0 auto;
      .top {
        display: flex;
        padding-top: 20px;
        .name {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 400;
          margin-bottom: 6px;
        }
      }
      .van-field {
        padding-left: 0;
        padding-right: 0;
      }
      .choose {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1978ff;
        letter-spacing: 0;
        text-align: right;
        font-weight: 400;
      }
    }
  }
  .van-button {
    border-radius: 0;
    background-color: #1978ff;
    overflow: auto;
  }
}
::v-deep .van-cell::after {
  border: none;
}
::v-deep .van-cell--clickable {
  padding-left: 0;
  padding-right: 0;
}
::v-deep .van-hairline--top-bottom::after {
  border: 0;
}
::v-deep .van-collapse-item__content {
  background: #ccc;
}
::v-deep .van-cell__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #cdcdcd;
    letter-spacing: 0;
    font-weight: 400;
  }
}
::v-deep .van-icon-arrow:before {
  display: none;
}

::v-deep .van-overlay {
  background-color: rgba(255, 255, 255, 0.07);
}

.van-popup--bottom {
  height: 200px;
}
.van-cell__value--alone {
  div {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #cdcdcd;
    letter-spacing: 0;
    font-weight: 400;
  }
}
::v-deep .van-popup--bottom {
  background-color: pink;
}
</style>
