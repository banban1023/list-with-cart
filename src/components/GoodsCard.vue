<template>
  <div class="goodsCard">
    <img class="goods_img" :src="require(`../assets/images/${item.image.mobile.split('/').pop()}`)" alt="">
    <!-- <button class="goods_add" @click="addCart"><span class="goods_cart_icon"></span>Add to Cart</button> -->
    <button class="goods_add" v-if="!isBtnShow" @click="addCart"><span class="goods_cart_icon"></span>Add to Cart</button>
    <div
      class="goods_add"
      :style="{ backgroundColor: 'rgb(200, 59, 14)' }"
      v-else
    >
      <button class="btn_sub" @click.stop="decrement">-</button>
      <p class="count">{{ cartItem.quantity }}</p>
      <button class="btn_add" @click.stop="increment">+</button>
    </div>
    <div class="goods_msg">
      <p class="goods_type">{{item.category}}</p>
      <p class="goods_name">{{item.name}}</p>
      <p class="goods_price">
        ${{item.price}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('cart/getCartList', this.item)
      console.log(this.item)
    },
    increment () {
      this.$store.dispatch('cart/incrementQuantity', this.item.name)
    },
    decrement () {
      this.$store.dispatch('cart/decrementQuantity', this.item.name)
    }
  },
  computed: {
    cartItem () {
      return this.$store.state.cart.cartList.find(item => item.name === this.item.name) || { quantity: 0 }
    },
    isBtnShow () {
      return this.cartItem.quantity > 0
    }
  }
}
</script>

<style lang="less" scoped>
.goodsCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  position: relative;
  height: 344px;
  .goods_img {
    width: 328px;
    border-radius: 10px;
  }
  .goods_add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 44px;
    position: absolute;
    bottom: 108px;
    border-radius: 22px;
    border: 1px solid @Rose-400;
    background-color: #fff;
    font-weight: 700;
    .goods_cart_icon {
      display: block;
      width: 21px;
      height: 20px;
      background: url('../assets/images/icon-add-to-cart.svg') no-repeat;
      margin-right: 8px;
    }
    .btn_add {
      margin: 0 14px;
      width: 18px;
      height: 18px;
      font-size: 0;
      border: 1px solid #fff;
      border-radius: 50%;
      background: url('../assets/images/icon-increment-quantity.svg') no-repeat center center;
    }
    .btn_sub {
      margin: 0 14px;
      width: 18px;
      height: 18px;
      font-size: 0;
      border: 1px solid #fff;
      border-radius: 50%;
      background: url('../assets/images/icon-decrement-quantity.svg') no-repeat center center;
    }
    .count {
      flex: 1;
      text-align: center;
      color: #fff;
      font-weight: normal;
      font-size: 15px;
      line-height: 44px;
    }
  }
  .goods_msg {
    align-self: start;
    margin-top: 37px;
    .goods_type {
      font-size: 14px;
      color: @Rose-400;
    }
    .goods_name {
      font-weight: 600;
      margin-top: 5px;
    }
    .goods_price {
      margin-top: 5px;
      font-weight: 600;
      color: @Red;
    }
  }
}
</style>
