import Vue from "vue";
import VueRouter from "vue-router";

import Hello from "../components/Hello.vue";
import TabExample from "../components/TabExample.vue";
import FormExample from "../components/FormExample.vue";
import GridExample from "../components/GridExample.vue";
import ProfileExample from "../components/FullProfileExample";
import LiveViewExample from "../components/LiveViewExample";


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
                name: 'profile',
                path: '/profile/:userId',
                component: ProfileExample
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
            },
            {
                name: "grid",
                path: "/grid",
                component: GridExample
            },
            {
                name: "liveview",
                path: "/liveview",
                component: LiveViewExample
            }
        ]
    })


export default router;