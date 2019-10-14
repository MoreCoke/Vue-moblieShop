<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">速達通訊</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="想找什麼"
        aria-label="Search"
      />
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
          <a class="nav-link" href="#" @click.prevent>後台管理</a>
        </li>
        <li class="nav-item text-nowrap">
          <!-- <a class="nav-link" href="#" @click.prevent="signout">登出</a> -->
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      const api = `${process.env.APIPATH}logout`; //'https://vue-course-api.hexschool.io/api/morecoke/products?page=:page';
      console.log(api);
      const vm = this;
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    }
  }
};
</script>