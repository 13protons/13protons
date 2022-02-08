<template>
<div class="font-hahmlet dark bg-gradient-to-br to-cyan-900 via-black from-slate-900  min-h-screen py-12 px-4 md:px-12 ">
  <div class="container mx-auto  text-slate-900 dark:text-white relative">
    
    <!-- place-self-end -->
    <Menu  />
    
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
