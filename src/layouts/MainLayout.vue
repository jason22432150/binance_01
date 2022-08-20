<template>
  <q-layout view="hHh LpR lfr">
    <q-header elevated class="qHeader bg-white text-white" height-hint="98">
      <a class="BinanceIcon" href="https://www.binance.com/zh-TW">
        <BinanceIcon/>
      </a>
      <div class="Menubar">
        <div class="FirstFloor">
          <div class="SecondFloor">
            <BxBxsGrid class="BxBxsGrid"/>
            <div class="caret-down-div">
              <q-icon
                name="fas fa-caret-down"
                size="6.75px"
                v-bind:style="{ color: '#707A8A', display: 'flex' }"
              />
            </div>
          </div>
        </div>
        <div class="FirstFloor text-black" v-for="site in sites" :key="site.text" @mouseover="site.menu=true"
             @mouseleave="site.menu=false">
          <div class="SecondFloor">
            <div class="BuyCoin">{{ site.text }}</div>
            <div v-if="site.message != ''" class="dialogue">{{ site.message }}</div>
            <div v-if="site.arrow == true" class="caret-down-div">
              <q-icon
                v-if="site.menu == false"
                name="fas fa-caret-down"
                size="6.75px"
                :style="{ color: '#707A8A', display: 'flex' }"
              />
              <q-icon
                v-if="site.menu == true"
                class="caret-up"
                name="fas fa-caret-down"
                size="6.75px"
                :style="{ color: '#707A8A', display: 'flex' }"
              />
              <div v-if="site.menu == true">
                <BuyCoin/>
              </div>

            </div>
          </div>
          <div class="menuPadding">

          </div>
        </div>
      </div>
      <div class="lt-sm">
        <q-btn
          class="headerMenuIcon"
          dense
          flat
          round
          icon="fas fa-menu"
          @click="toggleRightDrawer"
        />
      </div>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {ref} from 'vue';
import BinanceIcon from 'src/icons/BinanceLogo.vue';
import BxBxsGrid from 'src/icons/BxBxsGrid.vue';
import BuyCoin from 'src/components/headerLine/BuyCoin.vue';
import {MenuComponent} from 'src/stores/MenuComponents/MenuComponent';
import {storeToRefs} from 'pinia'

const teat = ref('red')

export default {
  components: {
    BinanceIcon,
    BxBxsGrid,
    BuyCoin,
  },
  setup() {
    const rightDrawerOpen = ref(false);
    const store = MenuComponent();
    const {sites} = storeToRefs(store);

    return {
      teat,
      sites,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style scoped>
@import '/src/layouts/MainLayout.scss';
</style>
