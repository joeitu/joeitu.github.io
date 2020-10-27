import homepage from './components/home.js'
import ngoform from './components/form.js'
import store from './store.js'

export default {
    name: 'App',
    components: {
        homepage,
        ngoform,
    },
    setup() {
        const {ref} = Vue;
        const page = ref(null);
        page.value = 'ngoform'
        return {page}
    },
    template: `
        <div id="sidebar">
            <nav>
                <button v-on:click="page = 'homepage'">Home</button>
                <button v-on:click="page = 'ngoform'">Form</button>
            </nav><hr>
        </div>
        <div id="content">
            <component :is="page || 'homepage'"></component>
        </div>
    `,
  };
