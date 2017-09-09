import Vue from 'vue';
import Vuex from 'vuex';

import liveviews from "./liveviews";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        liveviews,
    }

});

