<!--  -->
<template>
  <div>
    <div class="wrap">
      <Tongguo></Tongguo>
      <div class="button">
        <el-button type="text" class="buttonDiv" @click="tianjia"
          >添加</el-button
        >
        <el-button
          size="small"
          type="danger"
          class="buttonDiv"
          @click="shanchu(curdata)"
          >删除</el-button
        >
        <el-button type="text" class="buttonDiv" @click="bianji(curdata)"
          >编辑</el-button
        >
      </div>
      <el-table
        :data="tabledata"
        :row-style="{ height: '68px' }"
        :cell-style="{ padding: '0' }"
        highlight-current-row
        @row-click="rowclick"
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
          label="事项名称"
          width="432px"
          header-align="left"
          align="left"
        >
          <template slot-scope="scope">
            <div class="blue" @click="fn(scope.$index)">
              {{ scope.row.mingcheng }}
            </div>
          </template></el-table-column
        >

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
    <el-dialog
      style="width: 1000px; height: 1300px"
      title="内容信息"
      :visible.sync="zdydialog"
    >
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="事项名称" width="80px" prop="mingcheng">
          <el-input class="dialog_input" v-model="form.mingcheng"></el-input>
        </el-form-item>
        <el-form-item label="事项分类" width="80px" prop="fenlei">
          <el-input class="dialog_input" v-model="form.fenlei"></el-input>
        </el-form-item>
        <el-form-item label="主管部门" width="80px" prop="bumen">
          <el-input class="dialog_input" v-model="form.bumen"></el-input>
        </el-form-item>
        <el-form-item v-show="false">
          <el-input
            class="dialog_input"
            v-model="form.id"
            style="width: 0; height: 0"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit(curdata, 'ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Tongguo from "@/components/Tongguo.vue";
export default {
  data() {
    return {
      rules: {
        mingcheng: [
          { required: true, message: "请输入活动名称", trigger: "blue" },
        ],
        fenlei: [],
        bumen: [],
      },
      submitType: "",
      zdydialog: false,
      form: {},
      curdata: null,
      tabledata: [
        {
          id: 1,
          mingcheng: "降低企业贷款成本",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
        {
          id: 2,
          mingcheng: "重点招商引资企业招引",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
        {
          id: 3,
          mingcheng: "国家版权示范园区(基地)",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
        {
          id: 4,
          mingcheng: "知识产权服务机构",
          fenlei: "助企事项",
          bumen: "深圳市龙华区人力资源局",
        },
        {
          id: 5,
          mingcheng: "国家文化出口重点企业",
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
  methods: {
    bianji(index) {
      this.submitType = "update";
      this.form = this.tabledata[index];
      this.zdydialog = true;
    },
    cancel() {
      this.zdydialog = false;
    },
    tianjia() {
      this.form = {
        id: this.curdata + 1,
        mingcheng: "",
        fenlei: "",
        bumen: "",
      };
      this.submitType = "add";
      this.zdydialog = true;
    },
    submit(idx, formName) {
      if (this.submitType == "add") {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.tabledata.splice(idx + 1, 0, this.form);
            for (var i = idx + 1; i < this.tabledata.length; i++) {
              this.tabledata[i].id++;
            }
            this.zdydialog = false; //自定义对话框隐藏
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      } else {
        this.zdydialog = false; //自定义对话框隐藏
      }
    },
    fn(index) {
      this.curdata = index;
      console.log(this.curdata);
    },
    rowclick(row) {
      this.curdata = row.id - 1;
      console.log(this.curdata);
    },
    shanchu(idx) {
      this.$confirm("此操作将永久删除该项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (idx === null) {
            this.$message({
              type: "info",
              message: "请选择要删除的条目",
            });
          } else {
            this.tabledata.splice(idx, 1);
            for (var i = idx; i < this.tabledata.length; i++) {
              this.tabledata[i].id--;
            }
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
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
  ::v-deep .el-table__cell {
    cursor: pointer;
  }
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

  .blue {
    color: #2f7dd6;
    height: 100%;
    cursor: pointer;
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
  margin-left: 910px;
  display: flex;
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
.dialog_input {
  width: 220px;
}
.el-dialog__wrapper {
  margin: 0 auto;
}
</style>
