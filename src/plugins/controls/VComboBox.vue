<template>
    <select class="form-control" :value="value"  @change="onChange($event.target.value)">
        <option v-if="includeDefault" value="">--Select--</option>
        <option v-for="(option,index) in options" :value="option[keyValue]" :key="index">{{option[keyText]}}</option>
    </select>
</template>

<script>

export default {
    name: "vComboBox",
    props: {
        options: Array,
        dvalue: "",
        dtext: "",
        includeDefault: false,
        value: ""
    },
    methods: {
        onChange(value) {
             this.$emit('input', value);
        }
    },
    computed: {
        keyValue() {
            return this.dvalue || "value";
        },
        keyText() {
            return this.dtext || "text";
        }
    }
}
</script>
