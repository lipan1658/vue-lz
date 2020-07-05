import LzCron from './src/main.vue';

/* istanbul ignore next */
LzTabs.install = function(Vue) {
    Vue.component(LzCron.name, LzCron);
};

export default LzCron;
