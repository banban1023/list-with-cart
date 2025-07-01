<template>
  <div class="cart_list">
    <h2 class="list_title">Your Cart({{totalCount}})</h2>
    <section class="list_empty" v-if="!totalCount">
      <img src="../assets/images/illustration-empty-cart.svg" alt="">
      <p class="list_empty_msg">Your added items will appear here</p>
    </section>
    <section class="list_all" v-else>
      <ul>
        <li v-for="(item, index) in cartList" :key="index">
          <div class="list_left">
            <h3 class="list_goodsName">{{item.name}}</h3>
            <p class="list_msg">
              <span class="count">{{item.quantity}}x</span>
              <span class="price">@${{Number(item.price).toFixed(2)}}</span>
              <span class="price_all">${{Number(item.price * item.quantity).toFixed(2)}}</span>
            </p>
          </div>
          <button class="list_delete" @click="deleteGoods(item.name)">delete</button>
        </li>
      </ul>
      <p class="order_total">
        Order Total
        <span class="total_count">
          ${{totalPrice}}
        </span>
      </p>
      <section class="delivery">
        <span class="icon_tree"></span>This is a&nbsp;<strong>carbon-neutral</strong>&nbsp;delivery
      </section>
      <button class="confirm_order" @click="showPopup">Confirm Order</button>
      <van-popup v-model="show" :position="popupPosition" :class="{ 'desktop-popup': isDesktop }">
        <img class="confirm_icon" src="../assets/images/icon-order-confirmed.svg" alt="">
        <h3 class="confirm_title">Order&nbsp;</h3>
        <h3 class="confirm_title">Confirmed</h3>
        <p class="confirm_context">We hope you enjoy your food!</p>
        <section class="confirm_list">
          <ul class="comfirm_ul">
            <li v-for="(item, index) in cartList" :key="index">
              <img class="confirm_thumbnail" :src="require(`../assets/images/${item.image.thumbnail.split('/').pop()}`)" alt="">
              <section class="confirm_msg">
                <p class="confirm_title_l">{{item.name}}</p>
                <span class="confirm_count">{{item.quantity}}x</span><span>@${{Number(item.price).toFixed(2)}}</span>
              </section>
              <div class="confirm_price">${{Number(item.price * item.quantity).toFixed(2)}}</div>
            </li>
            <p class="confirm_total">Order Total<span>${{totalPrice}}</span></p>
          </ul>
        </section>
        <button class="confirm_new" @click="newCart">Start New Order</button>
      </van-popup>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEmpty: false,
      show: false,
      isDesktop: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    deleteGoods (name) {
      this.$store.dispatch('cart/deleteGoods', name)
    },
    newCart () {
      this.show = false
      this.$store.dispatch('cart/clearCart')
    },
    checkScreenSize () {
      this.isDesktop = window.innerWidth > 1250
    }
  },
  computed: {
    cartList () {
      return this.$store.state.cart.cartList
    },
    totalPrice () {
      return this.$store.getters['cart/totalPrice']
    },
    totalCount () {
      return this.$store.getters['cart/totalCount']
    },
    popupPosition () {
      return this.isDesktop ? 'center' : 'bottom'
    }
  },
  mounted () {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkScreenSize)
  }
}
</script>

