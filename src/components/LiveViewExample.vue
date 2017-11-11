<template>
    <div>
        <v-page-header-bar title="Live View Example" @click="onClick"></v-page-header-bar>
        <v-full-search :config="config" v-model="property"></v-full-search>
        <v-live-view :grid="gridView"></v-live-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      property: "",
      config: {
        api: "http://localhost:8081/api/api_property",
        source: "villa_location",
        keyValue: "code",
        keyText: "name"
      },
      gridView: {
        columns: [
          {
            name: "villa_no",
            column: "Villa No",
            style: "width:10%",
            class: "text-center",
            filter: true
          },
          { name: "full_location", column: "Location", filter: true },
          {
            name: "electricity_no",
            column: "Electricity No",
            class: "text-center"
          },
          { name: "water_no", column: "Water No", class: "text-center" },
          { name: "qtel_no", column: "QTel No", class: "text-center" },
          { name: "full_villa_class", column: "Class", class: "text-center" },
          {
            name: "rate_per_month",
            column: "Rate/Month",
            class: "text-right",
            dtype: "currency"
          },
          {
            name: "full_status",
            column: "Status",
            class: "text-center",
            style: "width:10%",
            filter: true
          },
          { name: "$action", column: "", static: true, class: "text-center" }
        ],
        source: {
          url: "http://localhost:8081/api/api_villa/list",
          pointer: "villas"
        }
      }
    };
  },
  methods: {
    onClick(value) {
      console.log(value);
    }
  }
};
</script>

