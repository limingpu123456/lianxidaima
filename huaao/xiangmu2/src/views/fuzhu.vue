<!--  -->
<template>
  <div>
    <div class="wrap">
      <Tongguo></Tongguo>
      <div class="button">
        <el-button class="buttonDiv tianjia">添加</el-button>
        <el-button class="buttonDiv shanchu">删除</el-button>
      </div>
      <el-table
        :data="tabledata"
        :row-style="{ height: '68px' }"
        :cell-style="{ padding: '0' }"
      >
        <el-table-column
          prop="id"
          label="序号"
          width="79px"
          class="id"
          header-align="left"
          align="left"
        ></el-table-column>
        <el-table-column
          prop="mingcheng"
          label="事项名称"
          width="432px"
          header-align="left"
          align="left"
          class-name="blue"
        ></el-table-column>
        <el-table-column
          prop="fenlei"
          label="事项分类"
          width="205px"
          header-align="left"
          align="left"
        ></el-table-column>
        <el-table-column
          prop="bumen"
          label="主管部门"
          width="367px"
          header-align="left"
          align="left"
        ></el-table-column>
        <el-table-column
          label="操作"
          header-align="center"
          width="117px"
          align="center"
        >
          <template slot-scope="scope">
            <div class="oushu" style="color: #ff8113">办事指南</div>
            <div class="sep"></div>
            <div :class="scope.row.id % 2 == 0 ? 'oushu' : 'jishu'">办理</div>
          </template>
        </el-table-column>
      </el-table>
      <!-- <table>
        <thead>
          <tr>
            <td class="id">序号</td>
            <td style="width: 432px">事项名称</td>
            <td style="width: 205px">事项分类</td>
            <td>主管部门</td>
            <td style="text-align: center">操作</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="id">1</td>
            <td class="blue"><span>降低企业贷款成本</span></td>
            <td>助企事项</td>
            <td>深圳市龙华区人力资源局</td>
            <td class="last">
              <div
                style="
                  display: inline-block;
                  border-bottom: 1px solid #ff8113;
                  cursor: pointer;
                "
              >
                办事指南
              </div>
              <div class="sep"></div>
              <div
                style="
                  display: inline-block;
                  border-bottom: 1px solid #ff8113;
                  cursor: pointer;
                "
              >
                办理
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td class="blue">
              <span>重点招商引资企业招引高级管理人员或业务骨干资助</span>
            </td>
            <td>助企事项</td>
            <td>深圳市龙华区人力资源局</td>
            <td class="last">
              <div
                style="
                  display: inline-block;
                  border-bottom: 1px solid #ff8113;
                  cursor: pointer;
                "
              >
                办事指南
              </div>
              <span class="sep"></span>
              <div
                style="
                  display: inline-block;
                  border-bottom: 1px solid #ff8113;
                  cursor: pointer;
                "
              >
                办理
              </div>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Tongguo from "@/components/Tongguo.vue";
export default {
  data() {
    return {
      tabledata: [
        {
          id: 1,
          mingcheng: "降低企业贷款成本",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
        {
          id: 2,
          mingcheng: "重点招商引资企业招引高级管理人员或业务骨干资助",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
        {
          id: 3,
          mingcheng: "国家版权示范园区(基地)、广东省版权兴业示范基地",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
        {
          id: 4,
          mingcheng: "知识产权服务机构、高端知识产权服务机构",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
        {
          id: 5,
          mingcheng: "国家文化出口重点企业目录”文化企业",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
      ],
    };
  },
  components: {
    Tongguo,
    Footer,
  },
};
</script>

<style lang = "less"  scoped>
// table {
//   width: 1200px;
//   margin-bottom: 204px;
//   thead {
//     tr {
//       td {
//         font-family: PingFangSC-Semibold;
//         font-size: 16px;
//         color: #333333;
//         letter-spacing: 0;
//         font-weight: 600;
//         &.id {
//           width: 79px;
//         }
//       }
//     }
//   }
//   tbody {
//     tr {
//       height: 68px;
//       border-bottom: 1px solid #ebebeb;

//       td {
//         // line-height: 68px;
//         // vertical-align: middle;
//         vertical-align: middle;
//         font-family: PingFangSC-Regular;
//         font-size: 16px;
//         color: #333333;
//         letter-spacing: 0;
//         font-weight: 400;
//         &.blue {
//           font-family: PingFangSC-Regular;
//           font-size: 16px;
//           color: #2f7dd6;
//           letter-spacing: 0;
//           font-weight: 400;
//           span {
//             cursor: pointer;
//           }
//         }
//         .sep {
//           display: inline-block;
//           width: 1px;
//           height: 14px;
//           background: #ebebeb;
//           vertical-align: bottom;
//           margin-left: 10px;
//           margin-right: 10px;
//         }
//         &.last {
//           text-align: center;
//           color: #ff8113;
//         }
//       }
//     }
//   }
// }
.el-table {
  margin-bottom: 204px;
  ::v-deep.el-table thead .cell {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
    padding-right: 0;
    padding-left: 0;
  }
  ::v-deep tbody .cell {
    padding-right: 0;
    padding-left: 0;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
  }
  ::v-deep tbody .blue .cell {
    color: #2f7dd6;
  }
  .sep {
    display: inline-block;
    width: 1px;
    height: 14px;
    background: #ebebeb;
    vertical-align: middle;
    margin-left: 10px;
    margin-right: 10px;
  }
  .jishu {
    display: inline-block;
    padding: 0;
    border-bottom: 1px solid rgb(180, 177, 177);
    color: rgb(180, 177, 177);
    text-align: center;
  }
  .oushu {
    display: inline-block;
    border-bottom: 1px solid #ff8113;
    color: #ff8113;
    cursor: pointer;
  }
}
.el-button {
  margin-bottom: 20px;
  width: 100px;
  height: 50px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 600;
}
.button {
  width: 300px;
  margin-left: 979px;
  .buttonDiv,
  .buttonDiv:focus:not(.buttonDiv:hover) {
    margin-right: 12px;
    border: 1px solid #bbbec1;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 #f4f4f4;
    color: #2f7dd6;
    background: white;
    border-radius: 8px;
  }
  /*鼠标悬浮，没有按下；鼠标按下后抬起，没有移开*/
  .buttonDiv:focus,
  .buttonDiv:hover {
    background: #eaf5ff;
    border: 1px solid #2f7dd6 !important;
    color: #2f7dd6;
  }
  /*鼠标按下，没有抬起*/
  .buttonDiv:active {
    background: #2f7dd6;
    color: white;
  }
}
</style>
