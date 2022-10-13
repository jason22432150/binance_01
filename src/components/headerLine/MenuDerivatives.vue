<template>
  <div class="DerivativesList text-black">
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
import { storeToRefs } from 'pinia';
import MenuDropLink from './MenuDropLink.vue';
import { MenuDerivativesList } from 'src/stores/MenuComponents/MenuDerivativesList';

export default {
  name: 'MenuDerivatives',
  components: { MenuDropLink },
  setup() {
    const store = MenuDerivativesList();
    const { sites } = storeToRefs(store);
    return { sites };
  },
};
</script>

<style scoped>
.DerivativesList {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #ffffff;
  position: relative;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 8%);
  overflow: hidden;
  min-width: 200px;
  max-width: 400px;
  border-radius: 0 0 8px 8px;
  z-index: 1;
}
.Floor {
  padding: 16px 16px 16px 16px;
}
</style>
