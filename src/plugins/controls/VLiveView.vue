<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <transition name="v-slide-fade">
                    <div v-if="filter.field" class="live-views-badge">
                        <span>{{filter.label}}</span>
                        <a href="#" class="live-views-close" @click="refresh()">&times;</a>
                    </div>
                </transition>
            </div>
        </div>
        <div class="row">
            <transition name="v-slide-fade">
                <div v-if="fetchLoading" class="v-view-loading-container" key="loading">
                    <div class="v-view-loading">
                        <span class="fa fa-spinner fa-pulse fa-3x fa-fw"></span><br>
                        Loading...
                    </div>
                </div>
                <div v-else class="col-md-12" key="fetched">
                    <table id="grid" class="table table-condensed table-hover table-live-views">
                        <thead>
                        <tr>
                            <th class="text-center">No</th>
                            <th v-for="(key,index) in grid.columns"
                                :style="key.style"
                                @click.self="sortBy(key)"
                                class="text-left"
                                :class="{info:sortKey == key.name}"
                                :key="index">
                                {{ key.column }}
                                <span
                                        v-if="isArrowVisible(key.name)"
                                        class="fa fa-fw" :class="sortOrders[key.name] > 0 ?
                                'fa-long-arrow-down' : 'fa-long-arrow-up'"></span>

                                <a class="filter"
                                   href="#"
                                   @click.prevent.stop="selectFilter(index)"
                                   v-if="key.filter"><i class="fa fa-filter"></i></a>
                                
                                <!-- filter component -->
                                <transition name="v-slide-fade">
                                    <div v-if="selectedFilter === index" class="filter-wrapper" ref="filterWrapper">
                                        <div class="panel panel-primary wrap">
                                            <div class="panel-heading">Filter Panel - {{key.column}}</div>
                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" v-model="filter.value" class="form-control">
                                                </div>
                                                <button class="btn btn-info btn-block" @click.stop="doFilter(key.name,key.column)">Filter</button>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                                <!-- end filter -->
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="filteredData.length === 0">
                            <td :colspan="grid.columns.length" class="text-center"><h3 class="text-warning">
                                No Record found</h3>
                            </td>
                        </tr>
                        <tr v-for="(entry , index) in filteredData" :key="index">
                            <slot name="table-column" :props="{items: entry, index: index}">
                                <td class="text-center">{{index + 1}}</td>
                                <td v-for="key in grid.columns" :class="key.class" :style="key.style">
                                    <span>{{doRender(entry,key)}}</span>
                                    <div v-if="key.name=='$action'" class="btn-group">
                                        <button type="button"
                                                class="btn btn-primary dropdown-toggle btn-sm"
                                                data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            Action <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li v-for="action in actionButtons">
                                                <a href="#" @click='actionTrigger(action,entry,index)'>{{action.name}}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div v-if="key.name=='$markDelete'" class='text-center'
                                         @click='actionTrigger("delete",entry["id"])'>
                                        <button class="btn btn-danger btn-xs" type="button"><i class="fa fa-close"></i>
                                        </button>
                                    </div>
                                </td>
                            </slot>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <slot name="table-footer"></slot>
                        </tr>
                        </tfoot>
                    </table>
                    <div>
                        <v-pagination :param="items" @click="fetchData($event)"></v-pagination>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

import { EventBus } from "../../events/eventbus";
import VPagination from "../controls/VPagination.vue";


