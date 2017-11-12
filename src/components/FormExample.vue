<template>
    <div class="container">
        <form-dialog-example></form-dialog-example>
        <button class="btn btn-info" @click="open">Open Dialog</button>
    </div>
</template>

<script>

require("../assets/nopic.png");
import FormDialogExample from "./FormDialogExample.vue";
import {EventBus} from "../events/eventbus";

export default {
    components: {
        FormDialogExample
    },
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
    },
    methods:{
        open() {
            EventBus.$emit("profile.show");
        }
    }
}
</script>