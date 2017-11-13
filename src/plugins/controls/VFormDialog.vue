<template>
    <form @submit.prevent="onSubmit" @keydown="value.clear($event.target.name)">
        <div :id="modalId" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" :class="modalSize" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="close(false)" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">{{dialogTitle}}</h4>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <div>
                            <button type="button" class="btn btn-default" @click="close(false)"><i class="fa fa-close"></i>Close</button>
                            <button type="submit" class="btn btn-primary"><i class="fa fa-save fa-fw" :class="{'fa-spinner fa-spin':loadingAnimation}"></i> {{saveLabel}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import {EventBus} from "./../../events/eventbus";

    export default {
        name: "vFormDialog",
        data() {
            return {
                modalSize: ''
            }
        },
        props: {
            modalId: String,
            dialogTitle: String,
            size: String,       //optional
            label: String,      //optional
            value: Object,
            isEncType: Boolean,
            loadingAnimation: Boolean
        },
        beforeMount() {
            if(this.size === 'lg') {
                this.modalSize = 'modal-lg';
            }
            else {
                this.modalSize = 'modal-md';
            }
            $("#" + this.modalId).modal({backdrop: false, show: false, keyboard: false});
        },
        mounted() {
            EventBus.$on(this.modalId+".show",() => {
                this.show();
            });

            EventBus.$on(this.modalId+".close",() => {
                this.close();
            });
        },
        methods: {
            onSubmit(result) {
                this.$emit("submit");
            },
            show() {
                $("#" + this.modalId).modal('show');
                this.value.clearAll();
                this.$emit("onShow");
            },
            close() {
                $("#" + this.modalId).modal('hide');
                this.value.clearAll();
                this.$emit("onClose");
            }
        },
        computed: {
            saveLabel() {
                return this.label || 'Save';
            }
        }
    };
</script>
