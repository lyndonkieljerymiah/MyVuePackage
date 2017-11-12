

import VDialog from "./containers/VDialog.vue";
import VTab from "./containers/VTab.vue";
import VTabGroup from "./containers/VTabGroup.vue";
import VPanel from "./containers/VPanel.vue";
import VControlWrapper from "./containers/VControlWrapper.vue";
import VAdminPanel from "./containers/VAdminPanel.vue";
import VSidebar from "./containers/VSidebar";
import VPageHeaderBar from "./containers/VPageHeaderBar";
import VErrorSpan from "./controls/VErrorSpan";

import VDataView from "./controls/VDataView";
import VGridView from "./controls/VGridView";
import VPagination from "./controls/VPagination";
import VLiveView from "./controls/VLiveView";
import VComboBox from "./controls/VComboBox";
import VDynamicCombo from "./controls/VDynamicCombo"
import VFormDialog from "./controls/VFormDialog"
import VInputControl from "./controls/VInputControl"
import VNavBar from "./controls/VNavbar"
import ProfileImage from "./controls/ProfileImage";
import VDatePicker from "./controls/VDatePicker";
import VFullSearch from "./controls/VFullSearch";


import {toDateFormat,toCurrencyFormat,toUpperCase} from "../filters/others";

const MyPlugins = {
    install(Vue,options) {

        Vue.component(VDialog.name,VDialog)
        Vue.component(VControlWrapper.name,VControlWrapper)
        Vue.component(VTab.name,VTab)
        Vue.component(VTabGroup.name,VTabGroup)
        Vue.component(VPanel.name,VPanel)
        Vue.component(VAdminPanel.name,VAdminPanel)
        Vue.component(VSidebar.name,VSidebar)
        Vue.component(VPageHeaderBar.name,VPageHeaderBar)
        

        Vue.component(VDataView.name,VDataView)
        Vue.component(VGridView.name,VGridView)
        Vue.component(VPagination.name,VPagination)
        Vue.component(VLiveView.name,VLiveView)

        Vue.component(VComboBox.name,VComboBox)
        Vue.component(VDynamicCombo.name, VDynamicCombo)
        Vue.component(VFormDialog.name,VFormDialog)
        Vue.component(VInputControl.name,VInputControl)
        Vue.component(VNavBar.name,VNavBar)
        Vue.component(ProfileImage.name,ProfileImage)
        Vue.component(VDatePicker.name,VDatePicker)
        Vue.component(VFullSearch.name,VFullSearch)
        Vue.component(VErrorSpan.name,VErrorSpan)

        Vue.filter('toDateFormat',toDateFormat);
        Vue.filter('toCurrencyFormat', toCurrencyFormat);
        Vue.filter('toUpperCase',toUpperCase)
    }
}

export default MyPlugins;