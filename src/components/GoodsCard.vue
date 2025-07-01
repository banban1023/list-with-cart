<template>
  <div class="goodsCard">
    <img :class="{ goods_img_mobile: true, goods_active: isBtnShow }" :src="require(`../assets/images/${item.image.mobile.split('/').pop()}`)" alt="">
    <img :class="{ goods_img_tablet: true, goods_active: isBtnShow }" :src="require(`../assets/images/${item.image.tablet.split('/').pop()}`)" alt="">
    <img :class="{ goods_img_desktop: true, goods_active: isBtnShow }" :src="require(`../assets/images/${item.image.desktop.split('/').pop()}`)" alt="">
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
  .goods_img_mobile {
    width: 328px;
    border-radius: 10px;
  }
  .goods_img_tablet {
    width: 427px;
    border-radius: 10px;
    display: none;
  }
  .goods_img_desktop {
    width: 252px;
    height: 240px;
    border-radius: 10px;
    display: none;
  }
  .goods_active {
    border: 2px solid rgb(200, 59, 14);
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
    cursor: pointer;
    font-weight: 700;
    &:hover {
      border: 1px solid rgb(200,59,14);
    }
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
      cursor: pointer;
      border-radius: 50%;
      background: url('../assets/images/icon-increment-quantity.svg') no-repeat center center;
    }
    .btn_sub {
      margin: 0 14px;
      width: 18px;
      height: 18px;
      cursor: pointer;
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

@media (min-width: 768px) {
  .goodsCard {
    height: 100%;
    width: 427px;
    .goods_img_mobile {
      display: none;
    }
    .goods_img_tablet {
      display: block;
      height: 100%;
    }
    .goods_active {
      width: 427px;
      height: 100%;
      border: 2px solid rgb(200, 59, 14);
      border-radius: 10px;
    }
    .goods_add {
      width: 160px;
      height: 44px;
      position: absolute;
      bottom: 90px;
    }
    .goods_msg {
      .goods_type {
        font-size: 16px;
      }
      .goods_name {
        font-size: 25px;
      }
      .goods_price {
        font-size: 18px;
      }
    }
  }
}

@media (min-width: 1250px) {
  .goodsCard {
    height: 380px;
    width: 251px;
    .goods_img_tablet {
      display: none;
    }
    .goods_img_desktop {
      display: block;
    }
    .goods_active {
      width: 251px;
      height: 240px;
    }
    .goods_add {
      bottom: 118px;
    }
    .goods_msg {
      .goods_type {
        font-size: 14px;
      }
      .goods_name {
        font-size: 16px;
        margin-top: 10px;
      }
      .goods_price {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
}
</style>
