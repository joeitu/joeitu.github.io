import card_game from './card_game.js'
import intro from './game_intro.js'

export default {
    name: 'game',
    components: {
        card_game,
        intro,
    },
    setup() {
        const {ref} = Vue;
        const qid = ref(-1)

        function next(){
            if (qid.value < 4){
                qid.value += 1
            }
        }

        function prev(){
            if (qid.value >= 0){
                qid.value -= 1
            }
        }

        return { qid, next, prev};
    },
    
    template: `
      <div id="game" style="height: 60vh">

        <div v-if="qid == -1" class="centered">
            <h1> Take the quiz and see how much you know about IoT and its wide array of potentials for NGOs. </h1>
            <p>Disclaimer: There is no right and wrong answer to the questions. Each of the possible solutions have both benefits and disadvantages. The quiz is solely designed for educating and inspiring NGOs on the usage of IoT to solve issues in the third world. </p>
            <img src='https://www.shareicon.net/data/512x512/2017/01/23/874889_clipboard_512x512.png' />
        </div>

       <card_game v-if="qid > -1 && qid < 4" :qid="qid" ></card_game>

        <div v-if="qid > 3" class="centered">
        <h1> Your are done ! </h1>
        <h1> Thanks for your participation 🙂 </h1>
             <label for="cbtest" class="check-box checked"></label>
        </div>




      </div>
      <br/>
      <div style="height: 20vh">
        <button class="gamebutton" v-if="qid < 0"  @click="next()" style="float:right">Start Quiz</button>
      	<button class="gamebutton" v-if="qid >= 0" v-on:click="prev()" >Prev</button>
      	<button class="gamebutton" v-if="qid < 4 && qid >= 0" v-on:click="next()"  style="float: right" >Next</button>
        </div>
    `,
};

