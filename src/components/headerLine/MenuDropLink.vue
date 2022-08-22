<template>
  <a :style="{ padding: '16px', display: 'flex' }">
    <div class="icon"></div>
    <div class="menu-ctx">
      <div>
        <div>{{ title }}</div>
      </div>
      <div>{{ expound }}</div>
    </div>
    <q-icon
    :style="{color: '#F0B90B'}"
      class="icon_arrow"
      v-if="hot == true"
      name="fas fa-arrow-right-long"
    >
    </q-icon>
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    link: { type: String, default: '', required: false },
    icon: { type: String, default: '', required: false },
    title: { type: String, default: '', required: false },
    expound: { type: String, default: '', required: false },
    hot: { type: Boolean, default: true, required: false },
  },
  // props: ['link', 'icon', 'title', 'message', 'hot'],
  // setup: {
  //   return: { props },
  // },
});
</script>
<!-- <card :title="item.title" :img="item.imgUrl" /> -->
<style scoped>
.icon {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
}
.icon_arrow {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  transform: all 0.1s linear;
}
.menu-ctx {
  margin: 0 16px 0 16px;
}
</style>
