<template>
  <div class="card-wrap">
    <el-input v-model="data"></el-input>
    <el-input style="margin-top: 10px;" v-model="attrs"></el-input>
    <el-button style="margin-top: 20px" type="primary" @click="clickHand"
      >提交
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
const props = withDefaults(
  defineProps<{
    type?: any
    _isComplete?: boolean
    _attrs?: any
  }>(),
  {}
)

let data = ref('')
let attrs = ref('')

watch(
  () => props._isComplete,
  (newVal) => {
    if (newVal) {
      data.value = 'type为：' + props.type
      attrs.value = '接受的属性为：' + JSON.stringify(props._attrs)
    }
  },
  {
    immediate: true
  }
)
onMounted(() => {
  console.log('mounted')
})
onBeforeUnmount(() => {
  console.log('unmounted')
})

const clickHand = () => {
  ElMessage.success(data.value)
}
</script>

<style lang="scss" scoped>
.card-wrap {
  display: block;
  max-width: 400px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
