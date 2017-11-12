export const toggleModal = {
    data() {
        return {
            toggle: false
        }
    },
    beforeMount() {
        this.open();
    },
    methods: {
        openDialog() {
            this.toggle = true;
        },
        closeDialog() {
            this.toggle = false;
        },
        toggleDialog() {
            this.toggle = !this.toggle;
        }
    },
    watch: {
        toggle(nv) {
            if(!nv) this.close();
        }
    }
}

