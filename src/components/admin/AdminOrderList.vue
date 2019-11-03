<template>
  <div>
    <table class="table mt-4">
      <thead>
        <th width="120">購買時間</th>
        <th>Email</th>
        <th width="120">購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
      </thead>
      <tbody>
        <!-- <tr v-for="(item,key) in products" :key="key">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">{{item.origin_price | currency}}</td>
          <td class="text-right">{{item.price | currency}}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pagination:{},
      orders:[],
      isLoading:false,
    };
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/orders?page=${page}`; //'https://vue-course-api.hexschool.io/api/morecoke/products?page=:page';
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
  },
  created(){
    this.getOrders();
  }
};
</script>