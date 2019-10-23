<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
      <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" to="/guest/home">速達通訊</router-link>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent>最新消息</a>
        </li>
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent>優惠活動</a>
        </li>
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent>關於我們</a>
        </li>
        <li class="nav-item text-nowrap">
          <router-link class="nav-link" to="/guest/productlist">商品列表</router-link>
        </li>
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signin">後台管理</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    signin() {
      const api = `${process.env.APIPATH}api/user/check`;
      const vm = this;
      this.$http.post(api).then(response => {
        console.log("check: ", response.data);
        if(response.data.success){
          this.$router.push("/admin/products");
        }else{
          this.$router.push("/login");
        }
      });
    },
    signout() {
      const api = `${process.env.APIPATH}logout`; //'https://vue-course-api.hexschool.io/api/morecoke/products?page=:page';
      console.log(api);
      const vm = this;
      this.$http.post(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/guests/home");
        }
      });
    },
    navAnimation() {
      $(window).scroll(function() {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 20);
      });
    }
  },
  mounted() {
    this.navAnimation();
  }
};
</script>