<template>
  <HeaderMenu />
  <q-layout view="hHh LpR lfr">
    <!-- <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered>
    </q-drawer> -->

    <q-page-container>
      <div :style="{ 'font-size': '10px' }">12321313212332112</div>

      <div :style="{ 'font-size': '10px' }">12321313212332112</div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderMenu from 'src/components/headerLine/headerLine';
// import BuyCoin from 'src/components/headerLine/MenuBuyCoin.vue';
// import { ref } from 'vue';
// import { MenuComponent } from 'src/stores/MenuComponents/MenuComponent';
// import { storeToRefs } from 'pinia';

export default {
  // name: 'main',
  components: {
    // BuyCoin,
    // HeaderMenu,
  },
};
</script>

<style scoped>
@import '/src/layouts/MainLayout.scss';
</style>
