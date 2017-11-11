window._ = require('lodash');
window.bbox = require('bootbox');
window.toastr = require('toastr');

/**
 * Moment Js
 ****************/
import Moment from "moment";
import {extendMoment} from "moment-range";

window.moment = extendMoment(Moment);

window.axios = require('axios');

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = 'YBGCOogcqwpVdCPn1x93xAUNbU9ZSzEE3Jdr2OEi';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');

    
    
} catch (e) {}

window.accounting = require('accounting-js');


