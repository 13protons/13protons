<template>
  <div
    class="
      font-hahmlet
      bg-gradient-to-br
      to-cyan-100 via-white from-slate-100
      dark:to-cyan-900 dark:via-black dark:from-slate-900
      min-h-screen
      py-12
      px-4
      md:px-12
    "
  >
    <div
      class="
        container
        mx-auto
        text-slate-900
        dark:text-white
        relative
        print:text-black print:bg-white
      "
    >
      <!-- place-self-end -->
      <Menu />

      <Nuxt />

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="postcss">
@media print {
  * {
    @apply text-black text-sm;
  }
}
</style>