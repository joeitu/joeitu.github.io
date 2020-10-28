import store from '../store.js'
import cases from './cases.js'
import clients from './clients.js'


export default {
    name: 'Home',
    components: {
        cases,
        clients,
    },
    setup() {
        return {store};
    },

    
    template: `
        <h1> Sim's for NGO's </h1>
        <cases></cases>
        <clients></clients>
    `,
};
