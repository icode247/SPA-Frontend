import { createApp } from 'vue'
import App from './App.vue'
import * as apolloProvider from './components/config/apolloConfig'
import * as routerConfig from './components/config/routerConfig'

const app =  createApp(App);

app.use(apolloProvider.provider)
app.use(routerConfig.router)
app.mount('#app')
