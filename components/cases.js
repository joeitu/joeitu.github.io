import store from '../store.js'


export default {
    name: 'Cases',


    setup() {
        return {store};
    },

    
    template: `
        <h2> cases </h2>
        <div class="row">
	   <div class="column">
                <h3>Minim veniam aliqua</h3>
                <img src="https://via.placeholder.com/400x200?text=case+illustration">
                <p>
		Irure et cupidatat laboris magna quis deserunt dolore. Lorem cupidatat culpa velit. Do sint sit culpa dolor commodo est. Lorem veniam esse nisi sed non aliquip in. Eiusmod dolor magna consectetur ad cillum mollit. Voluptate laboris commodo irure deserunt.
                </p>
           </div>
	   <div class="column">
                <h3>culpa do sint nulla</h3>
                <img src="https://via.placeholder.com/400x200?text=case+illustration">
                <p>
		Sunt proident aliqua pariatur ut. Eu excepteur ut et voluptate amet laborum lorem. Elit fugiat magna non nisi commodo elit et. Id deserunt veniam nisi non. Tempor incididunt cillum sit nostrud exercitation. Voluptate incididunt velit officia amet excepteur veniam anim.
                </p>
           </div>
	   <div class="column">
                <h3>id reprehenderit quis in laborum</h3>
                <img src="https://via.placeholder.com/400x200?text=case+illustration">
                <p>
		Id sed tempor tempor id elit anim magna, dolore proident occaecat eiusmod dolor. Reprehenderit consequat est culpa. Officia non occaecat magna aliqua. Laborum commodo mollit ad eiusmod ad occaecat aliquip, lorem cupidatat deserunt reprehenderit laborum. Officia ipsum laborum magna sit consectetur est.
                </p>
                
           </div>
        </div>
    `,
}
