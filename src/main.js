import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/vendors.css'
import './assets/css/custom.css'
import './assets/js/jquery-3.7.0.min.js'
// import './assets/js/common_scripts_min.js'
// import './assets/js/functions.js'
// import './assets/js/notify_func.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
