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
    },
    template: `
        <div id="sidebar">
            <nav>
                <a href="#"><button>Home</button></a>
                <a href="#cases"><button>Cases</button></a>
                <a href="#clients"><button>Clients</button></a>
                <a href="#form"><button>Quiz</button></a>
            </nav><hr>
        </div>
        <div id="content">
            <component :is="'homepage'"></component>
            <component :is="'ngoform'"></component>
        </div>
    `,
  };
