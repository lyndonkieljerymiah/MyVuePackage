<template>
  <nav class="navbar navbar-default" :class="navClass">
      <div class="container-fluid">
          <div class="navbar-header">
              <button href="#" class="btn btn-info" @click="closeClick()"><i class="fa fa-bars"></i></button>
                <a href="logo.url" class="nav-brand"/>
          </div>
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
                this.$emit("input",value)
            }
        }

    }
</script>