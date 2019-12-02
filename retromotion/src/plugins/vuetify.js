import Vue from "vue";
import Vuetify from "vuetify/lib";
import VueMq from 'vue-mq'

Vue.use(Vuetify);
Vue.use(VueMq,{
    breackpoints:{
        sm:450,
    }
})

export default new Vuetify({});
