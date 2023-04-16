<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  props: {
    data: Array
  },
  data() {
    return {
      selectedSpecies: 'all',
      selectedStatus: 'all',
      selectedGender: 'all',
      //Limite du nombre de card afficher par défaut
      limit: 10
    }
  },
  computed: {
    // On créer un tableau qui contiendra toute les espèces possible
    species() {
      return this.data
        .map((el) => {
          return el.species
        })
        .filter((valeur, index, tableau) => tableau.indexOf(valeur) === index)
    },
    // Pareil ici pour les genre
    genders() {
      return this.data
        .map((el) => {
          return el.gender
        })
        .filter((valeur, index, tableau) => tableau.indexOf(valeur) === index)
    },
    // Pareil ici pour le status
    status() {
      return this.data
        .map((el) => {
          return el.status
        })
        .filter((valeur, index, tableau) => tableau.indexOf(valeur) === index)
    },
    characters() {
      let characters = this.data

      //On va filtrer notre tableau par rapport à l'espèce séléctionné, si c'est all alors on ne va pas filtrer le tableau
      if (this.selectedSpecies !== 'all') {
        characters = characters.filter((character) => character.species === this.selectedSpecies)
      }

      if (this.selectedStatus !== 'all') {
        characters = characters.filter((character) => character.status === this.selectedStatus)
      }

      if (this.selectedGender !== 'all') {
        characters = characters.filter((character) => character.gender === this.selectedGender)
      }
      // On retourne le tableau par seulement par rapport au nombre d'élément qu'on veut afficher
      return characters.slice(0, this.limit)
    }
  }
}
</script>

<template>
  <div v-if="data" class="container mx-auto">
    <h1 class="text-3xl font-bold">Characters</h1>
    <div class="filter-container">
      <div class="gender">
        <h3 class="text-xl">Gender</h3>
        <!-- On va créer plusieurs input de type radio pour pouvoir séléctionné le genre on commence par créer un input all -->
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            v-model="selectedGender"
            id="bordered-radio-2"
            type="radio"
            value="all"
            name="selectedGender"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >All</label
          >
        </div>
        <!-- Ici on va boucler pour afficher un input radio par rapport à tout les genres que l'on a -->
        <div v-for="gender in genders">
          <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              v-model="selectedGender"
              id="bordered-radio-2"
              type="radio"
              :value="gender"
              name="selectedGender"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-radio-2"
              class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{ gender }}</label
            >
          </div>
        </div>
      </div>
      <div class="status">
        <h3 class="text-xl">Status</h3>

        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            v-model="selectedStatus"
            id="bordered-radio-2"
            type="radio"
            value="all"
            name="selectedStatus"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >All</label
          >
        </div>
        <div v-for="statu in status">
          <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              v-model="selectedStatus"
              id="bordered-radio-2"
              type="radio"
              :value="statu"
              name="selectedStatus"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-radio-2"
              class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{ statu }}</label
            >
          </div>
        </div>
      </div>
      <div class="species">
        <h3 class="text-xl">Species</h3>

        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            v-model="selectedSpecies"
            id="bordered-radio-2"
            type="radio"
            value="all"
            name="selectedSpecies"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >All</label
          >
        </div>
        <div v-for="specie in species">
          <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              v-model="selectedSpecies"
              id="bordered-radio-2"
              type="radio"
              :value="specie"
              name="selectedSpecies"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-radio-2"
              class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{ specie }}</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-for="character in characters" class="card-container">
    <Card :character="character" />
  </div>

  <button @click="limit += 10">Show more</button>
</template>
