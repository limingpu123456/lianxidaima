<!--  -->
<template>
  <div></div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {};
  },
  created() {
    axios
      .get("https://localhost:8000/getdata")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    let data = qs.stringify({ num: 123 });
    axios.post("/postdata", { data });
  },
};
</script>

<style lang = "less"  scoped>
</style>
