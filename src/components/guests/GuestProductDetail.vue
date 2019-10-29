<template>
  <div class="container-fluid my-4">
    <div class="vld-parent">
      <loading :active.sync="isLoading"></loading>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="detail-img bg-cover" :style="{backgroundImage:`url(${product.imgUrl})`}"></div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-lg-8">
            <div class="detail-title mb-3">
              <div class="detail-brand mr-3" :style="classifyBrand()" v-if="product.category"></div>
              {{product.title}}
            </div>
            <div class="detail-badge badge-primary p-2 mb-3">
              <i class="fas fa-thumbs-up"></i>
              商品特色
            </div>
            <p class="detail-content mb-3" v-if="product.content" v-html="regexpSetting"></p>
            <p class="detail-sale mb-3">
              特價: {{product.price | currency}}
              <span>原價: {{product.origin_price | currency}}</span>
            </p>
            <div class="d-flex">
              <div class="cart-group mr-3">
                <a href="#" @click.prevent="qty=qty-1" :class="{'cart-disable': qty<2}">
                  <i class="fas fa-minus"></i>
                </a>
                <input type="number" v-model.number="qty" />
                <a href="#" @click.prevent="qty=qty+1">
                  <i class="fas fa-plus"></i>
                </a>
              </div>
              <button class="btn btn-primary" @click="addToCart(product['id'],qty)">
                <i class="fas fa-shopping-cart pr-2"></i>加入購物車
              </button>
            </div>
          </div>
          <div class="col-lg-4">購物車</div>
        </div>
      </div>
    </div>
    <!-- <div v-for="(item,index) in random" :key="`random-${index}`">
      <ProductCard :card="item"/>
    </div> -->
    
  </div>
</template>
<script>
import ProductCard from '../ProductCard';
export default {
  components:{
    ProductCard,
  },
  data() {
    return {
      product: {},
      random:[],
      qty: 1,
      isLoading: false
    };
  },
  methods: {
    getRandomProduct() {
      let url = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/products/all`;
      let vm = this;
      vm.$http.get(url).then(response => {
        let products = response.data.products;
        let len = vm.product.length;
        while (vm.random.length <3) {
          let r = Math.floor(Math.random()*len);
          if(vm.random.indexOf(products[r]) === -1){
            vm.random.push(products[r]);
          }
          console.log(r);
        }
      });
      console.log('random done');
    },
    getProductDetail() {
      let vm = this;
      let id = vm.$route.params.id;
      let url = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.isLoading = true;
      vm.$http.get(url).then(response => {
        vm.product = response.data.product;
        vm.isLoading = false;
      });
    },
    classifyBrand() {
      return {
        backgroundImage:
          "url(" + require(`@/assets/img/${this.product.category}.svg`) + ")"
      };
    },
    addToCart(id, qty) {
      let vm = this;
      let url = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/cart`;
      const cart = {
        product_id:id,
        qty
      };
      vm.isLoading=true;
      vm.$http.post(url,{data:cart}).then(response =>{
        console.log(response);
        vm.isLoading=false;
      });
    },
    getCartData(){
      let vm = this;
      let url = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.$http.get(url).then(response =>{
        // console.log('購物車資料',response);
      })
    }
  },
  computed: {
    regexpSetting() {
      return this.product.content.replace(/\n/g, "<br>");
    }
  },
  created() {
    this.getProductDetail();
    this.getCartData();
    // this.getRandomProduct();
  }
};
</script>