// 全局注册的组件没有类型提示 以下为解决办法
// import rSelectDict from '@/components/r-select-dict/index.vue' // 权限判断指令

declare module 'vue' {
  export interface GlobalComponents {
  }
}
export {}
