import store from '../store.js'
import modal from './modal.js'


export default {
    name: 'Cases',

    components: {
        modal,
    },

    setup() {
        const {ref} = Vue;
        const show_modal = ref(false)
        return {store, show_modal};
    },

    
    template: `
        <modal v-if='show_modal' @close='show_modal = false'/>
        <h2 id="cases" > Cases </h2>
        <div class="row">
	   <div class="column">
                <h3>Lake Chad case</h3>
                <img src="https://via.placeholder.com/400x200?text=case+illustration">
                <p>
Delivering local aid in the Lake Chad area is hard due to the political situation. One NGO has utilized IoT connection devices in order to connect small emergency spaces with each other.  
                 </p>
                <button @click="show_modal = !show_modal"> Learn more </button>
           </div>
	   <div class="column">
                <h3>Zambia Case  </h3>
                <img src="https://via.placeholder.com/400x200?text=case+illustration">
                <p>
While an American NGO was working with the funding of local schools in Zambia, the area was hit by an epidemic making it very difficult to travel to the area. This led to a fair number of problems in regard to sending potential benefactors to the area. Instead, the NGO utilized VR and IoT technology to create a safe and inclusive experience for potential benefactors.  
                </p>
                <button @click="show_modal = !show_modal"> Learn more </button>
           </div>
	   <div class="column">
                <h3>Malawi Case  </h3>
                <img src="https://via.placeholder.com/400x200?text=case+illustration">
                <p>
A large NGO is currently working on a project in order to help eliminate malnutrition in Malawi. Using IoT and smart monitoring systems, they have been able to collect and analyze data that help them achieve their goal.  
                </p>
                <button @click="show_modal = !show_modal"> Learn more </button>
                
           </div>
        </div>
    `,
}

