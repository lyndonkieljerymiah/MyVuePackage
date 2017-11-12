<template>
    <form @submit.prevent="onSubmit" @keydown="value.clear($event.target.name)">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: "vForm",
        props: {
          value: Object
        },
        methods: {
            onSubmit() {
                this.$emit('submit');
            }
        }
    }
</script>