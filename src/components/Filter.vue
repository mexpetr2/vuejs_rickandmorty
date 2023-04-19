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
  methods: {
    resetLimit() {
      this.limit = 10
    },
    Capitalize(string) {
      return string.charAt(0).toUpperCase() + string.substring(1)
    }
  },
  computed: {
    // On créer un tableau qui contiendra toute les espèces possible sans doublons
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
      return characters
    }
  }
}
</script>

<template>
  <div v-if="data">
    <h1 class="text-3xl font-bold mb-3">Characters</h1>
    <div class="bg-color1 rounded">
      <div class="flex flex-wrap">
        <div class="gender w-2/5 ml-auto mr-6 mt-4">
          <h3 class="text-xl mb-3">Gender</h3>
          <!-- On va créer plusieurs input de type radio pour pouvoir séléctionné le genre on commence par créer un input all -->
          <div
            class="mb-2 flex flex-row-reverse cursor-pointer items-center pl-4 border-2 border-color4 rounded hover:border-color2 hover:bg-color2/10 selected"
          >
            <input
              v-model="selectedGender"
              id="selectedGender"
              type="radio"
              value="all"
              name="selectedGender"
              @click="resetLimit()"
              class="w-4 h-4 mr-4 appearance-none cursor-pointer focus:ring-0 bg-color4 rounded-full hover:bg-white hover:border-4 hover:border-color2 checked:bg-white checked:border-4 checked:border-color2"
            />
            <label
              for="selectedGender"
              class="w-full py-4 ml-2 cursor-pointer text-sm font-medium text-gray-30"
              >All</label
            >
          </div>
          <!-- Ici on va boucler pour afficher un input radio par rapport à tout les genres que l'on a -->
          <div v-for="(gender, genderIndex) in genders">
            <div
              class="mb-2 flex flex-row-reverse cursor-pointer items-center pl-4 border-2 border-color4 rounded hover:border-color2 hover:bg-color2/10 selected"
            >
              <input
                v-model="selectedGender"
                :id="'selectedGender' + genderIndex"
                type="radio"
                :value="gender"
                name="selectedGender"
                @click="resetLimit()"
                class="w-4 h-4 mr-4 appearance-none cursor-pointer focus:ring-0 bg-color4 rounded-full hover:bg-white hover:border-4 hover:border-color2 checked:bg-white checked:border-4 checked:border-color2"
              />
              <label
                :for="'selectedGender' + genderIndex"
                class="w-full py-4 ml-2 cursor-pointer text-sm font-medium text-gray-30"
                >{{ Capitalize(gender) }}</label
              >
            </div>
          </div>
        </div>
        <div class="status w-2/5 mr-auto mt-4">
          <h3 class="text-xl mb-3">Status</h3>

          <div
            class="mb-2 flex flex-row-reverse cursor-pointer items-center pl-4 border-2 border-color4 rounded hover:border-color2 hover:bg-color2/10 selected"
          >
            <input
              v-model="selectedStatus"
              id="selectedStatus"
              type="radio"
              value="all"
              name="selectedStatus"
              @click="resetLimit()"
              class="w-4 h-4 mr-4 appearance-none cursor-pointer focus:ring-0 bg-color4 rounded-full hover:bg-white hover:border-4 hover:border-color2 checked:bg-white checked:border-4 checked:border-color2"
            />
            <label
              for="selectedStatus"
              class="w-full py-4 ml-2 cursor-pointer text-sm font-medium text-gray-30"
              >All</label
            >
          </div>
          <div v-for="(statu, statusIndex) in status">
            <div
              class="mb-2 flex flex-row-reverse cursor-pointer items-center pl-4 border-2 border-color4 rounded hover:border-color2 hover:bg-color2/10 selected"
            >
              <input
                v-model="selectedStatus"
                :id="'selectedSatus' + statusIndex"
                type="radio"
                :value="statu"
                name="selectedStatus"
                @click="resetLimit()"
                class="w-4 h-4 mr-4 appearance-none cursor-pointer focus:ring-0 bg-color4 rounded-full hover:bg-white hover:border-4 hover:border-color2 checked:bg-white checked:border-4 checked:border-color2"
              />
              <label
                :for="'selectedSatus' + statusIndex"
                class="w-full py-4 ml-2 cursor-pointer text-sm font-medium text-gray-30"
                >{{ Capitalize(statu) }}</label
              >
            </div>
          </div>
        </div>
        <div class="species width-species mx-auto">
          <h3 class="text-xl mb-3">Species</h3>
          <div class="grid grid-cols-2 gap-x-7">
            <div
              class="mb-2 flex flex-row-reverse cursor-pointer items-center pl-4 border-2 border-color4 rounded hover:border-color2 hover:bg-color2/10 selected"
            >
              <input
                v-model="selectedSpecies"
                id="selectedSpecies"
                type="radio"
                value="all"
                name="selectedSpecies"
                @click="resetLimit()"
                class="w-4 h-4 mr-4 appearance-none cursor-pointer focus:ring-0 bg-color4 rounded-full hover:bg-white hover:border-4 hover:border-color2 checked:bg-white checked:border-4 checked:border-color2"
              />
              <label
                for="selectedSpecies"
                class="w-full py-4 ml-2 cursor-pointer text-sm font-medium text-gray-30"
                >All</label
              >
            </div>
            <div v-for="(specie, speciesIndex) in species">
              <div
                class="mb-2 flex flex-row-reverse cursor-pointer items-center pl-4 border-2 border-color4 rounded hover:border-color2 hover:bg-color2/10 selected"
              >
                <input
                  v-model="selectedSpecies"
                  :id="'selectedSpecies' + speciesIndex"
                  type="radio"
                  :value="specie"
                  name="selectedSpecies"
                  @click="resetLimit()"
                  class="w-4 h-4 mr-4 appearance-none cursor-pointer focus:ring-0 bg-color4 rounded-full hover:bg-white hover:border-4 hover:border-color2 checked:bg-white checked:border-4 checked:border-color2"
                />
                <label
                  :for="'selectedSpecies' + speciesIndex"
                  class="w-full py-4 ml-2 cursor-pointer text-sm font-medium text-gray-30"
                  >{{ Capitalize(specie) }}</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="characters.length <= 0"
      class="text-center mt-5 mb-5 bg-color1 rounded pt-4 pb-4 w-8/12 mx-auto"
    >
      <p>Aucun personnages ne correspondent à ces critères</p>
    </div>
    <div
      v-else-if="characters.length > 0"
      class="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-3 py-6 gap-x-3"
    >
      <!-- On slice pour n'afficher qu'une partie des personnages pour l'instant -->
      <div v-for="character in characters.slice(0, limit)">
        <Card :character="character" />
      </div>
    </div>
  </div>
  <!-- On n'affiche le bouton que lorsqu'il reste encore des personnages à afficher -->
  <div class="w-full text-center mb-4" v-if="limit + 1 <= characters.length">
    <button class="ml-auto rounded text-color2 bg-color3 px-3" @click="limit += 10">
      Show more
    </button>
  </div>
</template>
