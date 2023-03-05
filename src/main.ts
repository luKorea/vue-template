import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { registerPinia } from './stores'

import 'normalize.css'
import './assets/main.css'

const app = createApp(App)

registerPinia(app)
app.use(router)

app.mount('#app')
