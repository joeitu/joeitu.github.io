import store from '../store.js'


export default {
    name: 'Home',
    components: {
    },
    setup() {
        return {store};
    },

    
    template: `
    <div style='min-height: 70vh; display: flex; justify-content: center; align-items: center;'>
    <div>
        <h1 style=''> IoT's for NGO's </h1>
        <p>Exercitation eiusmod proident laboris sed occaecat irure amet, veniam commodo et occaecat pariatur laboris dolore. Veniam nisi quis veniam fugiat qui. Ad enim et eiusmod. Fugiat excepteur ad do enim quis, fugiat aute commodo sit consequat ullamco, consectetur velit sed ut dolor. Ex excepteur adipiscing magna exercitation ullamco laborum consectetur.</p>
        </div>
    </div>
    `,
};
