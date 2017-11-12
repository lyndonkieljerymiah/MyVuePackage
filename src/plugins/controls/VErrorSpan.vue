<template>
    <div v-show="value.get(name)">
        <span class="text-danger"><i class="fa fa-times-rectangle"></i><small>{{value.get(name)}}</small></span>
    </div>
</template>

<script>
    import {EventBus} from "../../events/eventbus";

    export default {
        name: "vErrorSpan",
        props: {
            value: Object,
            name: String
        },
        data() {
            return {
                errorText: ''
            }
        },
        beforeMount() {

        },
        computed: {
            valueText() {
                return this.value.get(this.name)
            }
        }
    }
</script>