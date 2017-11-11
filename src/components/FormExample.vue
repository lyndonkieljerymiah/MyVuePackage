<template>
    <div class="container">
        <v-form class="form-horizontal">
            <div class="row">
                <div class="col-md-8">
                    <v-panel header="Tenant Form">
                        <v-control-wrapper label="Tenant Type" label-class="col-md-3 text-right" :required="true">
                            <v-combo-box v-model="type" :options="lookups"></v-combo-box>
                        </v-control-wrapper>
                        <v-control-wrapper label="Full Name / Company" label-class="col-md-3 text-right" :required="true">
                            <v-input-control v-model="name"></v-input-control>
                        </v-control-wrapper>
                        <v-control-wrapper label="Employer / Rep. " label-class="col-md-3 text-right" :required="true">
                            <v-input-control v-model="name"></v-input-control>
                        </v-control-wrapper>
                        <v-control-wrapper label="ID" label-class="col-md-3 text-right" :required="true">
                            <v-input-control v-model="name" vtype="group" group-icon="fa-search"></v-input-control>
                        </v-control-wrapper>
                        <v-control-wrapper label="Country" label-class="col-md-3 text-right" :required="true">
                            <v-dynamic-combo v-model="country" :items="countries" item-text="text" item-value="value" ></v-dynamic-combo>
                        </v-control-wrapper >
                        <v-control-wrapper label="Country" label-class="col-md-3 text-right" :required="true">
                            
                        </v-control-wrapper >
                    </v-panel>
                </div>
            </div>
        </v-form>
    </div>
</template>

<script>

require("../assets/nopic.png");
export default {
    data() {
        return {
            name: "",
            company: "",
            country: "",
            regId: "",
            type: "",
            cDate: moment(),
            lookups: [
                { value: "company", text: "Company" },
                { value: "individual", text: "Individual" }
            ],
            countries: [
                {value: "phil", text: "Philippines"},
                {value: "usa", text: "USA"}
            ]
        }
    }
}
</script>