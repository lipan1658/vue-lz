//import Hello from './hello/index';
import LzTabs from './LzTabs/index';
import LzTable from './LzTable/index';
import LzCron from './LzCron/index';

const components = [
    //Hello,
    LzTable,
    LzTabs,
    LzCron
];

function install (Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
    //Hello,
    LzTable,
    LzTabs,
    LzCron
};

export default {
    install,
    LzTable,
    //Hello,
    LzTabs,
    LzCron
};

