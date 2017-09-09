<template>
  <div id="app">
    <v-admin-panel :menus="menus" :logo="logo" :user="user" @buttonClick="onClick">
      <router-view></router-view>
    </v-admin-panel>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      menus: {
        contract: {
          icon: "fa-certificate",
          name: "Contract",
          visible: true
        }
      },
      logo: {
        url: "http://localhost:8081",
        imgPath: "http://localhost:8081/imgs/logo.png",
        title: "Admin Panel"
      },
      user: {
        name: "admin"
      }
    }
  },
  methods: {
    onClick(value) {
      console.log(value);
    }
  }
}
</script>

<style lang="scss">
@import "./sass/app";
</style>
