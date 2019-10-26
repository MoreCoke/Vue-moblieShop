<template>
  <div class="mt-3">
    <div class="vld-parent">
      <loading :active.sync="isLoading"></loading>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <GuestSidebar />
        </div>
        <div class="col-md-9">
          
          <div class="row">
            <div class="col-sm-4" v-for="(item,index) in showProducts" :key="index">
              <ProductCard :card="item" />
            </div>
          </div>
          <Pagination :prop-page="pagination" @pageData="productsPagination" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GuestSidebar from "../GuestSidebar";
import ProductCard from "../ProductCard";
import Pagination from "../Pagination";
export default {
  components: {
    GuestSidebar,
    ProductCard,
    Pagination
  },
  data() {
    return {
      products: [],
      pagination: {
        current_page: null,
        total_pages: null,
        has_pre: null,
        has_next: null
      },
      pageMaxCard: 9,
      brandProducts: [],
      showProducts: [],
      isLoading: false
    };
  },
  methods: {
    //取得所有商品資料
    getData() {
      const url = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/products/all`;
      let vm = this;
      vm.isLoading = true;
      vm.$http.get(url).then(response => {
        vm.products = response.data.products;
        console.log(response.data);
        vm.isLoading = false;
        vm.getBrandProductList();
      });
    },
    //撈所有資料到前端，依品牌分類商品
    getBrandProductList() {
      let vm = this;
      let brand = vm.$route.params.brand;
      if (brand === "全部品牌") {
        vm.brandProducts = vm.products.slice(0);
      } else {
        vm.brandProducts = vm.products.filter(item => brand === item.category);
      }
      vm.productsPagination();
    },
    //根據選擇品牌商品數量做分頁
    productsPagination(page = 1) {
      let vm = this;
      vm.pagination.total_pages = Math.ceil(
        vm.brandProducts.length / vm.pageMaxCard
      );
      vm.pagination.current_page = page;
      vm.pagination.current_page < vm.pagination.total_pages
        ? (vm.pagination.has_next = true)
        : (vm.pagination.has_next = false);
      1 < vm.pagination.current_page
        ? (vm.pagination.has_pre = true)
        : (vm.pagination.has_pre = false);
      vm.getCurrentProductList(page);
    },
    //根據當前頁數回傳對應商品，一頁最多9個商品
    getCurrentProductList(page) {
      let vm = this;
      let startcard = (page - 1) * 9;
      let endcard = page * 9;
      vm.showProducts = vm.brandProducts.slice(startcard, endcard);
    }
  },
  watch: {
    $route() {
      this.getBrandProductList();
    }
  },
  created() {
    this.getData();
  }
};
</script>