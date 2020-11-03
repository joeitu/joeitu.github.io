import store from '../store.js'
import cards from './cards.js'

export default {
    name: 'ngoform',
    components: {
        cards,
    },
    setup() {
        const {ref} = Vue;
        const qid = ref(0)
        const flipped = ref([false, false, false])
        function flip(i){
            // https://stackoverflow.com/questions/33731939/vue-js-toggle-class-on-click
            flipped.value[i] = ! flipped.value[i]
        }

        function next(){
            if (qid.value < 3){
                qid.value += 1
                flipped.value = [false, false, false]
            }
        }

        function prev(){
            if (qid.value > 0){
                qid.value -= 1
                flipped.value = [false, false, false]
            }
        }

        return {store, qid, flipped, flip, next, prev};
    },
    
    template: `
      <div id="ngo_form">
        <h2 id="form" > Form </h2>
        <span> ICON </span>
      	<h3>{{ store.questions[qid].question }}</h3>
      	<div class='row'>
          	<div v-for='i in store.questions[qid].answers.length' class="container">
                     <div class="flip-card column">
                      <div class="flip-card-inner" :class="{flipped: flipped[i-1]}" v-on:click="flip(i-1)">
                        <div class="flip-card-front">
                          <h3>Response {{ i }}</h3>
                    	<p> {{ store.questions[qid].answers[i-1].text }} </p>
                        </div>
                        <div class="flip-card-back">
                          <h3>Answer</h3>
                          <p> {{ store.questions[qid].responses[i-1] }} </p>
                        </div>
                      </div>
                    </div> 

          	 </div>

         </div>

      </div>
      	<button v-on:click="prev()">Prev</button>
      	<button v-on:click="next()">Next</button>
    `,
};

