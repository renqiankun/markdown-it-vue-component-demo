<template>
  <el-image
    style="width: 100px; height: 100px"
    :src="url"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="[url]"
    show-progress
    :initial-index="4"
    fit="cover"
    :key="url"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    _isComplete?: boolean
    _attrs: any
  }>(),
  {}
)

let url = computed(() => {
  console.log(props._isComplete, props._attrs?.src)
  return props._isComplete ? props._attrs?.src : ''
})
</script>

<style lang="scss" scoped></style>
