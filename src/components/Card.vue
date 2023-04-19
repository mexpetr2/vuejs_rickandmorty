<script>
export default {
  props: {
    character: Object
  },
  methods: {
    Capitalize(string) {
      return this.$parent.Capitalize(string)
    }
  }
}
</script>

<template>
  <div class="rounded overflow-hidden shadow-lg bg-color1">
    <img class="rounded-full mx-auto mt-3 w-3/6" :src="character.image" alt="characher image" />
    <div class="">
      <div class="font-bold text-base whitespace-nowrap mt-2 text-center">{{ character.name }}</div>
      <div class="grid grid-cols-3 gap-1 px-2 mb-5 mt-4">
        <!-- <div class="flex justify-evenly mb-5 mt-4"> -->
        <p class="rounded text-color2 bg-color3 text-center">
          {{ Capitalize(character.gender) }}
        </p>
        <p class="rounded text-color2 bg-color3 text-center">
          {{ Capitalize(character.species) }}
        </p>
        <p class="rounded text-color2 bg-color3 text-center">
          {{ Capitalize(character.status) }}
        </p>
      </div>
    </div>
  </div>
</template>
