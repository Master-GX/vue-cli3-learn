import _ from "lodash";

const install = function (Vue, opts = {}) {
    console.log(opts);
    Vue.prototype.$_ = _;
}

export default install