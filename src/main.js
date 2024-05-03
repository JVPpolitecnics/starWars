import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import itemById from './components/itemById.vue'
import 'bootstrap/dist/css/bootstrap.css' 
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
createApp(App).use(bootstrap).mount('#app')
createApp(itemById).mount('#itemById')