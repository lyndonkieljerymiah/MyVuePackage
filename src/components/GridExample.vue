<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <v-panel header="Grid">
                    <v-grid-view :grid="grid" :data="items">
                        <template slot="custom" scope="props">
                            <span>{{props.items.entry[props.items.column.name] | toUpperCase}}</span>
                        </template>
                    </v-grid-view>
                </v-panel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                "contract_no": "1234",
                "date": moment(),
                "tenant_name": "Arnold Mercado",
                "status": "pending"
            },
            {
                "contract_no": "1235",
                "date": moment(),
                "tenant_name": "Arnold Mercado",
                "status": "pending"
            }],
            grid: {
                columns: [
                    { name: "contract_no", column: "Contract No" },
                    { name: "date", column: "Date", dtype:"date", format:"d/M/Y"},
                    { name: "tenant_name", column: "Tenant Name" ,itype:"text", editable:"true", bind:"tenant_name"},
                    { name: "status", column: "Pending", editable:"true",itype:"custom"}
                ]
            }
        }
    },
    methods: {
        get(pro) {
            console.log(pro);
        }
    }
}
</script>
