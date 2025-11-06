<template>
  <template v-for="comp in activeComponents" :key="comp.placeholderId">
    <!-- 当 canAttach=false 时，teleport 会自动回收组件，不销毁实例 -->
    <teleport :to="comp.placeholderId" :disabled="!comp.canAttach">
      <component :is="comp.component" v-bind="comp.props" />
    </teleport>
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch, markRaw } from 'vue'
import myComponent from './chat-preview/my-component.vue'

// ======= 数据结构 =======
interface TeleportComp {
  placeholderId: string
  component: any
  props?: Record<string, any>
  canAttach: boolean
}

const activeComponents = ref<TeleportComp[]>([])

// ======= DOM 监听核心 =======
let observer: MutationObserver | null = null
const markdownRootSelector = '#markdown-root' // 你的渲染区域根节点选择器（务必改成你的实际容器）
let containerEl: HTMLElement | null = null

function setupObserver() {
  if (observer) observer.disconnect()
  if (!containerEl) return

  observer = new MutationObserver(() => {
    updateTeleportAttachStates()
  })

  observer.observe(containerEl, {
    childList: true,
    subtree: true
  })
}

async function updateTeleportAttachStates() {
  requestAnimationFrame(() => {
    activeComponents.value.forEach((comp) => {
      comp.canAttach = false
    })
    requestAnimationFrame(() => {
      activeComponents.value.forEach((comp) => {
        const targetExists = !!document.querySelector(comp.placeholderId)
          comp.canAttach = targetExists
          // console.log(
          //   `[teleport] ${targetExists ? '✅重新附着' : '⛔脱离'} → ${comp.placeholderId}`
          // )
      })
    })
  })
}

// ======= 数据模拟 =======
let modelValue = defineModel()

watch(
  () => modelValue.value,
  async () => {
    // 每次流式片段到达时，检测目标更新
    await updateTeleportAttachStates()
  },
  { deep: true }
)

onMounted(() => {
  containerEl = document.querySelector(markdownRootSelector)
//   setupObserver()

  // 模拟渲染出组件列表
  setTimeout(() => {
    activeComponents.value = [
      {
        placeholderId: '#md-custom-component-1_1-3',
        component: markRaw(myComponent),
        canAttach: false
      }
    ]
  }, 300)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>
