<template>
    <div class="product-card">
      <div class="product-img" :style="card.imgpath"></div>
      <div class="product-title">{{card.name}}</div>
      <div class="product-text">{{card.text}}</div>
      <a href="#" class="btn btn-primary">瞭解更多</a>
    </div>
</template>
<script>
export default {
  props:["card"],
}
</script>