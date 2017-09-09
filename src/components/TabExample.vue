<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <v-panel head-icon="fa fa-user-circle-o" header="TENANT REGISTRATION">
                    <v-tab-group v-model="currentTab">
                        <v-tab v-for="tab in tabs" :tab-id="tab.key" :key="tab.key">{{tab.label}}</v-tab>
                    </v-tab-group>
                </v-panel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { key: 0, label: "Tab 1" },
                { key: 1, label: "Tab 2" },
                { key: 2, label: "Tab 3" }
            ],
            currentTab: 0
        }
    }
}
</script>
