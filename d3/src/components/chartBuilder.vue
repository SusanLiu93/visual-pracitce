<template>
  <div class="builder-wrap">
    <color-builder></color-builder>
    <line-builder></line-builder>
    <area-builder></area-builder>
    <arc-builder></arc-builder>
  </div>
</template>
<script>
import colorBuilder from './chartBuilder/color.vue';
import lineBuilder from './chartBuilder/line.vue';
import areaBuilder from './chartBuilder/area.vue';
import arcBuilder from './chartBuilder/arc.vue';
export default {
  name: 'chartBuilder',
  components: {
    colorBuilder,
    lineBuilder,
    areaBuilder,
    arcBuilder
  },
};
</script>
