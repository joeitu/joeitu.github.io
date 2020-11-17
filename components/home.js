import store from '../store.js'


export default {
    name: 'Home',
    components: {
    },
    setup() {
        return {store};
    },

    
    template: `
<div id="videoDiv2"> 
<video id="video2" preload="" autoplay="" muted="" playsinline="" loop="">
<source src="../imgs/solar.mp4" type="video/mp4">
</video> 
    <div id="videoMessage" class="styling">
            <h1> IoT for NGOs </h1>
            <p>Exercitation eiusmod proident laboris sed occaecat irure amet, veniam commodo et occaecat pariatur laboris dolore. Veniam nisi quis veniam fugiat qui. Ad enim et eiusmod. Fugiat excepteur ad do enim quis, fugiat aute commodo sit consequat ullamco, consectetur velit sed ut dolor. Ex excepteur adipiscing magna exercitation ullamco laborum consectetur.</p>
    </div>
</div>
    `,
};
