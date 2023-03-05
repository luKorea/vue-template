import type { App } from 'vue'
import { createPinia } from 'pinia'

export function registerPinia(app: App) {
  // 刷新页面初始化操作
  app.use(createPinia())
}
