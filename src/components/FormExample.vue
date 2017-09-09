<template>
    <div class="container">
        <v-form class="form-horizontal">
            <div class="row">
                <div class="col-md-10">
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
                    </v-panel>
                </div>
            </div>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            company: "",
            regId: "",
            type: "",
            lookups: [
                { value: "company", text: "Company" },
                { value: "individual", text: "Individual" }
            ]
        }
    }
}
</script>