<style lang="less" scoped>
.cart_list {
  width: 328px;
  margin: 0 auto 25px;
  border-radius: 10px;
  background-color: #fff;
  padding: 25px;
  .list_title {
    color: @Red;
  }
  .list_empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: @Rose-500;
    font-weight: 500;
    font-size: 14px;
    padding-bottom: 18px;
    img {
      margin: 40px 0 16px;
    }
  }
  .list_all {
    ul {
      margin-top: 24px;
      li {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid hsla(14, 65%, 9%, 0.1);
        margin-bottom: 15px;
        .list_left {
          .list_goodsName {
            font-size: 14px;
            font-weight: 600;
          }
          .list_msg {
            color: @Rose-500;
            margin: 10px 0 17px;
            .count {
              color: @Red;
              font-weight: 700;
              margin-right: 20px;
            }
            .price_all {
              margin-left: 10px;
              font-weight: 600;
            }
            .price {
              width: 52px;
              display: inline-block;
            }
          }
        }
        .list_delete {
          display: block;
          width: 18px;
          height: 18px;
          border: 1px solid @Rose-500;
          border-radius: 10px;
          font-size: 0;
          cursor: pointer;
          background: url('../assets/images/icon-remove-item.svg') no-repeat center center;
        }
      }
    }
    .order_total {
      padding-top: 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .total_count {
        font-size: 25px;
        font-weight: 700;
      }
    }
    .delivery {
      width: 100%;
      height: 52px;
      background-color: @Rose-50;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 23px;
      border-radius: 10px;
      font-size: 14px;
      .icon_tree {
        background: url('../assets/images/icon-carbon-neutral.svg');
        display: block;
        width: 21px;
        height: 20px;
        margin-right: 10px;
      }
    }
    .confirm_order {
      width: 100%;
      height: 52px;
      margin-top: 25px;
      border-radius: 26px;
      color: #fff;
      background-color: @Red;
      border: none;
      font-size: 16px;
      &:hover{
        cursor: pointer;
        background-color: rgb(149,44,12);
      }
    }
    .van-popup--bottom {
      border-radius: 15px 15px 0 0;
      padding: 44px 25px 25px;
      .confirm_title {
        font-size: 40px;
      }
      .confirm_icon {
        margin-bottom: 23px;
      }
      .confirm_context {
        font-size: 16px;
        margin-top: 12px;
        color: hsl(12, 20%, 44%);
      }
      .confirm_list {
        background-color: @Rose-100;
        border-radius: 10px;
        .comfirm_ul {
          padding: 25px;
          margin-top: 34px;
          li {
            padding-bottom: 16px;
            .confirm_thumbnail {
              width: 49px;
              border-radius: 4px;
              margin-right: 15px;
            }
            .confirm_msg {
              flex: 1;
              .confirm_title_l {
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 10px;
              }
              .confirm_count {
                display: inline-block;
                color: @Red;
                font-weight: 600;
                width: 30px;
              }
            }
            .confirm_price {
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
        .confirm_total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          span {
            font-size: 25px;
            font-weight: 600;
          }
        }
      }
      .confirm_new {
        width: 100%;
        height: 54px;
        border-radius: 27px;
        line-height: 54px;
        border: none;
        margin-top: 30px;
        cursor: pointer;
        background-color: rgb(200,59,14);
        color: #fff;
        &:hover {
          background-color: rgb(149,44,12);
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .cart_list {
    width: 427px;
  }
}

@media (min-width: 1250px) {
  .cart_list {
    width: 385px;
    height: 100%;
    .list_all {
      margin-top: 0;
      .van-popup--center {
        width: 593px;
        border-radius: 15px;
        padding: 45px 41px 41px;
      .confirm_context {
        font-size: 16px;
        margin-top: 12px;
        color: hsl(12, 20%, 44%);
      }
        .confirm_list {
          margin-top: 0;
          background-color: @Rose-100;
          padding: 0 25px 35px;
          border-radius: 10px;
          .comfirm_ul {
            li {
              padding: 18px 0;
              .confirm_msg {
                margin-top: 0;
                font-size: 14px;
                .confirm_title_l {
                  margin-bottom: 10px;
                  font-weight: 600;
                }
                .confirm_count {
                  color: @Red;
                  font-weight: 600;
                  width: 30px;
                  display: inline-block;
                }
                span {
                  color: hsl(12, 20%, 44%);
                }
              }
              .confirm_thumbnail {
                width: 49px;
                border-radius: 4px;
                margin-right: 15px;
              }
              .confirm_price {
                font-size: 18px;
                font-weight: 500;
              }
            }
            .confirm_total {
              padding-top: 18px;
              display: flex;
              justify-content: space-between;
              font-size: 16px;
              span {
                font-size: 25px;
                font-weight: 600;
              }
            }
          }
        }
        .confirm_new {
          width: 100%;
          background-color: rgb(200,59,14);
          margin-top: 35px;
          border-radius: 27px;
          height: 54px;
          color: #fff;
          cursor: pointer;
          border: none;
          &:hover {
            background-color: rgb(149,44,12);
          }
        }
        .confirm_title {
          display: inline-block;
          font-size: 40px;
        }
        .confirm_icon {
          display: block;
          margin-bottom: 27px;
        }
      }
    }
    .list_empty {
      margin-top: 0;
    }
  }
}
</style>
