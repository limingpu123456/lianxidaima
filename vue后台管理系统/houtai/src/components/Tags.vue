<!--  -->
<template>
  <div class="tags">
    <!-- 前面加冒号，就真正的变成了布尔值 -->
    <el-tag
      class="tag"
      size="medium"
      :closable="index > 0"
      :effect="item.path === $route.path ? 'dark' : 'plain'"
      v-for="(item, index) in tags"
      :key="item.path"
      @click="goTo(item.path)"
      @close="close(index)"
      :disable-transitions="true"
    >
      <i class="cir" v-show="item.path === $route.path"></i>
      {{ item.title }}</el-tag
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          title: "首页",
          path: "/home",
        },
      ],
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(val, oldval) {
        //数组名.find() 查找,调用结果是一个布尔值，找到就返回true
        const bool = this.tags.find((item) => {
          return val.path === item.path;
        });
        if (!bool) {
          this.tags.push({
            title: "首页",
            path: val.path,
          });
        }
      },
    },
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
    close(i) {
      //先跳转，再删除
      //跳转到最后一项
      //不相等就不用跳转了
      console.log(this.tags[i].path);
      if (
        this.tags[i].path !== this.$route.path &&
        i !== this.tags.length - 1
      ) {
        this.$router.push(this.tags[this.tags.length - 1].path);
      } else if (i === this.tags.length - 1) {
        this.$router.push(this.tags[this.tags.length - 2].path);
      }
      //关闭当前项，本质上就是删除tags的对应项
      this.tags.splice(i, 1);
    },
  },
};
</script>

<style lang = "less"  scoped>
.tags {
  padding-left: 20px;
  padding-top: 4.5px;
  .tag {
    cursor: pointer;
    margin-right: 5px;
    .cir {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
