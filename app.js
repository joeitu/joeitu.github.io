import store from './store.js'
import homepage from './components/home.js'
import game from './components/game.js'
import modal from './components/modal.js'
import cases from   './components/cases.js'
import clients from './components/clients.js'

export default {
    name: 'App',
    components: {
        homepage,
        game,
        modal,
        cases,
        clients,
    },

    setup() {
        const {ref} = Vue;
        const show_modal = ref(false)
        return {show_modal}
        
    },

    template: `
        <modal v-if='show_modal' @close="show_modal=!show_modal" ></modal>
        <div id="sidebar">
            <nav>
                <a href="#"><button>Home</button></a>
                <a href="#cases"><button>Cases</button></a>
                <a href="#clients"><button>Clients</button></a>
                <a href="#game"><button>Quiz</button></a>
            </nav><hr>
        </div>
        <div id="content">

            <homepage/>
            <div style='min-height: 70vh; display: flex; justify-content: center; align-items: center;'>
            <div>
                <clients/>
            </div>
            </div>
            <div style='min-height: 70vh; display: flex; justify-content: center; align-items: center;'>
            <div>
                <cases/>
            </div>
            </div>
            <div style='min-height: 90vh; display: flex; justify-content: center; align-items: center;'>
            <div style='width:100%'>
                <game @openmodal='show_modal=!show_modal'/>
            </div>
            </div>

        </div>
    `,
  };

