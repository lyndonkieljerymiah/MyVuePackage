<template>
    <div id="admin-panel" :class="{'nav-close': isNavClose}">
        <v-sidebar :menus="menus" :logo="logo"></v-sidebar>
        <div class="container-fluid" style="padding:0">
            <v-navbar nav-class="navbar-static-top" v-model="isNavClose" :logo="logo">
                <template slot="logging">
                    <li>
                        <a href="#">
                            <i class="fa fa-bell"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-envelope-open"></i>
                        </a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i> {{user.name}}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click.prevent="onLoggingClick('logout')">Log-out</a></li>
                        </ul>
                    </li>
                </template>
            </v-navbar>
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>
<script>

import VNavbar from "../controls/VNavbar.vue"
import VSidebar from "../containers/VSidebar.vue"

export default {
    name: "vAdminPanel",
    props: {
        menus: {},
        logo: {},
        user: {}
    },
    components: { VNavbar, VSidebar },
    data() {
        return {
            isNavClose: false
        }
    },
    methods: {
        onLoggingClick(value) {
            this.$emit("buttonClick",value);
        }
    }
}
</script>
