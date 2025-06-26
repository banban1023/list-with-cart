<template>
  <div class="goodsCard">
    <img class="goods_img" src="@/assets/images/image-waffle-mobile.jpg" alt="">
    <button class="goods_add"><span class="goods_cart_icon"></span>Add to Cart</button>
    <div class="goods_msg">
      <p class="goods_type">Waffle</p>
      <p class="goods_name">Waffle with Berries</p>
      <p class="goods_price">
        $6.50
      </p>
    </div>
  </div>
</template>

<script>
export default {

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
