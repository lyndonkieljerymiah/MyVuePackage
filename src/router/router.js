import Vue from "vue";
import VueRouter from "vue-router";

import Hello from "../components/Hello.vue";
import TabExample from "../components/TabExample.vue";
import FormExample from "../components/FormExample.vue";


Vue.use(VueRouter);

const router = new VueRouter(
    {
        routes: [
            {
                name: 'home',
                path: '/',
                component: Hello
            },
            {
                name: 'tab',
                path: '/tab',
                component: TabExample
            },
            {
                name: 'form',
                path: '/form',
                component: FormExample
            }
        ]
    }
)


export default router;