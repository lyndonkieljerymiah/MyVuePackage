<template>
    <div>
        <table id="grid" class="table table-condensed table-hover">
            <thead>
                <tr class="active">
                    <th v-if="!grid.excludeIndex">No</th>
                    <th v-for="(key,index) in grid.columns" :style="key.style" @click="sortBy(key)" class="text-center active" :class="{info:sortKey == key.name}" :key="index">
                        {{ key.column }}
                        <span v-if="isArrowVisible(key.name)" class="fa fa-fw" :class="sortOrders[key.name] > 0 ?
                                    'fa-long-arrow-down' : 'fa-long-arrow-up'">
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(entry,entryIndex) in filteredData" :key="entryIndex" :class="{'danger' : grid.selected === entryIndex }">
                    <!-- auto numeric by default -->
                    <td v-if="!grid.excludeIndex">{{entryIndex + 1}}</td>
                    <td v-for="(key, columnIndex) in grid.columns" :class="key.class" :style="key.style" :key="columnIndex">
                        <div v-if="key.editable">
                            <!-- checkbox -->
                            <input v-if="key.itype === 'selector'" type="checkbox" v-model="entry[key.bind]" />
                            <!-- plain text -->
                            <input v-else-if="key.itype === 'text'" type="text" class="form-control" :class="key.class" v-model="entry[key.bind]">
                            <!-- text area -->
                            <textarea v-else-if="key.itype === 'textarea'" class="form-control" v-model="entry[key.bind]"></textarea>
                            <!-- dropdown -->
                            <select v-else-if="key.itype === 'dropdown'" v-model="entry[key.bind]" class="form-control">
                                <option v-if="key.customDefault === undefined" value="">--SELECT--</option>
                                <option v-for="(lookup,index) in lookups[key.selection]" :value="lookup.code" :key="index">{{lookup.name}}</option>
                            </select>
                            <!--custom-->
                            <div v-else-if="key.itype === 'custom'">
                                <slot name="custom" :items="{column:key,entry: entry}"></slot>
                            </div>
                        </div>
                        <div v-else>
                            <span v-if="key.dtype === 'date'">{{entry[key.name] | toDateFormat(key.format) }}</span>
                            <span v-else-if="key.dtype === 'currency'">{{entry[key.name] | toCurrencyFormat }}</span>
                            <span v-else-if="key.dtype === 'period'">{{entry[key.from] | toDateFormat}} - {{entry[key.to] | toDateFormat}}</span>
                            <span v-else>{{entry[key.name]}}</span>
                        </div>

                        <div v-if="key.name=='$action'" class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Action
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li v-for="(action,actionIndex) in actionButtons" :key="actionIndex">
                                    <a href="#" @click.prevent='actionTrigger(action.key,entry,entryIndex)'>{{action.name}}</a>
                                </li>
                            </ul>
                        </div>
                        <div v-if="key.name=='$markDelete'" class='text-center'>
                            <button class="btn btn-danger btn-xs" type="button" @click='actionTrigger("delete",entry,entryIndex)'>
                                <i class="fa fa-close"></i>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr v-if="data.length == 0">
                    <td :colspan="grid.columns.length + 1" class="text-center">
                        <h3 class="text-warning">No Record found</h3>
                    </td>
                </tr>
            </tbody>
            <tfoot v-if="grid.footers">
                <tr class="active">
                    <th v-for="(footer,index) in grid.footers" :colspan="footer.span" :key="index">
                        <strong v-if="footer.label">{{footer.label}} :</strong>
                        <span v-if="footer.text">{{footer.text}}</span>
                        <span v-if="footer.slot">
                            <slot></slot>
                        </span>
                    </th>
                </tr>
            </tfoot>
        </table>

    </div>
</template>

<script>


export default {
    name: "vGridView",
    props: ['data', 'grid', 'lookups'],
    data() {

        let sortOrders = {};
        let sortKey = "";
        let that = this;

        this.grid.columns.forEach((key) => {
            sortOrders[key.name] = 1;
            if (key.default !== undefined && key.default == true) {
                sortKey = key.name;
            }
        });

        return {
            sortKey: sortKey,
            editVisible: false,
            sortOrders: sortOrders

        }
    },
    computed: {
        filteredData() {
            let sortKey = this.sortKey;
            let data = this.data;
            let order = this.sortOrders[sortKey] || 1;
            this.filterKey = this.filterKey && this.filterKey.toLowerCase();
            if (sortKey) {
                data = data.slice().sort(function(a, b) {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                });
            }
            this.$emit('sorted', sortKey);

            return data;
        },
        actionButtons() {
            return this.grid.actions;
        }
    },
    methods: {
        sortBy: function(key) {
            if (key.static) return false;

            this.sortKey = key.name;
            this.sortOrders[key.name] = this.sortOrders[key.name] * -1;
        },
        render: function(entry, key) {

            //check pipe period_start|period_end
            let keypos = key.name.indexOf("|"),
                glue = key.glue || " - ",
                value = "";

            if (keypos >= 0) {
                let names = key.name.split('|');
                for (var i = 0; i < names.length; i++) {
                    if (key.dtype == 'date') {
                        entry[names[i]] = moment(entry[names[i]]).format('D, MMM, Y');
                    }
                    value += entry[names[i]] + glue;
                }
                value = value.substring(0, value.length - 3);
            }
            else {
                value = entry[key.name];
                if (key.dtype == 'date') {
                    value = moment(value).format('D, MMM, Y');
                }
                if (key.dtype == 'currency') {
                    value = accounting.formatNumber(value) + " QR";
                }
            }

            return value;

        },
        actionTrigger: function(action, id, index) {
            this.$emit('action', action, id, index);
        },
        isArrowVisible(name) {
            return this.sortKey === name;
        },
        isIncludeEdit(key) {
            return (key.editable && !key.static);
        },
        inputTypeIs(type) {
            return this.inputType == type;
        },
        onPaginateClick(url) {
            this.$emit("paginateClick", url);
        }
    }
}
</script>


<style>

</style>