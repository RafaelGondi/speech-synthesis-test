import { createApp } from 'vue'
import App from './App.vue'
import Cuida from "@sysvale/cuida";
import '@sysvale/cuida/dist/style.css';

createApp(App).use(Cuida).mount('#app')
