<template>
    <nav class="navbar navbar-default" :class="navClass">
        <div class="container-fluid">
            <div class="navbar-header">
                <button href="#" class="btn btn-info navbar-btn pull-left" @click="closeClick()">
                    <i class="fa fa-bars"></i>
                </button>
                <a href="logo.url" class="navbar-brand">{{logo.title}}</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                 <slot name="logging"></slot>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "vNavbar",
    props: {
        navClass: "",
        value: false,
        logo: {}
    },
    methods: {
        closeClick() {
            const value = this.value === false ? true : false;
            this.$emit("input", value)
        }
    }

}
</script>

<style scoped>
    .navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {
        margin-left: 0;
    }
</style>