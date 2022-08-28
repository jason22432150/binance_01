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
import { storeToRefs } from 'pinia';
import MenuDropLinkVue from './MenuDropLink.vue';

// export default {

// }
</script>

