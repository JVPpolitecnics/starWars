<script setup>


</script>

<template>
  <div>



    <h1>Characters</h1>
    <div class="inline">
      <div v-if="characters">
        <div v-for="(object, index) in characters.results">
          <div class="card" @click="changeView(index, 1)">
            <div class="card__content">
              <p>Name: {{ object.name }}</p>
              <p>Date of birth: {{ object.birth_year }}</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>
<script>

export default {
  name: "character",
  data() {
    return {
      
    }
  },
  created() {
    const me = this;

  },
  props: {
    characters: Object,
  },
  methods: {
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
