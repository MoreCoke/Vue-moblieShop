<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide
        class="bg-cover carousel-height"
        v-for="(item,index) in swiperData"
        :key="index"
        :style="item.imgpath"
      >
        <div class="ad-news justify-content-start align-items-center align-items-md-end">
          <div class="frosted-zone">
            <h2 class="headtitle">{{item.title}}</h2>
            <h5 class="subtitle">{{item.text}}</h5>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <section class="py-1 container-fluid">
      <a href="#" class="service" @click.prevent v-for="(item,index) in serviceItem" :key="index">
        <div class="service-item bg-cover" :style="item.imgpath">
          <div class="service-textzone">
            <h4 class="service-title">{{item.title}}</h4>
            <h5 class="service-subtitle">{{item.text}}</h5>
          </div>
        </div>
      </a>
    </section>
    <section class="bg-cover p-5" :style="bgc[0]">
      <div class="text-right">
        <div class="headtitle text-white">為你而活，非你莫屬</div>
        <div class="subtitle text-white">邀您一同共享跨世代的喜悅。</div>
      </div>
    </section>
    <section class="container-fluid mb-8">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="topic">最新商品</div>
          <div class="row">
            <div class="col-md-4" v-for="(item,index) in newProduct" :key="index">
              <a href="#" class="text-decoration-none" @click.prevent>
                <ad-product :adcard="item" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-success">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-5">
            <div class="topic">汰舊換新</div>
            <div class="row">
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
              <div class="col-4">
                <div class="renew-product">2</div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="renew">
              <div class="renew-imgzone">
                <div class="renew-img bg-cover"></div>
              </div>
            </div>
            <div class="topic">這裡總有款適合您的手機!</div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img class="renew-imgcenter" :src="bgc[1]" alt />
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <div class="py-5 renew-textzone">
                  <i class="fas fa-3x fa-user-md text-success"></i>
                  <h3>現場評估</h3>
                  <p>由我們專業人員評估您的舊手機使用狀態計算折舊。</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="py-5 renew-textzone">
                  <i class="fas fa-3x fa-hand-holding-usd text-success"></i>
                  <h3>現金折扣</h3>
                  <p>舊手機型號越新，折抵越高，最高可享$12,000!</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="py-5 renew-textzone">
                  <i class="fas fa-3x fa-diagnoses text-success"></i>
                  <h3>款式多樣</h3>
                  <p>安卓、蘋果手機通通都有，任君挑選!</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="py-5 renew-textzone">
                  <i class="fas fa-3x fa-child text-success"></i>
                  <h3>回收舊機</h3>
                  <p>我們會幫您的舊手機找到新的主人,或是送回原廠分解零件，環保利用!</p>
                </div>
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
        autoplay: {
          disableOnInteraction: false
        }
      },
      swiperData: [
        {
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1543409743-b5ed0eb0c5b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
          },
          title: "OPPO R17",
          text: "夜的美比白天溫柔，全面升級超有感。"
        },
        {
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551355738-1875b6664915?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80)"
          },
          title: "Google Pixel 3",
          text: "全新Google智慧助理隨你差遣。"
        },
        {
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1570976278927-39de20093775?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
          },
          title: "iPhone 11 Pro",
          text: "相機、顯示器、效能，一切如Pro其名。"
        },
        {
          imgpath: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551261752-c4d1f4faa041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
          },
          title: "Samsung Galaxy S10",
          text: "123度超廣角鏡頭，突破視野極限。"
        }
      ],
      bgc: [
        {
          backgroundImage:
            "url(" + require("@/assets/img/iPhone-11-Pro.jpg") + ")",
          backgroundAttachment: "fixed",
          height: "30vw"
        },
        require("@/assets/img/hweil_p30pro.png")
      ],
      serviceItem: [
        {
          imgpath: {
            backgroundImage: "url(" + require("@/assets/img/1.jpg") + ")"
          },
          title: "無線藍芽耳機",
          text: "輕便小巧，簡單生活。"
        },
        {
          imgpath: {
            backgroundImage: "url(" + require("@/assets/img/2.jpg") + ")"
          },
          title: "智慧手錶",
          text: "紀錄健康動起來!"
        },
        {
          imgpath: {
            backgroundImage: "url(" + require("@/assets/img/3.jpg") + ")"
          },
          title: "3C手機",
          text: "款式多樣，應有盡有。"
        },
        {
          imgpath: {
            backgroundImage: "url(" + require("@/assets/img/5.jpg") + ")"
          },
          title: "優惠折扣",
          text: "玩小遊戲抽折扣!"
        }
      ],
      newProduct: [
        {
          name: "iPhone 11 Pro",
          text: "後置三鏡頭 | 5.8 吋 OLED",
          imgpath: {
            backgroundImage:
              "url(" + require("@/assets/img/iphone11pro.jpg") + ")"
          },
          logo: {
            backgroundImage: "url(" + require("@/assets/img/apple.svg") + ")"
          }
        },
        {
          name: "Sony Xperia 5 ",
          text: "眼控對焦 | 八核心處理",
          imgpath: {
            backgroundImage:
              "url(" + require("@/assets/img/xperia-5-primary.png") + ")"
          },
          logo: {
            backgroundImage: "url(" + require("@/assets/img/sony.svg") + ")"
          }
        },
        {
          name: "Samsung Galaxy Note 10 Plus",
          text: "八核心處理器 | O 極限螢幕",
          imgpath: {
            backgroundImage:
              "url(" +
              require("@/assets/img/samsung_galaxy_note10_plus.jpg") +
              ")"
          },
          logo: {
            backgroundImage: "url(" + require("@/assets/img/samsung.svg") + ")"
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