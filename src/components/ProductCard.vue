<template>
  <div class="product-card">
    <div class="product-brand bg-cover" :style="classifyBrand(card['category'])"></div>
    <div class="product-img" :style="{backgroundImage:`url(${card.imgUrl})`}"></div>
    <div class="product-title">
      {{card.title}}
      <div class = "product-type">{{card.unit}}</div>
    </div>
    <div class="product-textzone">
      <div><small>原價 : </small><span class="price-origin">{{card.origin_price | currency}}</span></div>
      <div class="price-sale"><small>特價 : </small>{{card.price | currency}}</div>
    </div>
    <a href="#" class="product-btn btn-primary">瞭解更多</a>
  </div>
</template>
<script>
export default {
  props: ["card"],
  methods: {
    classifyBrand(brand) {
      return {
        backgroundImage: "url("+require(`@/assets/img/${brand}.svg`)+")",
      }
    }
  }
};
</script>