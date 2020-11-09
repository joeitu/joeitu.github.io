import store from '../store.js'


export default {
    name: 'modal',
    setup(props) {
        const { watchEffect, ref } = Vue;
        return {store };
    },

    
    template: `
    <div class='modal'>
    <div class='modal-content'>
          <span class="modal-close" @click="$emit('close')" >&times;</span>
        <h2 > Fugia magna</h2>
                <img src="https://via.placeholder.com/400x200?text=illusatration">
                <h3>consequat</h3>
                <p>
		Irure et cupidatat laboris magna quis deserunt dolore. Lorem cupidatat culpa velit. Do sint sit culpa dolor commodo est. Lorem veniam esse nisi sed non aliquip in. Eiusmod dolor magna consectetur illusatrationt.
                </p>
                <h3>dolore</h3>
                <img src="https://via.placeholder.com/400x200?text=illusatration">
                <p>
		Sunt proident aliqua pariatur ut. Eu excepteur ut et voluptate amet laborum lorem. Elit fugiat magna non nisi commodo elit et. Id deserunt veniam nisi non. Tempor illusatrationm.
                </p>
                
        </div>
    </div>
    </div>
    `,
}


