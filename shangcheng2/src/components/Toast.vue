<!--  -->
<template>
  <div class="toast">
    <i
      :class="
        type == 'success'
          ? 'icon-toast_chenggong'
          : type == 'warning'
          ? 'icon-toast-jinggao'
          : 'icon-toast-shibai_huaban'
      "
      class="iconfont"
    ></i>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      msg: (state) => state.toastStatus.msg,
      type: (state) => state.toastStatus.type,
    }),
  },
};
</script>

<style lang = "less"  scoped>
.toast {
  //记住这个居中方案
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px #fff;
  i {
    margin-right: 5px;
  }
}
.icon-toast_chenggong {
  color: green;
}
.icon-toast-jinggao {
  color: orange;
}
.icon-toast-shibai_huaban {
  color: red;
}
</style>
