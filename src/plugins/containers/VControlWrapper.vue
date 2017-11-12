<template>
    <div :class="{'form-group' : !unGroup  }">
        <label v-if="label"
               :class="propertyObject.labelClass" >{{label}}<span v-if="required" class="text-danger">*</span>:
        </label>
        <div :class="propertyObject.controlClass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vControlWrapper",
        props: {
            label: String,
            propertyObject: Object,
            required: Boolean,
            customDisplay: String,
            unGroup: Boolean,
            alignRight: Boolean
        },
        beforeMount() {

            if(this.propertyObject.labelClass === undefined) {
                this.propertyObject.labelClass = 'col-md-3';
            }

            if(this.propertyObject.alignRight) {
                this.propertyObject.labelClass = this.propertyObject.labelClass + ' text-right';
            }

            if(this.propertyObject.controlClass === undefined) {
                this.propertyObject.controlClass = 'col-md-9';
            }

        }

    }
</script>