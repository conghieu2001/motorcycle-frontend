import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'


const app = createApp(App)

app.use(bootstrap)
app.use(router)

app.mount('#app')
