<template>
  <nav class="navbar navbar-default" :class="navClass">
      <div class="container-fluid">
          <div class="navbar-header">
              <a href="#" class="btn btn-info" @click="closeClick()"><i class="fa fa-bars"></i></a>
          </div>
      </div>
  </nav>
</template>

<script>
    export default {
        name: "vNavbar",
        props: {
            navClass: "",
            value: false
        },
        methods: {
            closeClick() {
                const value = this.value === false ? true : false;
                this.$emit("input",value)
            }
        }

    }
</script>