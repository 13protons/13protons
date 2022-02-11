<template>
  <div class="space-x-4 uppercase font-sans font-bold">
    <span><slot name="role"></slot></span>
    <span><slot name="duration"></slot></span>
    <span><slot name="location"></slot></span>
  </div>
</template>

<style lang="postcss" scoped>
  span {
    @apply p-1 px-4 text-sm rounded-full text-black bg-gray-200 print:pl-0 print:text-amber-900
  }
</style>