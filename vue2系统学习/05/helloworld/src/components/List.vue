<!--  -->
<template>
  <div class="wrap">
    <div class="hd">
      <h2>{{ title }}</h2>
      <div class="count">{{ counts }}</div>
    </div>
    <ul class="bd">
      <li
        v-for="(item, key) in arr"
        :key="item.id"
        v-show="type == 'doing' ? !item.isFinished : item.isFinished"
      >
        <div class="l">
          <input
            type="checkbox"
            @click="clickCheckbox(key)"
            :checked="item.isFinished"
          />
        </div>
        <input
          type="text"
          v-model="item.content"
          :class="item.isShowBorder ? 'showBorder' : ''"
          @focus="showBorderMt(key)"
          @blur="showBorderMt(key)"
        />
        <div class="r">
          <div @click="del(key)">-</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["title", "arr", "type"],
  computed: {
    counts() {
      let newArr = this.arr.filter((item) => {
        return this.type == "doing" ? !item.isFinished : item.isFinished;
      });
      return newArr.length;
    },
  },
  methods: {
    clickCheckbox(key) {
      this.$emit("fn", key);
    },
    showBorderMt(key) {
      this.$emit("fn2", key);
    },
    del(key) {
      this.$emit("fn3", key);
    },
  },
};
</script>

<style  scoped>
</style>
