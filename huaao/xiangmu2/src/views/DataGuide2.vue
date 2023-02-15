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
        ref="lmp"
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
          { min: 3, message: "长度大于3", trigger: "blur" },
        ],
        fenlei: [
          { required: true, message: "请输入分类", trigger: "blue" },
          { min: 3, message: "长度大于3", trigger: "blur" },
        ],
        bumen: [
          { required: true, message: "请输入主管部门", trigger: "blue" },
          { min: 3, message: "长度大于3", trigger: "blur" },
        ],
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
      if (this.curdata === null) {
        this.$message({
          type: "info",
          message: "请选择要编辑的条目",
        });
        return;
      }
      this.submitType = "update";
      this.form = this.tabledata[index];
      this.zdydialog = true;
      this.$refs.lmp.setCurrentRow();
    },
    cancel() {
      this.zdydialog = false;
    },
    tianjia() {
      if (this.curdata === null) {
        this.curdata = this.tabledata.length;
      }
      this.form = {
        id: this.curdata + 1,
        mingcheng: "",
        fenlei: "",
        bumen: "",
      };
      console.log(this.curdata);
      this.submitType = "add";
      this.zdydialog = true;
      this.$refs.lmp.setCurrentRow();
    },
    submit(idx, formName) {
      if (this.submitType == "add") {
        //校验规则
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.tabledata.splice(idx + 1, 0, this.form);
            for (var i = idx + 1; i < this.tabledata.length; i++) {
              this.tabledata[i].id++;
            }
            this.zdydialog = false; //自定义对话框隐藏
            this.curdata = null;
          } else {
            return false;
          }
        });
      } else {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.zdydialog = false; //自定义对话框隐藏
          } else {
            return false;
          }
        });
        this.curdata = null;
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
            this.curdata = null;
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
::v-deep .el-form-item__error {
  margin-left: 80px;
}

// ::v-deep .el-table__body tr.current-row > td.el-table__cell {
//   background-color: #fff;
// }
</style>
