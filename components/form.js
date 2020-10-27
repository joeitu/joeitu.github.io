import store from '../store.js'

export default {
    name: 'ngoform',
    setup() {
        const {ref} = Vue;
        const showAns = ref(true)
        return {store, showAns};
    },
                // <label v-for='ans in q.answers' in class="container">
    template: `
      <div id="ngo_form">
            <button v-on:click="showAns = !showAns" style='background: lightblue' >Show answer</button>
      	<div v-for='q in store.questions'>
          	<h3>{{ q.question }}</h3>
          	<div v-for='i in q.answers.length' class="container">
                <label >
                    {{ q.answers[i-1] }}
                  <input type="radio" name="radio">
                  <span class="checkmark"></span>
                </label>
                  <p v-if="showAns" style='background: lightblue'> ↪ {{ q.responses[i-1] }} </p>
                </div>

      	</div>

    </div>
    `,
};
