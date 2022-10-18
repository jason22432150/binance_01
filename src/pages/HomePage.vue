<template>
  <q-header> </q-header>
  <div class="pagination-1">
    <div :style="{ padding: '0 24px 0 24px' }">
      <div :style="{ padding: '80px 0 0 0' }">
        <div :style="{ width: '560px', margin: '0 106px 0 0' }">
          <h1 class="title">在幣安購買、交易和持有超過 350 種加密貨幣</h1>
          <div >
            <a href="test" class="btn-email">透過電子郵件或電話註冊</a>
            <div
              :style="{
                display: 'flex',
                'align-items': 'center',
                margin: '16px 0 16px 0',
                width: '384px',
              }"
            >
              <div class="line-style" />
              <div :style="{ margin: '0 48px 0 48px' }">或</div>
              <div class="line-style" />
            </div>
            <div><a href="" :style="{ 'box-sizing': 'border-box' }"></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination-2">
    <div class="test">123321132</div>
    <div class="test">123321132</div>
    <div class="test">123321132</div>
    <div class="test">123321132</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {
  // },
});
</script>

<style scoped>
.pagination-1 {
  height: 100vh;
  background-color: aquamarine;
}
.pagination-2 {
  height: 100vh;
  background-color: aqua;
}
.title {
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  margin: 0;
}
.pagination-1 {
  padding: 80px 0 0 0;
}
.btn-email {
  border-radius: 4px;
  background-color: #fcd535;
  width: 100%;
  min-height: 24px;
  color: #181a20;
  text-align: center;
  word-break: keep-all;
  min-height: 24px;
  min-width: 80px;
  line-height: 24px;
  padding: 12px 24px 12px 24px;
  font-weight: 500;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  /* box-sizing: border-box; */
}
.line-style {
  height: 1px;
  flex: 1;
  background-color: #eaecef;
  box-sizing: border-box;
}
</style>
