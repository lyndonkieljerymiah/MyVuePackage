<template>
    <div>
        <div v-if="vtype === 'group'" class="input-group">
            <input type='text' class='form-control' name='name' :value="value" @input="update($event.target.value)">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click.prevent="onClick">
                    <i class="fa " :class="groupIcon"></i>
                </button>
            </span>
        </div>
        <input v-else type="vtype" :value="value" @input="update($event.target.value)" class="form-control"/>
    </div>
</template>

<script>
    export default {
        name: "vInputControl",
        props: ["vtype","value","name","groupIcon"],
        methods: {
            update(value) {
                this.$emit("input",value);
            },
            onClick() {
                this.$emit("click");
            }
        }
    }
</script>
