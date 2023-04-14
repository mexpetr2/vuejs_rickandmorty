<script setup>
import Filter from './components/Filter.vue'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { watchEffect,computed } from 'vue';

const QUERY = gql`
  query CHARACTERS {
    characters {
    results {
      name
      image
    }
  }
  }
`;
// On récupuère les données grâce à UseQuery
const { result } = useQuery(QUERY);
// computed va nous servir à utliser les données et surtout cela va mettre à jour la constante lorsque la requête change
const allCharacters = computed(() => result.value?.characters.results ?? [])

//on va console.log à chaque fois que allCharacters cela fonctionne en symbiose avec computed
watchEffect(() => {
  console.log(allCharacters);
}

)
</script>


<template>
  <div class="logo"><img src="/logo.png" alt="logo" class="mx-auto"></div>

  <Filter />
</template>


<style scoped>
</style>
