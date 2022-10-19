<template>
  <q-header> </q-header>
  <div class="pagination-1">
    <div :style="{ display: 'flex', 'justify-content': 'center' }">
      <div :style="{ width: '560px', margin: '0 106px 0 0' }">
        <h1 class="title">在幣安購買、交易和持有超過 350 種加密貨幣</h1>
        <div :style="{ margin: '48px 0 0 0', width: '384px' }">
          <a href="test" class="btn">透過電子郵件或電話註冊</a>
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
          <a href="test" class="btn" :style="{ 'background-color': '#FAFAFA' }"
            >使用Google繼續</a
          ><a
            href="test"
            class="btn"
            :style="{ margin: '16px 0 0 0', 'background-color': '#FAFAFA' }"
            >使用Apple繼續</a
          >
          <div>
            <a href="" :style="{ 'box-sizing': 'border-box' }"
              >cxsertyujkmnbv</a
            >
          </div>
        </div>
      </div>
      <div>
        <img
          :style="{
            height: '443.7px',
            filter: 'drop-shadow(0 0 0.2rem rgb(0,0,0,0.1))',
          }"
          src="src/assets/image/foreground-image-light.png"
          alt=""
        />
      </div>
    </div>
    <div :style="{ display: 'flex' }">
      <div>123</div>
      <div>222</div>
      <div>333</div>
      <div>444</div>
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
  height: 752px;
  padding: '80px  24px 0 24px';
  /* align-items: center; */
  padding: 80px 0 0 0;
  background-color: aquamarine;
}
.pagination-2 {
  height: 100vh;
  background-color: aqua;
}
.title {
  font-size: 40px;
  font-weight: 900;
  line-height: 48px;
  margin: 0;
}
.btn {
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  /* box-sizing: border-box; */
}
.line-style {
  height: 1px;
  flex: 1;
  background-color: #eaecef;
  box-sizing: border-box;
}
</style>
