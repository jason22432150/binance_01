<template>
  <div class="BuyCoin text-black">
    <div class="firstFloor-up">
      <div class="pay-Way">支付方式為</div>
      <div :style="{ flex: '1' }"></div>
      <div>
        <div :style="{ color: '#707A8A', display: 'flex', padding: '12px' }">
          <q-icon
            name="fas fa-euro-sign"
            class="text-yellow bg-indigo-10"
            :style="{
              'border-radius': '50%',
              height: '20px',
              width: '20px',
            }"
          />

          <div :style="{ padding: '0 8px 0 8px' }">EUR</div>
          <q-icon
            name="fas fa-caret-right"
            :style="{ width: '18px', height: '18px', color: '#707ABA' }"
          >
          </q-icon>
        </div>
      </div>
    </div>
    <div class="firstFloor-down">
      <MenuDropLink
        v-for="site in sites"
        :key="site.title"
        :hot="site.hot"
        :title="site.title"
        :expound="site.expound"
        :icon="f"
        :mouse="site.mouse"
        @mouseover="site.mouse = true"
        @mouseleave="site.mouse = false"
      />
    </div>
  </div>
</template>

<script>
import MenuDropLink from 'src/components/headerLine/MenuDropLink.vue';
import { BuyCoinsList } from 'src/stores/MenuComponents/BuyCoinsList';
import { storeToRefs } from 'pinia';

export default {
  name: 'BuyCoin',
  components: { MenuDropLink },
  setup() {
    const store = BuyCoinsList();
    const { sites } = storeToRefs(store);
    return {
      sites,
    };
  },
};
</script>

<style scoped>
.BuyCoin {
  background-color: #ffffff;
  position: fixed;
  inset: 0px auto auto 0px;
  transform: translate3d(210px, 64px, 0px);
  max-width: 400px;
  z-index: 1;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
  border-radius: 0 0 10px 10px;
}

.firstFloor-up {
  align-items: center;
  display: flex;
  margin-left: 16px;
  font-size: 14px;
}
.firstFloor-down {
  padding: 0 16px 16px 16px;
}

.pay-Way {
  font-size: 14px;
  margin-left: 8px;
  margin-right: 16px;
}
</style>
