<template>
  <div class="Trade text-black">
    <div class="Floor">
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
import { MenuTradeList } from 'src/stores/MenuComponents/MenuTrade';
import MenuDropLink from './MenuDropLink.vue';
import { storeToRefs } from 'pinia';

export default {
  components: { MenuDropLink },

  setup() {
    const store = MenuTradeList();
    const { sites } = storeToRefs(store);
    return {
      sites,
    };
  },
};
</script>
<style scoped>
.Trade {
  background-color: #ffffff;
  position: fixed;
  inset: 0px auto auto 0px;
  transform: translate3d(210px, 64px, 0px);
  max-width: 400px;
  z-index: 1;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
}
.Floor {
  padding: 16px 16px 16px 16px;
}
</style>
