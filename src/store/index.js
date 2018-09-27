//我们组装模块并导出store的地方
import vue from 'vue';
import vuex from 'vuex';
import state from './state.js';
import * as getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import login from './modules/login';

vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false

export default new vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        login,
    },
   // plugins: debug ? [createLogger()] : [] 
    // 开发环境下显示vuex的状态修改
});