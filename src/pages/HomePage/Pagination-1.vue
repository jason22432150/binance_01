<template>
  <q-header> </q-header>
  <div class="pagination-1">
    <div :style="{ 'max-width': '1248px', margin: '0 auto 0 auto' }">
      <div :style="{ display: 'flex', 'justify-content': 'center' }">
        <div :style="{ width: '560px', margin: '0 106px 0 0' }">
          <h1 class="title">在幣安購買、交易和持有超過 350 種加密貨幣</h1>
          <div :style="{ margin: '48px 0 0 0', width: '384px' }">
            <a href="test" class="btn"
              ><q-icon
                name="img:src/assets/human-icon.svg"
                class="P1-btn-icon"
              />透過電子郵件或電話註冊</a
            >
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
            <a
              href="test"
              class="btn"
              :style="{ 'background-color': '#eaecef' }"
            >
              <q-icon
                class="P1-btn-icon"
                name="img:src/assets/image/google-icon.png"
              />使用Google繼續</a
            ><a
              href="test"
              class="btn"
              :style="{ margin: '16px 0 0 0', 'background-color': '#eaecef' }"
              ><q-icon
                class="P1-btn-icon"
                name="img:src/assets/apple-dark-icon.svg"
              />使用Apple繼續</a
            >
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
      <div
        :style="{
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '80px 0 80px 0',
        }"
      >
        <div :style="{ width: '25%' }">
          <div
            :style="{
              padding: '0 40px 0 40px',
            }"
          >
            <div class="P1-down-title">760 億美元</div>
            <div class="P1-down-content">幣安交易所的 24 小時交易量</div>
          </div>
        </div>
        <div :style="{ width: '25%' }">
          <div
            :style="{
              padding: '0 40px 0 40px',
            }"
          >
            <div class="P1-down-title">350+</div>
            <div class="P1-down-content">上市的加密貨幣</div>
          </div>
        </div>
        <div :style="{ width: '25%' }">
          <div
            :style="{
              padding: '0 40px 0 40px',
            }"
          >
            <div class="P1-down-title">9000 萬</div>
            <div class="P1-down-content">信任幣安的註冊用戶</div>
          </div>
        </div>
        <div :style="{ width: '25%' }">
          <div
            :style="{
              padding: '0 40px 0 40px',
            }"
          >
            <div class="P1-down-title">&lt;0.10%</div>
            <div class="P1-down-content">最低的交易手續費</div>
          </div>
        </div>
      </div>
    </div>
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
  box-sizing: border-box;
  height: 752px;
  padding: '80px  24px 0 24px';
  padding: 80px 0 0 0;
  background-color: #fafafa;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: -24px;
  background-image: url('src/assets/image/web-background-image.png');
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
.P1-down-container {
  margin-left: -40px;
  margin-right: -40px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0 80px 0;
}
.P1-down-title {
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
}
.P1-down-content {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.P1-btn-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  box-sizing: border-box;
}
</style>
