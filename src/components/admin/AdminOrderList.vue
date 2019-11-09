<template>
  <div>
    <div class="text-right">
      <button class="btn btn-primary" @click="openModal(true)">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <th width="120">購買時間</th>
        <th width="80">訂單順序</th>
        <th>購買商品</th>
        <th>買家資料</th>
        <th width="120">訂單編號</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="100">編輯</th>
      </thead>
      <tbody>
        <tr v-for="(item,index) in orders" :key="index">
          <td>{{item.create_at}}</td>
          <td>{{item.num}}</td>
          <td>
            <ul>
              <li class="mb-2" v-for="(orderproduct,index) in item.products" :key="`orderproduct-${index}`">
                {{orderproduct.product.title}} : {{orderproduct.qty}} {{orderproduct.product.unit}}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li class="mb-2" v-for="(userdata,index) in item.user" :key="`userdata-${index}`"></li>
            </ul>
          </td>
          <td class="text-right">{{item.id}}</td>
          <td class="text-right">{{item.total | currency}}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>未付款</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>更新訂單</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="title">買家姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder="請輸入買家姓名"
                      v-model="tempOrder.user.name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="title">電話</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder="請輸入電話"
                      v-model="tempOrder.user.tel"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="category">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入Email"
                    v-model="tempOrder.user.email"
                  />
                </div>
                <div class="form-group">
                  <label for="category">地址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入地址"
                    v-model="tempOrder.user.address"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" id="price" placeholder="請輸入售價" />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">確認</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      pagination: {},
      tempOrder: {},
      orders: [],
      isNew: false,
      isLoading: false
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
    openModal(isNew, item) {
      if (isNew) {
        this.tempOrder = {};
        this.isNew = true;
      } else {
        this.tempOrder = Object.assign({}, item);
        this.isNew = false;
      }
      $("#orderModal").modal("show");
    }
  },
  created() {
    this.getOrders();
  }
};
</script>
