<!--  -->
<template>
  <div class="header">
    <div class="header-top">
      <div class="fl">
        <el-button
          icon="el-icon-s-unfold"
          v-show="!isShow"
          @click="changeShow"
        ></el-button>
        <el-button
          icon="el-icon-s-fold"
          v-show="isShow"
          @click="changeShow"
        ></el-button>
      </div>
      <div class="fl">
        <Crumb></Crumb>
      </div>
      <div class="fr">
        <el-dropdown @command="hdCommand">
          <div class="avatar-box">
            <img
              :src="
                IMG_BASEURL +
                (userInfo.user.avatar ||
                  '/profile/avatar/2022/10/10/blob_20221010200353A001.jpeg')
              "
              alt=""
              width="40"
            />
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item> -->
            <el-dropdown-item divided command="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="header-bottom">
      <Tags></Tags>
    </div>
  </div>
</template>

<script>
import { IMG_BASEURL } from "@/utils/baseurl";
import { mapMutations, mapState } from "vuex";
import Crumb from "@/components/Crumb.vue";
import Tags from "@/components/Tags.vue";
export default {
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo.userInfo,
    }),
  },
  components: {
    Crumb,
    Tags,
  },
  data() {
    return {
      isShow: true,
      IMG_BASEURL,
    };
  },
  methods: {
    ...mapMutations({
      changeIsCollapse: "navCollapse/changeIsCollapse",
    }),
    changeShow() {
      this.isShow = !this.isShow;
      this.changeIsCollapse();
    },
    //通过command属性进行区分
    hdCommand(command) {
      // console.log("执行了hdCommand", command);
      if (command === "logout") {
        localStorage.removeItem("edb-authorization-token");
        localStorage.removeItem("edb-userInfo");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang = "less"  scoped>
.header {
  height: 84px;
  box-shadow: 0px 5px 5px #eee;
  /* padding-left: 20px; */
  button {
    width: 50px;
    height: 50px;
    margin: 0;
    font-size: 20px;
    padding: 12px 10px;
    border: none;
  }
  .header-top {
    height: 50px;
    box-shadow: 0px 4px 4px #eee;
  }
  .avatar-box {
    padding: 5px 20px 0 0;
    img {
      border-radius: 5px;
    }
    img,
    i {
      cursor: pointer;
    }
  }
}
.fl {
  float: left;
}
.fr {
  float: right;
}
</style>
