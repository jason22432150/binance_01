<template>
  <a class="link" :class="mouse == true ? 'link_mouseover':'link_mouseleave'">
    <div class="icon"></div>
    <div class="menu-ctx">
      <div :style="{ display: 'flex' }">
        <div>{{ title }}</div>
        <div class="hot" v-if="hot == true">熱門</div>
      </div>
      <div>{{ expound }}</div>
    </div>
    <q-icon
      :style="{ color: '#F0B90B' }"
      class="icon_arrow"
      name="fas fa-arrow-right-long"
    />
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
    hot: { type: Boolean, default: false, required: false },
    mouse: { type: Boolean, default: false, required: false },
  },
  // props: ['link', 'icon', 'title', 'message', 'hot'],
  // setup: {
  //   return: { props },
  // },
});
</script>
<!-- <card :title="item.title" :img="item.imgUrl" /> -->
<style scoped>
.link_mouseover {
  padding: 16px;
  display: flex;
  border-radius: 8px;
  padding: 16px;
  background: #F5F5F5;
}
.link_mouseleave {
  padding: 16px;
  display: flex;
  border-radius: 8px;
  padding: 16px;
}
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
.hot {
}
</style>
