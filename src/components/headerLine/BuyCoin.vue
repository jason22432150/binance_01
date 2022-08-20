<template>
  <div class="BuyCoin">
    <div class="firstFloor-up">
      <div class="pay-Way">
        支付方式為
      </div>
      <div>
        <div :style="{ color: '#707A8A', display: 'flex' }">

        </div>
      </div>
    </div>
    <div class="firstFloor-down"></div>
  </div>
</template>

<script>
export default {
  name: 'BuyCoin'
}
</script>

<style scoped>
.BuyCoin {
  background-color: #ffffff;
  position: fixed;
  inset: 0px auto auto 0px;
  transform: translate3d(210px, 64px, 0px);
  max-width: 400px;
  z-index:1 ;
}

.firstFloor-up {
  align-items: center;
  display: flex;
  margin-left: 16px;
  font-size: 14px;
}

.pay-Way {
  font-size: 14px;
  margin-left: 8px;
  margin-right: 16px;
}
</style>
