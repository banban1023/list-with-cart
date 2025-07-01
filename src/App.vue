<template>
  <div class="cart">
    <div class="container">
      <section>
        <h1 class="cart_title">Desserts</h1>
        <main>
          <GoodsCard v-for="(item, index) in goodsList" :key="index" :item="item"></GoodsCard>
        </main>
      </section>
      <CartList></CartList>
    </div>
  </div>
</template>

<script>
import data from './data/data.json'
import CartList from './components/CartList.vue'
import GoodsCard from './components/GoodsCard.vue'
export default {
  name: 'ListCart',
  components: {
    GoodsCard, CartList
  },
  data () {
    return {
      goodsList: []
    }
  },
  methods: {
    getGoodsList () {
      this.goodsList = data
      console.log(this.goodsList)
    }
  },
  created () {
    this.getGoodsList()
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/index.css';
</style>
