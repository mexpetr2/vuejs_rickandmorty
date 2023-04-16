<script>
export default {
  props: {
    character: Object
  }
}
</script>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg card">
    <img class="rounded-full" :src="character.image" alt="characher image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ character.name }}</div>
      <p class="text-gray-700 text-base">
        {{ character.status }}
      </p>
    </div>
  </div>
</template>
