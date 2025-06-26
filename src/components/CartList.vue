<template>
  <div class="cart_list">
    <h2 class="list_title">Your Cart(0)</h2>
    <section class="list_empty" v-if="isEmpty">
      <img src="../assets/images/illustration-empty-cart.svg" alt="">
      <p class="list_empty_msg">Your added items will appear here</p>
    </section>
    <section class="list_all" v-else>
      <ul>
        <li v-for="item in 3" :key="item">
          <div class="list_left">
            <h3 class="list_goodsName">Classic Tiramisu</h3>
            <p class="list_msg">
              <span class="count">1x</span>
              <span class="price">@$5.50</span>
              <span class="price_all">$5.50</span>
            </p>
          </div>
          <button class="list_delete"></button>
        </li>
      </ul>
      <p class="order_total">
        Order Total
        <span class="total_count">
          $46.50
        </span>
      </p>
      <section class="delivery">
        <span class="icon_tree"></span>This is a&nbsp;<strong>carbon-neutral</strong>&nbsp;delivery
      </section>
      <button class="confirm_order" @click="showPopup">Confirm Order</button>
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">内容</van-popup>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEmpty: false,
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
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
          }
        }
        .list_delete {
          display: block;
          width: 18px;
          height: 18px;
          border: 1px solid @Rose-500;
          border-radius: 10px;
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
      width: 282px;
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
      width: 282px;
      height: 52px;
      margin-top: 25px;
      border-radius: 26px;
      color: #fff;
      background-color: @Red;
      border: none;
      font-size: 16px;
    }
  }
}
</style>
