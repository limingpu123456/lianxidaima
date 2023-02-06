<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Comp />
  </div>
</template>

<script>
// @ is an alias to /src
import Comp from "@/components/Comp1.vue";

export default {
  name: "HomeView",
  components: {
    Comp,
  },
};
</script>
