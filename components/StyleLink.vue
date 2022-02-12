<template>
  <span class="link"><NuxtLink v-if="to" :to="to"><slot /></NuxtLink><a v-if="href" :href="href" target="_blank"><slot /></a><span v-if="href" class="hidden print:inline"> - {{href}}</span></span>
</template>
<script>
export default {
  props: {
    to: { type: String, default: '' },
    href: { type: String, default: '' }
  }
}
</script>

<style lang="postcss">
.link {
  @apply dark:text-yellow-500 text-sky-700 hover:underline active:text-yellow-300 print:text-sky-800
}
</style>
