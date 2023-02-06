<template>
  <div class="home">
    <Comp />
  </div>
</template>

<script>
// @ is an alias to /src
import Comp from "@/components/Comp3.vue";

export default {
  name: "HomeView",
  components: {
    Comp,
  },
};
</script>
