<template>
  <span>
    <el-input v-model="test"></el-input>
    <el-button type="primary" @click="clickHand">提交{{ type }}</el-button>
  </span>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { eventBus } from '@/utils/eventBus'
const props = withDefaults(
  defineProps<{
    type: string
    _data: any
    _isComplete: boolean
  }>(),
  {}
)

let test = ref('测试数据')

onMounted(() => {
  console.log('mounted')
  console.log(test.value)
})
onBeforeUnmount(() => {
  console.log('unmounted')
})

const clickHand = () => {
  // if (!test.value) {
  //   return ElMessage.warning('请输入内容')
  // }
  eventBus.emit('addMessage', test.value)
}
</script>

<style lang="scss" scoped></style>
