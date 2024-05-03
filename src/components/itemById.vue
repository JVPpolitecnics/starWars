<script setup>
</script>

<template>
    <div>
        
        <div>
            <div @click="goBack()">
                <svg height="80px" width="80px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 38.273 38.273" xml:space="preserve">
           <g>
               <path style="fill:#FFFFFF;" d="M20.621,10.484V5.84c0-0.808-0.458-1.548-1.181-1.909c-0.722-0.359-1.589-0.279-2.236,0.206
                   l-9.486,7.147c-0.677,0.292-1.117,0.67-1.401,1.058l-5.468,4.119C0.312,16.866-0.003,17.501,0,18.173
                   c0.002,0.673,0.322,1.305,0.862,1.706l16.355,12.133c0.646,0.48,1.51,0.554,2.23,0.191c0.72-0.362,1.174-1.1,1.174-1.905v-5.517
                   c0.013,0,0.025,0,0.038,0c3.842,0,10.687,1.089,13.366,8.386c0.311,0.846,1.116,1.397,2.001,1.397c0.079,0,0.157-0.004,0.236-0.013
                   c0.975-0.108,1.751-0.868,1.88-1.84c0.052-0.394,1.208-9.682-4.461-16.23C30.621,12.948,26.235,10.935,20.621,10.484z
                    M20.659,20.515c-1.443,0-2.379,0.132-2.482,0.146c-1.046,0.154-1.822,1.053-1.822,2.111v3.287l-10.66-7.907l3.555-2.678
                   c0.136-0.104,0.259-0.222,0.365-0.351c0.155-0.068,0.301-0.152,0.437-0.254l6.303-4.75v2.401c0,1.168,0.939,2.119,2.108,2.134
                   c5.345,0.063,9.374,1.61,11.975,4.6c1.442,1.658,2.314,3.602,2.835,5.469C28.923,21.038,23.424,20.515,20.659,20.515z"/>
           </g>
           </svg>
            </div>
          
            
            <div class="card" v-if="data && type">
                <div class="card__content">
                   
                    <div v-if="type == 3">
                        <p>Name: {{ data.name }}</p>
                        <p>Model: {{ data.model }}</p>
                    </div>
                    <div v-if="type == 1">
                        <p>Name: {{ data.name }}</p>
                        <p>Height: {{ data.height }}</p>
                        <p>Hair colour: {{ data.hair_color }}</p>
                        <p>Skin colour: {{ data.skin_color }}</p>

                    </div>
                    <div v-if="type == 2">
                        <p>Climate: {{ data.climate }}</p>
                        <p>Diameter: {{ data.diameter }}</p>
                        <p> Terrain: {{ data.terrain }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    name: "itemById",
    props: {
        data: Object,
        id: Number,
        type: Number
    },
    data() {
        return {
            
        }
    },
    created() {
  
    },
    methods:{
        goBack(){
            this.$emit('go-back', true);
            console.log('yes');
        }
    }
}

</script>
<style scoped>
.card {
    text-align: center;
    color: aliceblue;
    align-items: center;
    margin-top: 25px;
    width: 190px;
    height: 254px;
    border-radius: 20px;
    padding: 5px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
}

.card__content {
    background: rgb(5, 6, 45);
    border-radius: 17px;
    width: 100%;
    height: 100%;
}

h1 {
    color: yellow;
    font-family: monospace;
}
</style>
