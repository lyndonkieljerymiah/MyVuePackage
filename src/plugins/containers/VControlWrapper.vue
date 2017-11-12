<template>
    <div :class="{'form-group' : !unGroup  }">
        <label v-if="label"
               :class="internalProperty.labelClass + ' ' + internalProperty.align" 
               >{{label}}:<span v-if="required" class="text-danger">*</span>
        </label>
        <div :class="internalProperty.controlClass ">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {copiedValue} from "../../supports/helper";

    export default {
        name: "vControlWrapper",
        data() {
            return {
                internalProperty: {
                    labelClass: 'col-md-3',
                    controlClass: 'col-md-9',
                    align: 'text-right'
                }
            }
        },
        props: {
            label: String,
            propertyObject: Object,
            required: Boolean,
            customDisplay: String,
            unGroup: Boolean,
            alignRight: Boolean
        },
        beforeMount() {
            if(this.propertyObject) {
                copiedValue(this.propertyObject,this.internalProperty);
            }
        }

    }
</script>