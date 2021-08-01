import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'
import {connect} from "./util/ws"

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify,{ iconfont: 'mdiSvg' });
Vue.use(VueResource)


const opts = {}



new Vue({
    el: '#app',
    render: a => a(App),

})
