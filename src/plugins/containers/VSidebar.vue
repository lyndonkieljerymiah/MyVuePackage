<template>
    <div class="nb-sidebar cold-md-2">
        <div class="nb-sidebar-brand">
            <div class="wrapper">
                <a :href="logo.url" id="logo">
                    <img :src="logo.imgPath" class="circle"> {{logo.title}}
                </a>
            </div>
        </div>
        <ul class="nb-sidebar-nav">
            <li class="dropdown" v-for="(menu, menuIndex) in menus" v-if="menu.visible" :key="menuIndex">
                <a href="#" class="dropdown-toggle" ref="dropdown" @click.prevent>
                    <i class="fa fa-lg" :class="menu.icon" aria-hidden="true"></i> &nbsp;
                    <span>{{menu.name}}</span>
                    <span class="pull-right">
                        <i class="fa fa-chevron-down fa-fw"></i>
                    </span>
                </a>
                <ul class="nb-dropdown-menu" role="menu">
                    <li v-for="(submenu,submenuIndex) in menu.submenus" :class="submenu.name==='$separator' ? 'separator' : 'sub-menu'" :key="submenuIndex">
                        <span v-if="submenu.disabled" class="nav-disabled">{{submenu.name}}</span>
                        <router-link v-if="submenu.name !== '$separator' && !submenu.disabled" :to="submenu.url">{{submenu.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "vSidebar",
    props: ['logo', 'menus'],
    mounted() {

        let dropdowns = this.$refs.dropdown;
        $('.nb-dropdown-menu').hide();
        $(dropdowns).removeClass('active');
        $(dropdowns).on('click', function(e) {
            $('.nb-dropdown-menu').hide();
            $(dropdowns).parent().removeClass('active');
            let parent = $(this).parent();
            parent.addClass('active');
            parent.find('ul').show();

        });
    }
}
</script>


<style>

</style>