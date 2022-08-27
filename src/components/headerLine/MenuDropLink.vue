<template>
  <a :class="mouse == true ? 'link_mouseover' : 'link_mouseleave'">
    <q-icon class="icon" name="fas fa-trailer" />
    <div class="menu-ctx">
      <div :style="{ display: 'flex' }">
        <div>{{ title }}</div>
        <div class="hot" v-if="hot == true">熱門</div>
      </div>
      <div :style="{ 'font-size': '12px' }">{{ expound }}</div>
    </div>
    <q-icon
      :class="mouse == true ? 'icon_arrow-show' : 'icon_arrow-noshow'"
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
  background: #f5f5f5;
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
  color: black;
}
.icon_arrow-show {
  color: #f0b90b;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  transform: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
.icon_arrow-noshow {
  color: #f0b90b;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  transform: all 0.1s linear;
  visibility: hidden;
}
.menu-ctx {
  margin: 0 16px 0 16px;
}

.hot {
  display: flex;
  position: relative;
  border-radius: 4px;
  margin-left: 8px;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 12px;
  line-height: 16px;
  background-color: #fcd535;
  color: #1e2329;
}
.hot::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  left: -3px;
  top: 2px;
  border-left: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid;
  border-right-color: #fcd535;
}
</style>
