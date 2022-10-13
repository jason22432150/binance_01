<template>
  <q-layout view="hHh LpR lfr">
    <div></div>
    <q-header elevated class="qHeader bg-white text-white" height-hint="98">
      <a class="BinanceIcon" href="https://www.binance.com/zh-TW">
        <BinanceIcon />
      </a>
      <div class="Menubar">
        <div
          class="FirstFloor"
          v-for="site in sites"
          :key="site.text"
          @mouseover="site.menu = true"
          @mouseleave="site.menu = false"
        >
          <div class="SecondFloor">
            <div
              v-if="site.text == 'BxBxsGrid'"
              :style="{ height: '24px', width: '24px' }"
            >
              <BxBxsGrid
                v-if="site.menu == false"
                :style="{ color: '#1E2329' }"
                class="BxBxsGrid"
              />
              <BxBxsGrid
                v-if="site.menu == true"
                :style="{ color: '#C99400' }"
                class="BxBxsGrid"
              />
            </div>
            <div v-if="site.text != 'BxBxsGrid'" class="BuyCoin">
              <div v-if="site.menu == true" :style="{ color: '#C99400' }">
                {{ site.text }}
              </div>
              <div v-if="site.menu == false" :style="{ color: '#1E2329' }">
                {{ site.text }}
              </div>
            </div>
            <div
              v-if="site.message != ''"
              class="dialogue"
              :style="{ color: '#1E2329' }"
            >
              {{ site.message }}
            </div>
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
                <BuyCoin
                  v-if="site.text == '買幣'"
                  :style="{ transform: site.transform }"
                />
                <MenuTrade
                  v-if="site.text == '交易'"
                  :style="{ transform: site.transform }"
                />
                <MenuDerivatives
                  v-if="site.text == '衍生品'"
                  :style="{
                    position: 'fixed',
                    inset: '0px auto auto 0px',
                    transform: site.transform,
                  }"
                />
              </div>
            </div>
          </div>
          <div class="menuPadding"></div>
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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import BinanceIcon from 'src/icons/BinanceLogo.vue';
import BxBxsGrid from 'src/icons/BxBxsGrid.vue';
import BuyCoin from 'src/components/headerLine/MenuBuyCoin.vue';
import MenuTrade from 'src/components/headerLine/MenuTrade.vue';
import MenuDerivatives from 'src/components/headerLine/MenuDerivatives.vue';
import { MenuComponent } from 'src/stores/MenuComponents/MenuComponent';
import { storeToRefs } from 'pinia';

export default {
  components: {
    BinanceIcon,
    BxBxsGrid,
    BuyCoin,
    MenuTrade,
    MenuDerivatives,
  },
  setup() {
    const rightDrawerOpen = ref(false);
    const store = MenuComponent();
    const { sites } = storeToRefs(store);

    return {
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
