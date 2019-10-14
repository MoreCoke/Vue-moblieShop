<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <a href="#" class="text-decoration-none" @click.prevent>
          <div class="bg-cover carousel-1 carousel-height"></div>
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="#" class="text-decoration-none" @click.prevent>
          <div class="bg-cover carousel-2 carousel-height"></div>
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="#" class="text-decoration-none" @click.prevent>
          <div class="bg-cover carousel-3 carousel-height">
            <div class="pl-6 pt-8 text-white">
              <h2 class="headtitle">iPhone 11 Pro</h2>
              <h5 class="subtitle">相機、顯示器、效能，一切如Pro其名。</h5>
            </div>
          </div>
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import $ from "jquery";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
        // autoplay: {
        //   disableOnInteraction: false
        // }
      }
    };
  }
  // methods: {
  //   navAnimation() {
  //     $(window).scroll(function() {
  //       $("nav").toggleClass("scrolled", $(this).scrollTop() > 20);
  //     });
  //   }
  // },
  // mounted() {
  //   this.navAnimation();
  // }
};
</script>