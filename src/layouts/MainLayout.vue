<template>
  <HeaderMenu />
  <q-layout view="hHh LpR lfr">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import HeaderMenu from 'src/components/headerLine/MainLayout.vue';
// import BuyCoin from 'src/components/headerLine/MenuBuyCoin.vue';
// import { ref } from 'vue';
// import { MenuComponent } from 'src/stores/MenuComponents/MenuComponent';
// import { storeToRefs } from 'pinia';

export default {
  // name: 'main',
  components: {
    // BuyCoin,
    HeaderMenu,
  },
};
</script>

<style scoped>
@import '/src/layouts/MainLayout.scss';
</style>
