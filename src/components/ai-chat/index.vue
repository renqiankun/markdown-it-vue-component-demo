<template>
  <aiChat v-if="a" v-model="messages"></aiChat>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import aiChat from './Chat.vue'
import { sleepHand } from '@/utils'
import { eventBus } from '@/utils/eventBus'
import teleportWrap from './teleport-wrap.vue'
let dialogVisible = ref(false)

let messages = ref<Array<any>>([
  {
    role: 'assistant',
    useReasoner: false,
    content: ``,
    reasoning_content: ''
  }
])

onMounted(() => {
  init()
  initEventHand()
})
const initEventHand = () => {
  eventBus.on('addMessage', (data: any) => {
    console.log('addMessage', data)
  })
}
const init = async () => {
  dialogVisible.value = true

  let list = ` 前置文本<my-component> { "type": "Hello" } </my-component>
<my-component> { "message": "Hello" } </my-component>

<my-component>
 { "message": "Hello" } 
</my-component>


 前置文本 前置文本
  `
//   \`\`\`html
//     <my-component>console.log('hello');</my-component>
// \`\`\`
//   后置文本 后置文本 后置文本 后置文本 后置文本 后置文本 
   
  //  ::: my-component {input{name:'a'},date:{name:'b'}}:::

  //   let list = `请填写数据
  //  :::my-component {input{name:'a'},date:{name:'b'}}:::
  //  你好
  //  你好
  //  你好
  //  你好
  //  你好
  //  `

  console.log(list.length)
//  messages.value[0].content += list
  for (var i of list.split('')) {
    await sleepHand(30)
    messages.value[0].content += i
  }
  //  messages.value[0].content = list
}

let a = ref(true)

setTimeout(() => {
  // a.value = false
}, 1000 * 5)

defineExpose({
  init
})
</script>

<style lang="scss" scoped></style>
