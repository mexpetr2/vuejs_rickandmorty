<script>
import Filter from './components/Filter.vue'
import Loading from './components/Loading.vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { watchEffect, computed } from 'vue'

export default {
  components: {
    Filter,
    Loading
  },
  setup() {
    const QUERY = gql`
      query CHARACTERS {
        characters {
          results {
            name
            image
            species
            status
            gender
          }
        }
      }
    `
    // On récupuère les données grâce à UseQuery
    const { result, loading, error } = useQuery(QUERY)
    // // computed va nous servir à utliser les données et surtout cela va mettre à jour la constante lorsque la requête change
    const allCharacters = computed(() => result.value?.characters.results ?? [])

    //on va console.log à chaque fois que allCharacters cela fonctionne en symbiose avec computed
    watchEffect(() => {
      // console.log(allCharacters)
    })

    return {
      result,
      allCharacters,
      loading,
      error
    }
  }
}
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center h-screen">
    <!-- Button chargement Tailwind -->
    <Loading />
  </div>

  <div v-else-if="result && result.characters" class="w-4/5 mx-auto">
    <div class="mt-4"><img src="/logo.png" alt="logo" class="mx-auto" /></div>
    <Filter :data="result.characters.results" />
  </div>
</template>
