import { DICT as dict } from "./const"


function dictFormat(k, dictId) {
    let dictItem = dict[dictId];
    if (!!dictItem) {
        for (key of dictItem) {
            if (key == k) {
                return dictItem[k];
            }
        }
    }
}

const install = function(Vue,opts = {}){
    Vue.prototype.$dictFormat = dictFormat;
}

export default install