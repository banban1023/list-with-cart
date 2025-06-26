<template>
  <div class="cart">
    <main>
      <h1 class="cart_title">Desserts</h1>
      <GoodsCard v-for="item in 2" :key="item"></GoodsCard>
    </main>
    <CartList></CartList>
  </div>
</template>

<script>
import CartList from './components/CartList.vue'
import GoodsCard from './components/GoodsCard.vue'
export default {
  name: 'ListCart',
  components: {
    GoodsCard, CartList
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/index.css';
</style>
