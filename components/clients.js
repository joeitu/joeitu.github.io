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
                <h3>consequat</h3>
                <img src="https://via.placeholder.com/400x200?text=client+logo">
                <p>
		Irure et cupidatat laboris magna quis deserunt dolore. Lorem cupidatat culpa velit. Do sint sit culpa dolor commodo est. Lorem veniam esse nisi sed non aliquip in. Eiusmod dolor magna consectetur client+logot.
                </p>
           </div>
	   <div class="column">
                <h3>dolore</h3>
                <img src="https://via.placeholder.com/400x200?text=client+logo">
                <p>
		Sunt proident aliqua pariatur ut. Eu excepteur ut et voluptate amet laborum lorem. Elit fugiat magna non nisi commodo elit et. Id deserunt veniam nisi non. Tempor client+logom.
                </p>
           </div>
	   <div class="column">
                <h3>duis</h3>
                <img src="https://via.placeholder.com/400x200?text=client+logo">
                <p>
		Id sed tempor tempor id elit anim magna, dolore proident occaecat eiusmod dolor. Reprehenderit consequat est culpa. Officia non occaecat magna aliqua. Laborum commodo mollit ad eiusmod ad occaecat aliquip, lorem cupidatat deserunt reprehenderit laborum. Officia ipsum laborum magna sit consectetur est.
                </p>
                
           </div>
        </div>
    `,
}

