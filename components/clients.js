import store from '../store.js'


export default {
    name: 'Clients',


    setup() {
        return {store};
    },

    
    template: `
        <h2 id="clients" > Clients </h2>
        <div class="row">
	   <div class="column">
                <h3>Consequat</h3>
                <img src="https://via.placeholder.com/400x200?text=client+logo">
                <p>
Did you know that you easily can use technology as a way to solve specific problems? Smart water minitorising systems can help you gather data about water supply in real time in the areas you work. This NGO used the information provided on this site to begin their journey with IoT. 
                </p>
           </div>
	   <div class="column">
                <h3>Dolore</h3>
                <img src="https://via.placeholder.com/400x200?text=client+logo">
                <p>
Is it also in your interest to optimize how you work with healthcare? This NGO has seen a great improvement in their results since they started tracking and tracing their work by using IoT services.
                </p>
           </div>
	   <div class="column">
                <h3>Duis</h3>
                <img src="https://via.placeholder.com/400x200?text=client+logo">
                <p>
When you provide connection posibilities in the areas you are present, the quality for your workers and the locals improve as well. Read about how this NGO used IoT for connecting local bases with their headquarters and then had several new opportunities and more time for the important aid they provide.  
                </p>
                
           </div>
        </div>
    `,
}

