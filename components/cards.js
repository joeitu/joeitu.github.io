import store from '../store.js'

export default {
    name: 'cards',
    setup() {
        return {store};
    },
    template: `
     <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>Response</h1>
    	<p> Responses </p>
        </div>
        <div class="flip-card-back">
          <h1>Answer</h1>
          <p>foo bar</p>
        </div>
      </div>
    </div> 
    `,
};

