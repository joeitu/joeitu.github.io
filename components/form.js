import store from '../store.js'

export default {
    name: 'ngoform',
    setup() {
        return {store};
    },
    template: `
      <div id="ngo_form">
        <h2 id="form" > Form </h2>
      	<div v-for='(q, qindex) in store.questions'>
          	<h3>{{ q.question }}</h3>
          	<div v-for='i in q.answers.length' class="container">
                <label >
                    {{ q.answers[i-1].text }}
                  <input type="radio" :name="'radio' + qindex" :value="i" v-model="q.checked">
                  <span class="checkmark"></span>
                </label>
                  <p v-if="i == q.checked" style='background: lightblue'> ↪ {{ q.responses[i-1] }} </p>
                </div>

      	</div>

    </div>
    `,
};
