<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <profile-image :profile="profile" ></profile-image>
            </div>
            <div class="col-md-9">
                <v-tab-group v-model="currentTab">
                    <v-tab v-for="tab in tabs" :tab-id="tab.key" :key="tab.key">{{tab.label}}</v-tab>
                </v-tab-group>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { key: "prod", label: "Profile" },
        { key: "geno", label: "Villa History" },
        { key: "com", label: "Bill" }
      ],
      profile: {
        code: "C-100245000",
        src: "static/images/nopic.png",
        email: "arnold.mercado@hotmail.com"
      },
      menus: [
        {
          name: "Account Settings",
          link: "#",
          icon: "glyphicon glyphicon-home",
          default: true
        },
        { name: "Calendar", link: "#", icon: "glyphicon glyphicon-ok" },
        { name: "Help", link: "#", icon: "glyphicon glyphicon-flag" },
        { name: "Help", link: "#", icon: "glyphicon glyphicon-flag" }
      ],
      currentTab: "prod"
    };
  }
};
</script>
