import store from '../store.js'

export default {
    name: 'ngoform',
    setup() {
        const {ref} = Vue;
        return {store, showAns};
    },
                // <label v-for='ans in q.answers' in class="container">
    template: `
      <div id="ngo_form">
      	<div v-for='(q, qindex) in store.questions'>
          	<h3>{{ q.question }}</h3>
          	<div v-for='i in q.answers.length' class="container">
                <label >
                    {{ q.answers[i-1].text }}
                  <input type="radio" :name="'radio' + qindex" :value="i" v-model="q.checked">
                  <span class="checkmark"></span>
                  {{ q.checked }}
                </label>
                  <p v-if="i == q.checked" style='background: lightblue'> ↪ {{ q.responses[i-1] }} </p>
                </div>

      	</div>

    </div>
    `,
};