export default {
  name: "vLiveView",
  props: ["grid"],
  components: { VPagination },
  data() {
    return {
      items: { data: [] },
      editVisible: false,
      cache: {},
      filter: {
        field: "",
        value: "",
        label: ""
      },
      selectedFilter: "",
      sortKey: "",
      sortOrders: "",
      fetchLoading: false
    };
  },
  beforeMount() {
    //listen to view fetch will call by the client
    EventBus.$on("onLiveViewFetch", response => {
      this.refresh();
    });
    //initialize sorting
    this.initSort();
  },
  mounted() {
    let lazyLoad = this.grid.lazyLoad || false;
    if (!lazyLoad) {
      this.fetchData();
    }
  },
  computed: {
    filteredData() {
      let sortKey = this.sortKey;
      let data = this.items.data;
      let order = this.sortOrders[sortKey] || 1;
      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }

      return data;
    },
    actionButtons() {
      return this.grid.actions;
    }
  },
  methods: {
    /*----------------------------------------
    | Fetch Data pull data from the server
    | checking the url and parameter from the grid parameter and construct url
    | otherwise take the constructed url such in pagination and use the url to fetch data
    */
    fetchData(paramUrl) {
      let url = "";
      let query = "";
      if (paramUrl === undefined) {
        //if no url structure create one
        const source = this.grid.source;
        let params = "";

        if (source.params) {
          _.foreach(source.params, (value, key) => {
            params = params + "/" + value;
          });
        }

        if (this.filter.field.length > 0) {
          query = "?filter_field=" + this.filter.field + "&filter_value=" + this.filter.value;
        }

        url = source.url + params + query;
        this.selectedFilter = -1;
        this.filter.value = "";
      } else {
        //use the url from pagination or refreshment
        url = paramUrl;
      }

      //load the spining wheel of loading
      this.loadingCursorEnabled(true);
      axios
        .get(url)
        .then(response => {
          this.loadFetchData(response.data);
        })
        .catch(errors => {
          toastr.error("Loading error");
          this.loadingCursorEnabled(false);
        });
    },
    /*----------------------------------------
    | enable the spining wheel of patience
    | bind to loading template
    */
    loadingCursorEnabled(value) {
      this.fetchLoading = value;
    },
    /*----------------------------------------
    | Load the fetch data or cache data
    | set the grid data 
    */
    loadFetchData(data) {
        this.loadingCursorEnabled(false);
      if (this.grid.source.pointer) {
        //pointer - state where should the data be pointed at
        //the default source is data but if you have another object that wraps the data ie villas: {data:{...}}
        //you have to specify where the data located
        this.items = data[this.grid.source.pointer];
      } else {
        this.items = data;
      }
      //this.cache = data.data;

      
    },
    /*----------------------------------------
    |   Enable filter by setting the selected filter index value
    |   if the index is the same means same column clicked as the previous value set to -1 to hide the filter
    |   otherwise set the filter value
    */
    selectFilter(index) {
      if (this.selectedFilter === index) {
        this.selectedFilter = -1;
      } else {
        this.selectedFilter = index;
      }
    },
    /*----------------------------------------
    |   Sort column
    |   except static column
    */
    sortBy: function(key) {
      if (key.static) return false;
      this.sortKey = key.name;
      this.sortOrders[key.name] = this.sortOrders[key.name] * -1;
    },
    /*----------------------------------------
    |   render the data in format
    |   by checking the dtype date & currency only
    */
    doRender: function(entry, key) {
      let value = entry[key.name];
      if (key.dtype === "date") {
        value = moment(value).format("L");
      } else if (key.dtype === "currency") {
        //value = accounting.formatNumber(value) + " QR";
      }
      return value;
    },
    /*----------------------------------------
    |   Emit an event when action trigger
    |   the client can execute code 
    */
    actionTrigger: function(action, id) {
      this.$emit("action", action, id);
    },
    /*----------------------------------------
    |   Show arrow visibility
    */
    isArrowVisible(name) {
      return this.sortKey === name;
    },
    /*----------------------------------------
    |   Start a new fresh filter
    */
    doFilter(field, label) {
      this.filter.field = field;
      this.filter.label = label + " - " + this.filter.value;
      this.fetchData();
    },
    /*----------------------------------------
    |   return all data
    */
    refresh() {
      this.filter.field = "";
      this.filter.label = "";
      this.filter.value = "";
      this.fetchData();
    },
    /*----------------------------------------
    |   initialize sorting
    */
    initSort() {
      let sortOrders = {};
      let sortKey = "";

      this.grid.columns.forEach(key => {
        sortOrders[key.name] = 1;
        if (key.default !== undefined && key.default === true) {
          sortKey = key.name;
        }
      });
      this.sortKey = sortKey;
      this.sortOrders = sortOrders;
    }
  }
};
</script>

<style scope>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.v-slide-fade-enter-active {
  transition: all 0.3s ease;
}
.v-slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.v-slide-fade-enter,
.v-slide-fade-leave-to {
  opacity: 0;
}

.v-view-loading-container {
  width: 100%;
  height: 350px;
  position: relative;
}

.v-view-loading {
  position: absolute;
  top: 30%;
  left: 40%;
  font-size: 40px;
}


</style>