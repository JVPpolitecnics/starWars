

<template>
  <div>
 


    <h1>Planets</h1>
      <div class="inline">
        <div v-if="planets">
          <div v-for="(object, index) in planets.results">
            <div class="card" @click="changeView(index, 2)">
              <div class="card__content">
                <p>Name: {{ object.name }}</p>
                <p>rotation period: {{ object.rotation_period }}</p>
                <p>climate: {{ object.climate }}</p>
              </div>
            </div>
          
      
          </div>
        </div>
      </div>
  </div>  
  
</template>
<script>
import axios from 'axios';
export default {
  name: "planet",
  data() {
    return {
     
    }
  },
  created() {
      
    },
    props: {
    planets
    : Object,
  },
    methods:{
      changeView(index, type) {
      this.$emit('particular-id', index);
      this.$emit('type', type);
    }
    }
}

</script>
<style scoped>
.card {
  color: aliceblue;
  align-items: center;
  margin-top: 25px;
  width: 190px;
  height: 254px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
}

.card__content {
  background: rgb(5, 6, 45);
  border-radius: 17px;
  width: 100%;
  height: 100%;
}
h1{
  color: yellow;
  font-family: monospace;
}


</style>
