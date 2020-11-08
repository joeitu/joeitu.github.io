import store from '../store.js'
import cards from './cards.js'
import modal from './modal.js'

export default {
    name: 'card_game',

    components: {
        cards,
        modal,
    },

    props : {
        qid: Number,
    },

    setup(props) {
        const {ref, watchEffect} = Vue;
        const show_modal = ref(false)
        const flipped = ref([false, false, false])
        watchEffect(() => {
            // reset card when changing question
            props.qid
            flipped.value  = [false, false, false]
        })
        function flip(i){
            // https://stackoverflow.com/questions/33731939/vue-js-toggle-class-on-click
            flipped.value[i] = ! flipped.value[i]
        }
        return {store,  flipped, flip , show_modal};
    },
    
  // https://stackoverflow.com/questions/45700632/prevent-on-click-on-parent-when-clicking-button-inside-div/52233455
    template: `
    <modal v-if='show_modal' @close='show_modal = false'/>
      <div id="quiz">
        <div class="quiztitle">
            <img :src="store.questions[qid].img" >
            <h2 >{{ store.questions[qid].question }}</h2>
      	</div>
      	<!-- TODO <div class="centered"> <progress :value="(qid +1) " max="5" style='background: white;' ></progress> </div> -->
      	<div class='row'>
          	<div v-for='i in store.questions[qid].answers.length' class="container">
                     <div class="flip-card column">
                      <div class="flip-card-inner" :class="{flipped: flipped[i-1]}" v-on:click="flip(i-1)">
                        <div class="flip-card-front">
                          <h3>Response {{ i }}</h3>
                    	<p> {{ store.questions[qid].answers[i-1].text }} </p>
                        </div>
                        <div class="flip-card-back">
                          <p> {{ store.questions[qid].responses[i-1] }} </p>
                          <button @click.stop="show_modal = !show_modal"> Learn More </button>
                        </div>
                      </div>
                    </div> 

          	 </div>

         </div>

      </div>
      <br/>
    `,
};

