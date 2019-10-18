<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="bg-cover carousel-1 carousel-height">
        <!-- <a href="#" class="text-decoration-none" @click.prevent>
          <div class="bg-cover carousel-1"></div>
        </a> -->
      </swiper-slide>
      <swiper-slide class="bg-cover carousel-2 carousel-height">
        <!-- <a href="#" class="text-decoration-none" @click.prevent>
          <div class="bg-cover carousel-2"></div>
        </a> -->
      </swiper-slide>
      <swiper-slide class="bg-cover carousel-3 carousel-height">>
        <!-- <a href="#" class="text-decoration-none" @click.prevent>
          <div class="bg-cover carousel-3">
            <div class="pl-6 pt-8 text-white">
              <h2 class="headtitle">iPhone 11 Pro</h2>
              <h5 class="subtitle">相機、顯示器、效能，一切如Pro其名。</h5>
            </div>
          </div>
        </a> -->
        <div class="pl-6 pt-8 text-white">
              <h2 class="headtitle">iPhone 11 Pro</h2>
              <h5 class="subtitle">相機、顯示器、效能，一切如Pro其名。</h5>
            </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <section class="bg-cover px-3 py-5" :style="bgc[0]">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h2 class="text-center text-white font-weight-bold">最新商品</h2>
            <div class="row">
              <div class="col-md-4" v-for="(item,index) in newProduct" :key="index">
                <a href="#" class="text-decoration-none" @click.prevent>
                  <ad-product :adcard="item" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4">
      <div class="container">
        <h2 class="text-center font-weight-bold">服務類別</h2>
        <div class="row no-gutters">
          <div class="col-lg-3">
            <div class="row no-gutters">
              <div class="col-6 col-md-12 p-1">
                <a href="#" @click.prevent>
                  <div class="service-wrap">
                    <div class="service-cover"></div>
                    <div
                      class="other-service bg-cover"
                      style="background-image:url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
                    ></div>
                    <div class="service-text">售後服務</div>
                  </div>
                </a>
              </div>
              <div class="col-6 col-md-12 p-1">
                <a href="#" @click.prevent>
                  <div class="service-wrap">
                    <div class="service-cover"></div>
                    <div
                      class="other-service bg-cover"
                      style="background-image:url(https://images.unsplash.com/photo-1451958683454-47a7f2adc864?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80)"
                    ></div>
                    <div class="service-text">手機配件</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="d-flex flex-row flex-lg-column w-100 h-100 p-1">
              <a href="#" @click.prevent class="w-100 h-100">
                <div class="service-wrap">
                  <div class="service-cover"></div>
                  <div
                    class="main-service bg-cover"
                    style="background-image:url(https://images.unsplash.com/photo-1570125517852-0f82b4c1f74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)"
                  ></div>
                  <div class="service-text">所有手機</div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="row no-gutters">
              <div class="col-6 col-md-12 p-1">
                <a href="#" @click.prevent>
                  <div class="service-wrap">
                    <div class="service-cover"></div>
                    <div
                      class="other-service bg-cover"
                      style="background-image:url(https://images.unsplash.com/photo-1511885912508-36118d773e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80)"
                    ></div>
                    <div class="service-text">領取優惠</div>
                  </div>
                </a>
              </div>
              <div class="col-6 col-md-12 p-1">
                <a href="#" @click.prevent>
                  <div class="service-wrap">
                    <div class="service-cover"></div>
                    <div
                      class="other-service bg-cover"
                      style="background-image:url(https://images.unsplash.com/photo-1528475775637-ed767f76e6b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)"
                    ></div>
                    <div class="service-text">顧客評價</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import $ from "jquery";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import adProduct from "../AdProductCard";
export default {
  components: {
    swiper,
    swiperSlide,
    adProduct
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // autoplay: {
        //   disableOnInteraction: false
        // }
      },
      bgc: [
        {
          backgroundImage:
            "url(" + require("@/assets/img/iPhone-11-Pro.jpg") + ")",
          backgroundAttachment: "fixed"
        },
        {
          backgroundImage:
            "url(" + require("@/assets/img/iphone11pro.jpg") + ")"
        }
      ],
      newProduct: [
        {
          name: "iPhone 11 Pro",
          text: "裝逼神器，窮人炫富的最好方式",
          imgpath: {
            backgroundImage:
              "url(" + require("@/assets/img/iphone11pro.jpg") + ")"
          }
        },
        {
          name: "Sony Xperia 5 ",
          text: "裝逼神器，窮人炫富的最好方式",
          imgpath: {
            backgroundImage:
              "url(" + require("@/assets/img/sony_xperia5.jpg") + ")"
          }
        },
        {
          name: "Samsung Galaxy Note 10 Plus",
          text: "裝逼神器，窮人炫富的最好方式",
          imgpath: {
            backgroundImage:
              "url(" +
              require("@/assets/img/samsung_galaxy_note10_plus.jpg") +
              ")"
          }
        }
      ],
      serviceItem: [
        {
          name: "科技新聞",
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
          }
        },
        {
          name: "手機周邊",
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1451958683454-47a7f2adc864?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80)"
          }
        },
        {
          name: "主賣商品",
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1570125517852-0f82b4c1f74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)"
          }
        },
        {
          name: "優惠折扣",
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511885912508-36118d773e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80)"
          }
        },
        {
          name: "顧客評價",
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1570503795330-7c6fd74cd950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80)"
          }
        }
      ],
      products: []
    };
  },
  methods: {
    getData() {
      const url = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/products/all`;
      const vm = this;
      vm.$http.get(url).then(response => {
        console.log(response);
        vm.products = response.data.products;
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>