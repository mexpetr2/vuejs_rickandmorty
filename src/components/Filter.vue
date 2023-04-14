<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { watchEffect,computed } from 'vue';

const QUERY = gql`
  query CHARACTERSDATA {
    characters {
    results {
      species
      status
      gender
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
let species = allCharacters.value
    .map((el)=>{ return el.species })
    .filter((valeur, index, tableau) => tableau.indexOf(valeur) === index);



console.log(species);
</script>


<template>
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold">
            Characters
        </h1>
        <div class="filter-container">
            <div class="gender">
                <h3 class="text-xl">Gender</h3>
            </div>
            <div class="status">
                <h3 class="text-xl">Status</h3>
            </div>
            <div class="species">
                <h3 class="text-xl">Species</h3>
                
                <select size="3">
                    <option class="list-none list" v-for="specie in species"> {{ specie }} </option>
                </select>
            </div>
        </div>

    </div>
</template>