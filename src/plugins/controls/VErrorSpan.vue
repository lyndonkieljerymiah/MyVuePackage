<template>
    <div v-show="get()">
        <span class="text-danger"><i class="fa fa-times-rectangle"></i><small>{{get()}}</small></span>
    </div>
</template>

<script>
    export default {
        name: "errorSpan",
        props: {
            value: Object,
            name: String
        },
        methods: {
            get() {
                return this.value.get(this.name)
            }
        }
    }
</script>