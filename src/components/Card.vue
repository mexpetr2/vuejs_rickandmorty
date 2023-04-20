<script>
export default {
  props: {
    character: Object
  },
  methods: {
    Capitalize(string) {
      //On récupère la méthode de son parent, donc du composant Filter
      return this.$parent.Capitalize(string)
    }
  }
}
</script>

<template>
  <div class="rounded overflow-hidden shadow-lg bg-color1">
    <img class="rounded-full mx-auto mt-3 w-4/6" :src="character.image" alt="characher image" />
    <div class="font-bold whitespace-nowrap text-xs 2xl:text-base mt-2 text-center">
      {{ character.name }}
    </div>
    <div class="grid grid-flow-col gap-1 justify-stretch my-3">
      <p class="rounded type text-color2 bg-color3 text-center ml-2">
        {{ Capitalize(character.gender) }}
      </p>
      <p class="rounded type text-color2 bg-color3 text-center">
        {{ Capitalize(character.species) }}
      </p>
      <p class="rounded type text-color2 bg-color3 text-center mr-2">
        {{ Capitalize(character.status) }}
      </p>
    </div>
  </div>
</template>
