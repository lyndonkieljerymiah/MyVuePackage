<template>
    <div class="profile-sidebar">
        <!-- SIDEBAR USERPIC -->
        <div class="profile-userpic">
            <img :src="profile.src" class="img-responsive" alt="">
        </div>
        <!-- END SIDEBAR USERPIC -->
        <!-- SIDEBAR USER TITLE -->
        <div class="profile-useremail">
            <div class="profile-useremail">
                {{profile.name}}
            </div>
            <div class="profile-useremail">
                {{profile.email}}
            </div>
        </div>
        <!-- END SIDEBAR USER TITLE -->
        <!-- SIDEBAR BUTTONS -->
        <div class="profile-userbuttons" v-if="isUploadVisible">
            <button type="button" class="btn btn-success btn-sm">Upload Picture</button>
        </div>
        <!-- END SIDEBAR BUTTONS -->
        
        <!-- SIDEBAR MENU -->
        <div class="profile-usermenu" v-if="menus">
            <ul class="nav">
                <li v-for="(menu,index) in menus" :class="menu.default ? 'active' : ''" :key="index">
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
        profile: Object,
        isUploadVisible: Boolean,
        menus: Array
    },
    methods: {
        menuClick(menu) {
            _.forEach(this.value.menus,function(item) {
                item.default = false;
            });
            menu.default = true;
            this.$emit("menuClick",menu);
        }
    }
}
</script>


