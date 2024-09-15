import './assets/css/GlobalStyle.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './routers'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
