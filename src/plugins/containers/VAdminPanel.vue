<template>
    <div id="admin-panel" :class="{'nav-close': isNavClose}">
        <v-sidebar :menus="menus" :logo="logo"></v-sidebar>
        <div class="container-fluid" style="padding:0">
            <v-navbar nav-class="navbar-static-top" v-model="isNavClose">
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
        logo: {}
    },
    components: { VNavbar, VSidebar },
    data() {
        return {
            isNavClose: false
        }
    }
}
</script>


<style lang="sass">
    @import "../../sass/admin-panel"
</style>