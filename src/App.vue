<script setup>

</script>

<template>
  <div>
 
    <div v-if="loaded">

      <div v-if="!particularId && particularId != 0">

        <h1>Star Wars</h1>
        <div class="row">
          <div class="col-4">
            <starship @particular-id="handleChosenId" @type="handleType" :starship="loadedData.starshipData" />
          </div>
          <div class="col-4">
            <planet @particular-id="handleChosenId" @type="handleType" :planets="loadedData.planetData" />
          </div>
          <div class="col-4">
            <character @particular-id="handleChosenId" @type="handleType" :characters="loadedData.characterData" />
          </div>
        </div>

      </div>
      <div v-else>
        <div v-if="type == 1">
          <itemById :data="loadedData.characterData.results[particularId]" :type="type" @go-back="returnToInitialState"></itemById>
        </div> 
        <div v-if="type == 2">
          <itemById :data="loadedData.planetData.results[particularId]" :type="type" @go-back="returnToInitialState"></itemById>
        </div>
         <div v-if="type == 3">
          <itemById :data="loadedData.starshipData.results[particularId]" :type="type" @go-back="returnToInitialState"></itemById>
        </div>  
      </div>

    </div>


    <div v-else>
      <img src="../src/assets/saber.gif" alt="Loading...">
    </div>

  </div>


</template>

<script>
import starship from './components/starship.vue'
import planet from './components/planet.vue'
import character from './components/character.vue'
import itemById from './components/itemById.vue';
import axios from 'axios';
export default {

  created() {

    const me = this;
    axios
      .get('https://swapi.dev/api/starships')
      .then(response => {
        console.log(response);
        me.loadedData.starshipData = response.data;
        me.starshipLoaded = true;
      })
      .catch(error => {
        console.error('Error fetching characters data:', error);
      });

    axios
      .get('https://swapi.dev/api/planets')
      .then(response => {
        console.log(response);
        me.loadedData.planetData = response.data;
        me.planetLoaded = true;
      })
      .catch(error => {
        console.error('Error fetching characters data:', error);
      });

    axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        console.log(response);
        me.loadedData.characterData = response.data;
        me.characherLoaded = true;
        if (me.starshipLoaded && me.planetLoaded && me.characherLoaded) {
          me.loaded = true;
        }
      })
      .catch(error => {
        console.error('Error fetching characters data:', error);
      });



  },
  data() {
    return {
      particularId: null,
      type: null,
      loaded: false,
      starshipLoaded: false,
      planetLoaded: false,
      characherLoaded: false,
      loadedData: {
        starshipData: null,
        planetData: null,
        characterData: null,
      }
    }
  },
  components: {
    'character': character,
    'planet': planet,
    'starship': starship,
    itemById
  },
  methods: {
    returnToInitialState(clickGoBack){
if(clickGoBack){
  this.particularId = null;
      this.type = null;
}
    },
    handleChosenId(selectedId) {
      this.particularId = selectedId;
      console.log("selected id" + this.particularId)
      

    },
    handleType(type) {
      this.type = type;
      console.log("Received type:", this.type);
    }
  }

}
</script>
<style scoped>
h1 {
  color: yellow;
  font-family: monospace;
}
</style>
