<template>
  <div>
    <header>
      <div class="wrap">
        <h1>ToDoList</h1>
        <input
          type="text"
          placeholder="请输入任务"
          v-model="txtVal"
          @keyup.enter="add"
        />
      </div>
    </header>
    <con-comp
      type="doing"
      title="正在进行"
      :arr="arr"
      @fn="changeType"
      @fn2="showBorderFather"
      @fn3="delFather"
    ></con-comp>
    <con-comp
      type="finished"
      title="已经完成"
      :arr="arr"
      @fn="changeType"
      @fn2="showBorderFather"
      @fn3="delFather"
    ></con-comp>
    <div class="footer">xxxxxx</div>
  </div>
</template>

<script>
// @ is an alias to /src
import conComp from "@/components/List.vue";

export default {
  name: "HomeView",
  data() {
    return {
      arr: [],
      txtVal: "",
      num: 3,
    };
  },
  components: {
    conComp,
  },
  created() {
    let num = localStorage.getItem("num");
    let arr = localStorage.getItem("arr");
    //拿过来的是字符串，不是数字
    this.num = num ? Number(num) : 0;
    this.arr = arr ? JSON.parse(arr) : [];
  },
  methods: {
    changeType(index) {
      this.arr[index].isFinished = !this.arr[index].isFinished;
      this.setLocalstorage();
    },
    showBorderFather(index) {
      this.arr[index].isShowBorder = !this.arr[index].isShowBorder;
      this.setLocalstorage();
    },
    delFather(index) {
      this.arr.splice(index, 1);
      this.setLocalstorage();
    },
    add() {
      this.arr.push({
        id: ++this.num,
        content: this.txtVal,
        isFinished: false,
        isShowBorder: false,
      });
      this.txtVal = "";
      this.setLocalstorage();
    },
    setLocalstorage() {
      localStorage.setItem("num", this.num);
      localStorage.setItem("arr", JSON.stringify(this.arr));
    },
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
}

body {
  background-color: #ccc;
}

header {
  background-color: #333;
  height: 50px;
  line-height: 50px;
}

h1 {
  color: #fff;
}

.wrap {
  width: 600px;
  margin: 0 auto;
}

header .wrap {
  display: flex;
  justify-content: space-between;
}

header input {
  height: 40px;
  margin-top: 3px;
  width: 300px;
  text-indent: 10px;
}

.hd {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.count {
  width: 30px;
  height: 30px;
  background-color: #666;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  color: #fff;
}

.bd {
  padding-bottom: 10px;
}

.bd li {
  background-color: #fff;
  height: 40px;
  margin-top: 8px;
  display: flex;
}

.l,
.r {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bd input[type="text"] {
  flex: 1;
  height: 30px;
  margin-top: 3px;
  border-color: #fff;
  border-width: 0px;
}

.bd input[type="text"].showBorder {
  border: 1px solid #333;
}

.l > input,
.r > div {
  width: 30px;
  height: 30px;
}

.r > div {
  background-color: pink;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
}

.footer {
  text-align: center;
  margin-top: 30px;
}

.bd input[type="checkbox"],
.r > div {
  cursor: pointer;
}
</style>
