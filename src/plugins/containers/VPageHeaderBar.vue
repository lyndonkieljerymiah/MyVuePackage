<template>
    <div class="page-header v-page-header-bar">
        <h3 class="title">{{title}}</h3>
        <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default" @click="onButtonClick('add')"><i class="fa fa-plus"></i> </button>
            <button type="button" class="btn btn-default" @click="onButtonClick('print')"><i class="fa fa-print"></i> </button>
        </div>
    </div>
</template>

<script>
export default {
  name: "vPageHeaderBar",
  props: ["title"],
  methods: {
      onButtonClick(value) {
          this.$emit('click',value);
      }
  }
}
</script>

<style scoped>
    .v-page-header-bar {
        position:relative;
    }
    .v-page-header-bar .btn-group {
        position: absolute;
        top:0;
        right: 0;
    }
</style>

