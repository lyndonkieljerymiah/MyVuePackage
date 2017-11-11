<template>
    <div class="group-button">
        <button type="button" class="btn btn-default" :disabled="param.previous_page === null" @click="onClick(param.first_page)">
            <i class="fa fa-angle-double-left"></i>
        </button>
        <button type="button" class="btn btn-default" :disabled="param.previous_page === null" @click="onClick(param.previous_page)">
            <i class="fa fa-angle-left"></i>
        </button>
        <input text="text" disabled v-bind:value="currentPage"/>
        <button type="button" class="btn btn-default" @click="onClick(param.next_page)" :disabled="param.next_page === null">
            <i class="fa fa-angle-right"></i>
        </button>
        <button type="button" class="btn btn-default" @click="onClick(param.last_page)" :disabled="param.next_page === null">
            <i class="fa fa-angle-double-right"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        props: ['param'],
        data() {
            return {
                total: 1,
            }
        },
        methods: {
            onClick(step) {
                this.$emit('click',step);
            }
        },
        computed: {
            currentPage() {
                return this.param.current_page;
            }
        }
    }
    

</script>


<style scope>
    .group-button .btn {
        border-radius: 0;
    }

    .group-button .btn:first-child {
        border-top-left-radius: 5px !important;
        border-bottom-left-radius: 5px !important;
    }

    .group-button .btn:last-child {
        border-top-right-radius: 5px !important;
        border-bottom-right-radius: 5px !important;
    }

    .group-button input {
        height: 30px;
        width:40px;
        text-align: center;
        line-height: 14px;
    }
</style>