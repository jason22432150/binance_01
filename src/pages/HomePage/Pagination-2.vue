<template>
  <div :style="{ padding: '80px 0 80px 0', 'border-radius': '24px 24px 0 0' }">
    <div
      :style="{
        padding: '0 24px 0 24px',
        margin: '0 124px 0 124px',
        // display: 'flex',
        // alignItems: 'center',
      }"
    >
      <div
        :style="{
          // padding: '0 24px 0 24px',
          // margin: '0 124px 0 124px',
          display: 'flex',
          alignItems: 'center',
          margin: '0 0 64px 0',
        }"
      >
        <div class="upTitle">熱門加密貨幣</div>
        <div :style="{ flex: 1 }"></div>

        <div class="yellow_Action" :style="{ display: 'flex' }">
          <div>查看更多</div>
          <q-icon
            :style="{ margin: '0 0 0 4px' }"
            name="fa-solid fa-angle-right"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.upTitle {

  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
}
.redmore {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.yellow_Action:hover {
  color: #f0b90b;
}
</style>
