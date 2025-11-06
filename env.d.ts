/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'nprogress'
declare module 'minimatch'

declare module 'element-resize-detector'
declare module 'time-moment-picker'

declare module 'amfe-flexible';
declare module 'postcss-pxtorem';

declare module 'docxtemplater-image-module-free'
declare module 'file-saver'


declare module 'markdown-it-link-attributes'

declare module 'markdown-it-container'