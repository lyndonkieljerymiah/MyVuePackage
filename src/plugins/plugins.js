

import VDialog from "./containers/VDialog.vue";
import VTab from "./containers/VTab.vue";
import VTabGroup from "./containers/VTabGroup.vue";
import VPanel from "./containers/VPanel.vue";
import VControlWrapper from "./containers/VControlWrapper.vue";
import VAdminPanel from "./containers/VAdminPanel.vue";


import VDataView from "./controls/VDataView.vue";
import VGridView from "./controls/VGridView.vue";
import VPagination from "./controls/VPagination.vue";
import VLiveView from "./controls/VLiveView.vue";
import VComboBox from "./controls/VComboBox.vue";
import VDynamicCombo from "./controls/VDynamicCombo.vue"
import VForm from "./controls/VForm.vue"
import VInputControl from "./controls/VInputControl"
import VNavBar from "./controls/VNavbar"


const MyPlugins = {
    install(Vue,options) {

        Vue.component(VDialog.name,VDialog)
        Vue.component(VControlWrapper.name,VControlWrapper)
        Vue.component(VTab.name,VTab)
        Vue.component(VTabGroup.name,VTabGroup)
        Vue.component(VPanel.name,VPanel)
        Vue.component(VAdminPanel.name,VAdminPanel)

        Vue.component(VDataView.name,VDataView)
        Vue.component(VGridView.name,VGridView)
        Vue.component(VPagination.name,VPagination)
        Vue.component(VLiveView.name,VLiveView)

        Vue.component(VComboBox.name,VComboBox)
        Vue.component(VDynamicCombo.name, VDynamicCombo)
        Vue.component(VForm.name,VForm)
        Vue.component(VInputControl.name,VInputControl)
        Vue.component(VNavBar.name,VNavBar)
        
    }
}

export default MyPlugins;