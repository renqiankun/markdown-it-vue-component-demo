<template>
  <!-- 聊天预览 -->
  <div class="preview-wrap">
    <div class="preview-item" v-for="(item, index) in props.messages" :key="index">
      <div style="text-align: right" v-if="item.role == 'user'">{{ item.content }}</div>
      <!-- 回答 -->
      <chatAnswer v-else :data="item.content" :receiveLoading="receiveLoading && index + 1 === messages?.length">
      </chatAnswer>
    </div>
  </div>
</template>

<script setup lang="ts">
import chatAnswer from './chat-answer.vue'
const props = withDefaults(
  defineProps<{
    messages: any[]
    /**接受流中 */
    receiveLoading?: boolean
  }>(),
  {}
)

</script>

<style lang="scss" scoped>
.preview-wrap {
  width: 100%;
  .preview-item {
    width: 100%;
  }

  ::v-deep(.reasoning-content) {
    .md-editor-preview {
      color: var(--answer-reason-text-color);
      font-size: 14px;
    }
  }
}
.is-loading--box {
  height: 40px;
  box-sizing: border-box;
  padding-top: 10px;
}

.default-wrap {
  text-align: center;
  padding-top: 80px;
  font-size: 18px;
  color: #dfdfdf;
}
</style>
