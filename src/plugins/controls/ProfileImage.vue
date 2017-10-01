<template>
    <div class="profile-sidebar">
        <!-- SIDEBAR USERPIC -->
        <div class="profile-userpic">
            <img :src="value.src" class="img-responsive" alt="">
        </div>
        <!-- END SIDEBAR USERPIC -->
        <!-- SIDEBAR USER TITLE -->
        <div class="profile-useremail">
            <div class="profile-useremail">
                {{value.name}}
            </div>
            <div class="profile-useremail">
                {{value.email}}
            </div>
        </div>
        <!-- END SIDEBAR USER TITLE -->
        <!-- SIDEBAR BUTTONS -->
        <div class="profile-userbuttons">
            <button type="button" class="btn btn-success btn-sm">Upload Picture</button>
        </div>
        <!-- END SIDEBAR BUTTONS -->
        <!-- SIDEBAR MENU -->
        <div class="profile-usermenu">
            <ul class="nav">
                <li v-for="(menu,index) in value.menus" :class="menu.default ? 'active' : ''" :key="index">
                    <a href="#" @click.prevent="menuClick(menu)"><i :class="menu.icon"></i> {{menu.name}}</a>
                </li>
            </ul>
        </div>
        <!-- END MENU -->
    </div>
</template>


<script>

export default {
    name: "profileImage",
    props: {
        value: Object
    },
    methods: {
        menuClick(menu) {
            _.forEach(this.value.menus,function(item) {
                item.default = false;
                console.log(item.default);
            });
            menu.default = true;
            console.log(menu);
            this.$emit("menuClick",menu);
        }
    }
}
</script>


